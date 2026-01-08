import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from "@google/genai";

// Helpers for Audio Encoding/Decoding
function base64ToUint8Array(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

function floatTo16BitPCM(float32Array: Float32Array): ArrayBuffer {
  const buffer = new ArrayBuffer(float32Array.length * 2);
  const view = new DataView(buffer);
  for (let i = 0; i < float32Array.length; i++) {
    let s = Math.max(-1, Math.min(1, float32Array[i]));
    view.setInt16(i * 2, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
  }
  return buffer;
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

interface Transcript {
  id: string;
  role: 'user' | 'model';
  text: string;
  isComplete: boolean;
}

const LiveView: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState<string>('Ready to connect');
  const [volume, setVolume] = useState(0);
  const [transcripts, setTranscripts] = useState<Transcript[]>([]);

  // References to keep track of audio context and session without re-renders
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sessionRef = useRef<any>(null);
  const inputSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const activeSourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const logsContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logs
  useEffect(() => {
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
    }
  }, [transcripts]);

  const cleanup = () => {
    if (scriptProcessorRef.current) {
      scriptProcessorRef.current.disconnect();
      scriptProcessorRef.current = null;
    }
    if (inputSourceRef.current) {
      inputSourceRef.current.disconnect();
      inputSourceRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    // Stop all active audio sources immediately
    activeSourcesRef.current.forEach(source => {
      try { source.stop(); } catch(e) {}
    });
    activeSourcesRef.current.clear();

    if (sessionRef.current) {
      try { sessionRef.current.close(); } catch (e) {}
      sessionRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    nextStartTimeRef.current = 0;
    setVolume(0);
  };

  const startSession = async () => {
    try {
      setStatus('Initializing Audio...');
      setTranscripts([]);
      
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const audioCtx = new AudioContextClass({ sampleRate: 24000 });
      audioContextRef.current = audioCtx;
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: {
        sampleRate: 16000,
        channelCount: 1,
        echoCancellation: true,
        autoGainControl: true,
        noiseSuppression: true
      }});
      mediaStreamRef.current = stream;

      setStatus('Connecting to Gemini...');

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          // Enable transcription for both input and output
          inputAudioTranscription: {},
          outputAudioTranscription: {},
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
          },
          systemInstruction: "You are a helpful, witty, and concise AI assistant named Gemini. Keep your responses relatively short and conversational.",
        },
        callbacks: {
          onopen: () => {
            setStatus('Connected & Listening');
            setIsActive(true);

            const source = audioCtx.createMediaStreamSource(stream);
            inputSourceRef.current = source;
            
            const processor = audioCtx.createScriptProcessor(4096, 1, 1);
            scriptProcessorRef.current = processor;

            processor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              
              let sum = 0;
              for(let i=0; i<inputData.length; i++) sum += inputData[i] * inputData[i];
              const rms = Math.sqrt(sum / inputData.length);
              setVolume(Math.min(rms * 10, 1)); 

              const pcmData = floatTo16BitPCM(inputData);
              const base64Data = arrayBufferToBase64(pcmData);

              sessionPromise.then(session => {
                 session.sendRealtimeInput({
                    media: {
                      mimeType: 'audio/pcm;rate=16000',
                      data: base64Data
                    }
                 });
              });
            };

            source.connect(processor);
            processor.connect(audioCtx.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            const serverContent = message.serverContent;
            
            // Handle Audio
            if (serverContent?.modelTurn?.parts?.[0]?.inlineData) {
              const base64Audio = serverContent.modelTurn.parts[0].inlineData.data;
              if (base64Audio) {
                const audioData = base64ToUint8Array(base64Audio);
                const dataInt16 = new Int16Array(audioData.buffer);
                const buffer = audioCtx.createBuffer(1, dataInt16.length, 24000);
                const channelData = buffer.getChannelData(0);
                
                for (let i = 0; i < dataInt16.length; i++) {
                  channelData[i] = dataInt16[i] / 32768.0;
                }

                const source = audioCtx.createBufferSource();
                source.buffer = buffer;
                source.connect(audioCtx.destination);
                
                // Track active sources for interruption
                source.onended = () => {
                   activeSourcesRef.current.delete(source);
                };
                activeSourcesRef.current.add(source);

                const currentTime = audioCtx.currentTime;
                const startTime = Math.max(nextStartTimeRef.current, currentTime);
                source.start(startTime);
                nextStartTimeRef.current = startTime + buffer.duration;
              }
            }

            // Handle Interruption
            if (serverContent?.interrupted) {
               console.log("Interrupted!");
               // Stop all currently playing audio
               activeSourcesRef.current.forEach(src => {
                 try { src.stop(); } catch(e) {}
               });
               activeSourcesRef.current.clear();
               nextStartTimeRef.current = audioCtx.currentTime;
            }

            // Handle Transcriptions
            if (serverContent?.modelTurn?.parts?.[0]?.text) {
               // Usually model text comes in chunks via outputTranscription in new API versions, 
               // but sometimes it appears in parts. Checking turnComplete or outputTranscription is safer.
            }
            
            // Note: The structure of transcription updates varies slightly by API version.
            // We'll accumulate text based on the presence of transcription fields.
            /* 
               Since the exact chunking for transcription in the unified node SDK can be tricky,
               we will simplify: we rely on 'turnComplete' to finalize, or stream if available.
               For this demo, we'll try to catch `outputTranscription` and `inputTranscription`.
            */
            
            // Check for explicit transcription updates (if enabled in config)
            const outTrans = (message as any).serverContent?.outputTranscription;
            const inTrans = (message as any).serverContent?.inputTranscription;

            if (outTrans?.text || inTrans?.text) {
               setTranscripts(prev => {
                  const newTranscripts = [...prev];
                  const text = outTrans?.text || inTrans?.text;
                  const role = outTrans ? 'model' : 'user';
                  const last = newTranscripts[newTranscripts.length - 1];

                  if (last && last.role === role && !last.isComplete) {
                     last.text += text;
                  } else {
                     newTranscripts.push({
                       id: Date.now().toString(),
                       role,
                       text,
                       isComplete: false
                     });
                  }
                  return newTranscripts;
               });
            }

            if (serverContent?.turnComplete) {
               setTranscripts(prev => {
                 const newTranscripts = [...prev];
                 if (newTranscripts.length > 0) {
                   newTranscripts[newTranscripts.length - 1].isComplete = true;
                 }
                 return newTranscripts;
               });
            }
          },
          onclose: () => {
            setStatus('Connection Closed');
            setIsActive(false);
          },
          onerror: (err) => {
            console.error(err);
            setStatus('Error occurred');
            setIsActive(false);
          }
        }
      });
      
      sessionRef.current = sessionPromise;

    } catch (error) {
      console.error("Failed to start session:", error);
      setStatus(`Error: ${(error as Error).message}`);
      setIsActive(false);
      cleanup();
    }
  };

  const handleToggle = () => {
    if (isActive) {
      cleanup();
      setIsActive(false);
      setStatus('Ready to connect');
    } else {
      startSession();
    }
  };

  useEffect(() => {
    return () => cleanup();
  }, []);

  return (
    <div className="flex flex-col h-full bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background & Visualizer Layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        {isActive && (
          <div className="w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse transition-transform duration-100" style={{ transform: `scale(${1 + volume * 2})` }}></div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center z-10 p-8">
        <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
          {isActive ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full animate-[spin_4s_linear_infinite]"></div>
              <div className="absolute inset-4 border-4 border-purple-500/30 rounded-full animate-[spin_3s_linear_infinite_reverse]"></div>
              <div 
                className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-transform duration-75"
                style={{ transform: `scale(${1 + (volume * 1.5)})` }}
              ></div>
            </div>
          ) : (
            <div className="w-40 h-40 rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center shadow-inner hover:scale-105 transition-transform duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-slate-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
              </svg>
            </div>
          )}
        </div>

        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Gemini Live
          </h2>
          <span className={`mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
            isActive ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-slate-800 text-slate-400 border border-slate-700'
          }`}>
            {isActive && <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>}
            {status}
          </span>
        </div>

        <button
          onClick={handleToggle}
          className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform active:scale-95 shadow-xl ${
            isActive 
              ? 'bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500/30' 
              : 'bg-white text-slate-900 hover:bg-slate-200'
          }`}
        >
          {isActive ? 'Disconnect' : 'Start Conversation'}
        </button>
      </div>

      {/* Transcription Log (Bottom Panel) */}
      <div className="h-1/3 bg-slate-900/80 border-t border-slate-800 backdrop-blur-sm p-4 z-20 flex flex-col">
        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Live Transcript</h3>
        <div ref={logsContainerRef} className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          {transcripts.length === 0 && isActive && (
             <p className="text-slate-600 italic text-sm text-center mt-4">Listening for speech...</p>
          )}
          {transcripts.map((t, idx) => (
            <div key={idx} className={`flex ${t.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                t.role === 'user' 
                  ? 'bg-blue-600/20 text-blue-100 border border-blue-500/30' 
                  : 'bg-slate-800 text-slate-300 border border-slate-700'
              }`}>
                {t.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveView;