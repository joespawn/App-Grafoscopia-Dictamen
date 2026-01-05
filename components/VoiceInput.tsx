import React, { useState, useEffect } from 'react';

// Define types for Web Speech API since they are not in standard lib by default
interface IWindow extends Window {
  webkitSpeechRecognition: any;
  SpeechRecognition: any;
}

interface VoiceInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  onValueChange: (value: string) => void;
  className?: string;
}

const VoiceInput: React.FC<VoiceInputProps> = ({ 
  label, 
  value, 
  onValueChange, 
  className = "", 
  placeholder,
  type = "text",
  ...props 
}) => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    const { webkitSpeechRecognition, SpeechRecognition } = window as unknown as IWindow;
    const SpeechRecognitionConstructor = SpeechRecognition || webkitSpeechRecognition;

    if (SpeechRecognitionConstructor) {
      const recog = new SpeechRecognitionConstructor();
      recog.continuous = false;
      recog.interimResults = false;
      recog.lang = 'es-MX'; // Configurado para Español México

      recog.onstart = () => setIsListening(true);
      recog.onend = () => setIsListening(false);
      recog.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        // Si el input es numérico, intentamos limpiar el texto
        if (type === 'number') {
            const num = transcript.replace(/[^0-9]/g, '');
            onValueChange(num);
        } else {
            // Capitalizar la primera letra para mejor formato
            const formatted = transcript.charAt(0).toUpperCase() + transcript.slice(1);
            // Si ya había texto, lo agregamos, si no, reemplazamos
            const currentVal = String(value || '');
            const separator = currentVal.length > 0 ? ' ' : '';
            onValueChange(currentVal + separator + formatted);
        }
      };
      
      setRecognition(recog);
    }
  }, [value, onValueChange, type]);

  const toggleListening = () => {
    if (!recognition) {
      alert("Tu navegador no soporta reconocimiento de voz. Intenta usar Chrome.");
      return;
    }

    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          placeholder={isListening ? "Escuchando..." : placeholder}
          className={`w-full p-2 pr-10 bg-white rounded border focus:ring-2 outline-none transition-all ${
            isListening 
              ? 'border-red-400 ring-red-100 bg-red-50 text-red-900 placeholder-red-400' 
              : 'border-slate-300 focus:ring-blue-500 focus:border-transparent'
          }`}
          {...props}
        />
        <button
          type="button"
          onClick={toggleListening}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 rounded-full transition-colors ${
            isListening 
              ? 'bg-red-500 text-white animate-pulse' 
              : 'text-slate-400 hover:text-blue-600 hover:bg-slate-100'
          }`}
          title="Dictar por voz"
        >
          {isListening ? (
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
              <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 9.364l.75 1.386a.75.75 0 0 1-1.318.712l-.774-1.433a.75.75 0 0 1-.659 0l-.774 1.433a.75.75 0 0 1-1.318-.712l.75-1.386a6.751 6.751 0 0 1-6-9.364v-1.5a.75.75 0 0 1 .75-.75Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default VoiceInput;
