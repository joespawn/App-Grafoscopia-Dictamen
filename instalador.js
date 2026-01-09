const fs = require('fs');
const path = require('path');

// --- CONFIGURACIÓN DE ARCHIVOS ---
const files = {
  // 1. Configuración de Vite y TypeScript
  'vite.config.ts': `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
`,
  'tsconfig.json': `
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
`,
  'tsconfig.node.json': `
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
`,
  // 2. Archivo HTML Principal (Adaptado para Vite)
  'index.html': `
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dictamen Pericial - Gemini</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      ::-webkit-scrollbar { width: 8px; height: 8px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.5); border-radius: 4px; border: 1px solid rgba(255, 255, 255, 0.3); }
      ::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.8); }
      .glass-panel { background: rgba(255, 255, 255, 0.65); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.5); box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1); }
      .glass-card { background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.6); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
      .glass-input { background: rgba(255, 255, 255, 0.5); border: 1px solid rgba(255, 255, 255, 0.6); backdrop-filter: blur(4px); }
      .glass-input:focus { background: rgba(255, 255, 255, 0.8); border-color: rgba(99, 102, 241, 0.5); }
    </style>
  </head>
  <body class="bg-fixed bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 text-slate-800 antialiased h-screen w-screen overflow-hidden">
    <div class="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[100px] pointer-events-none z-[-1]"></div>
    <div class="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-400/20 blur-[100px] pointer-events-none z-[-1]"></div>
    <div id="root" class="h-full w-full"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`,
  // 3. Código Fuente (src)
  'src/vite-env.d.ts': `/// <reference types="vite/client" />`,
  
  'src/main.tsx': `
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`,
  'src/index.css': `@tailwind base;\n@tailwind components;\n@tailwind utilities;`,

  'src/types.ts': `
export enum AppView {
  GENERAL_DATA = 'GENERAL_DATA',
  PREFACE = 'PREFACE',
  EXPERTISE_AREAS = 'EXPERTISE_AREAS',
  PROBLEM_STATEMENT = 'PROBLEM_STATEMENT',
  EQUIPMENT = 'EQUIPMENT',
  METHODOLOGY = 'METHODOLOGY',
  METHODS = 'METHODS',
  APPLICABLE_TECHNIQUES = 'APPLICABLE_TECHNIQUES',
  MORPHOLOGICAL_ANALYSIS = 'MORPHOLOGICAL_ANALYSIS',
  QUESTIONNAIRE = 'QUESTIONNAIRE',
  QUESTIONED_DOCUMENT = 'QUESTIONED_DOCUMENT',
  UNDISPUTED_DOCUMENT = 'UNDISPUTED_DOCUMENT',
  STRUCTURAL_ANALYSIS = 'STRUCTURAL_ANALYSIS',
  MICROSCOPIC_ANALYSIS = 'MICROSCOPIC_ANALYSIS',
  GRAPHOKINETIC_ANALYSIS = 'GRAPHOKINETIC_ANALYSIS',
  GENERAL_STRUCTURAL_ANALYSIS = 'GENERAL_STRUCTURAL_ANALYSIS',
  INTEGRAL_ANALYSIS = 'INTEGRAL_ANALYSIS',
  DOCUMENTOSCOPY = 'DOCUMENTOSCOPY',
  BIBLIOGRAPHY = 'BIBLIOGRAPHY',
  QUESTIONS = 'QUESTIONS',
  CHAT = 'CHAT',
  VISION = 'VISION',
  LIVE = 'LIVE',
  EXPORT = 'EXPORT',
  SETTINGS = 'SETTINGS'
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface VisionState {
  image: string | null; 
  prompt: string;
  result: string | null;
  loading: boolean;
}

export interface ReportData {
  court: string; 
  plaintiff: string; 
  defendantName: string; 
  trialType: string; 
  fileNumber: string; 
  docDescription: string; 
  questionedDocCount: number; 
  questionedDocDate: string; 
  questionedDocPhoto: string | null; 
  undisputedDocPages: number; 
  undisputedDocDate: string; 
  courtAddress: string; 
  undisputedDocFolio: string; 
  expertiseSubjects: string; 
  selectedSubjects: string[]; 
  sampleDate: string; 
  expertName: string; 
  hypothesis: 'A' | 'B' | 'C' | null; 
  plaintiffQuestions: string[]; 
  defendantQuestions: string[];
}
`,

  'src/services/geminiService.ts': `
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Message } from '../types';

// NOTA: En Vite usamos import.meta.env en lugar de process.env
const apiKey = import.meta.env.VITE_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const sendChatMessage = async (
  currentMessage: string,
  history: Message[]
): Promise<string> => {
  try {
    const modelId = 'gemini-2.0-flash-exp'; 
    const prompt = \`History:\${history.map(m => \`\${m.role}: \${m.text}\`).join('\\n')} \\nUser: \${currentMessage}\`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        systemInstruction: "You are a helpful, senior-level engineering assistant. Be concise and precise.",
      }
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Chat Error:", error);
    return "Error: Verifica tu API KEY en el archivo .env";
  }
};

export const analyzeImageWithGemini = async (
  base64Image: string,
  prompt: string
): Promise<string> => {
  try {
    const cleanBase64 = base64Image.split(',')[1] || base64Image;
    const modelId = 'gemini-2.0-flash-exp'; // Usamos flash-exp que soporta multimodal

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: {
        parts: [
          { inlineData: { mimeType: 'image/jpeg', data: cleanBase64 } },
          { text: prompt || "Describe this image in detail." }
        ]
      }
    });

    return response.text || "Could not analyze the image.";
  } catch (error) {
    console.error("Vision Error:", error);
    return "Failed to analyze the image. Please try again.";
  }
};
`,
  // --- COMPONENTES (Contenido Simplificado para que el script funcione, debes pegar el resto de tus componentes aquí si faltan, pero estos son los vitales para arrancar) ---
  
  'src/App.tsx': `
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatView from './components/ChatView';
// Importa el resto de tus componentes aquí
// ... (He omitido las importaciones de componentes no críticos para mantener el script corto, pero la estructura está lista)
import { AppView, ReportData } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.CHAT);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [reportData, setReportData] = useState<ReportData>({
    court: '', plaintiff: '', defendantName: '', trialType: '', fileNumber: '',
    docDescription: 'Impresión Offset', questionedDocCount: 1, questionedDocDate: '', questionedDocPhoto: null,
    undisputedDocPages: 0, undisputedDocDate: '', courtAddress: '', undisputedDocFolio: '',
    expertiseSubjects: 'Grafoscopía y Documentoscopía', selectedSubjects: ['Grafoscopía', 'Documentoscopía'],
    sampleDate: '', expertName: '', hypothesis: null, plaintiffQuestions: [], defendantQuestions: []  
  });

  const renderContent = () => {
    // Para simplificar la primera ejecución, solo mostramos el Chat.
    // Tienes que añadir los demás casos del switch como en tu código original.
    switch (currentView) {
      case AppView.CHAT: return <ChatView />;
      default: return <div className="p-10">Vista {currentView} en construcción. Copia el resto de tus archivos components/ aquí.</div>;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden font-sans">
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-xl border-b border-white/20 z-40 flex items-center px-4 shadow-lg">
        <button onClick={() => setIsSidebarOpen(true)} className="text-slate-800 p-2">Menu</button>
      </div>
      <Sidebar currentView={currentView} onChangeView={(view) => { setCurrentView(view); setIsSidebarOpen(false); }} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main className="flex-1 h-full relative pt-16 md:pt-0 w-full overflow-hidden">{renderContent()}</main>
    </div>
  );
};
export default App;
`,

  'src/components/Sidebar.tsx': `
import React from 'react';
import { AppView } from '../types';

interface SidebarProps {
  currentView: AppView;
  onChangeView: (view: AppView) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView, isOpen, onClose }) => {
  const navItems = [
    { id: AppView.GENERAL_DATA, label: '0. Datos Generales', icon: '📋' },
    { id: AppView.CHAT, label: 'AI Chat', icon: '💬' },
    // Agrega el resto de tus items aquí
  ];

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={onClose}></div>}
      <div className={\`fixed inset-y-0 left-0 z-50 w-72 flex flex-col h-full bg-slate-900/80 backdrop-blur-2xl border-r border-white/10 shadow-2xl transition-transform duration-300 \${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:w-64 text-slate-100\`}>
        <div className="p-6 border-b border-white/10"><h1 className="text-xl font-bold">Peritaje</h1></div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => onChangeView(item.id)} className={\`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all text-left border \${currentView === item.id ? 'bg-blue-600/60 border-white/20 text-white' : 'border-transparent text-slate-400 hover:bg-white/10'}\`}>
              <span>{item.icon}</span><span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};
export default Sidebar;
`,

  'src/components/ChatView.tsx': `
import React, { useState } from 'react';
import { sendChatMessage } from '../services/geminiService';
import { Message } from '../types';

const ChatView: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input) return;
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    const response = await sendChatMessage(input, messages);
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: response, timestamp: Date.now() }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 p-4">
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map(m => (
          <div key={m.id} className={\`p-4 rounded-xl \${m.role === 'user' ? 'bg-blue-600 text-white self-end ml-auto' : 'bg-white border text-slate-800'}\`} style={{maxWidth: '80%'}}>
            {m.text}
          </div>
        ))}
        {loading && <div className="text-slate-400">Escribiendo...</div>}
      </div>
      <div className="flex gap-2">
        <input className="flex-1 p-2 border rounded-lg" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} placeholder="Escribe algo..." />
        <button onClick={handleSend} className="bg-blue-600 text-white px-4 rounded-lg">Enviar</button>
      </div>
    </div>
  );
};
export default ChatView;
`,
  '.env': `VITE_API_KEY=TU_API_KEY_DE_GOOGLE_AQUI`
};

// --- FUNCIÓN PARA CREAR ARCHIVOS ---
const createFiles = () => {
  // Crear directorios necesarios
  ['src', 'src/components', 'src/services'].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });

  // Escribir archivos
  Object.entries(files).forEach(([fileName, content]) => {
    const filePath = path.join(__dirname, fileName);
    fs.writeFileSync(filePath, content.trim());
    console.log(`✅ Creado: ${fileName}`);
  });

  console.log("\\n¡Instalación de archivos completa!");
  console.log("-----------------------------------");
  console.log("PASOS SIGUIENTES:");
  console.log("1. Ejecuta: npm install react react-dom @vitejs/plugin-react vite typescript @types/react @types/react-dom @google/genai");
  console.log("2. Abre el archivo .env y pega tu API Key de Google.");
  console.log("3. Ejecuta: npm run dev");
};

createFiles();