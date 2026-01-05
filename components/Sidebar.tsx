import React from 'react';
import { AppView } from '../types';

interface SidebarProps {
  currentView: AppView;
  onChangeView: (view: AppView) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView }) => {
  const navItems = [
    { id: AppView.GENERAL_DATA, label: '0. Datos Generales', icon: '📋' },
    { id: AppView.CHAT, label: 'AI Chat', icon: '💬' },
    { id: AppView.VISION, label: 'Visual Analysis', icon: '👁️' },
    { id: AppView.LIVE, label: 'Gemini Live', icon: '🎙️' },
    { id: AppView.STRUCTURAL_ANALYSIS, label: '15. Des. Escritural', icon: '📑' },
    { id: AppView.INTEGRAL_ANALYSIS, label: '16. Análisis Integral', icon: '⚖️' },
    { id: AppView.DOCUMENTOSCOPY, label: '17. Documentoscopía', icon: '🔍' },
    { id: AppView.BIBLIOGRAPHY, label: '18. Bibliografía', icon: '📚' },
    { id: AppView.QUESTIONS, label: '19. Cuestionamientos', icon: '❓' },
    { id: AppView.SETTINGS, label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white flex flex-col h-full border-r border-slate-800">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Gemini Workspace
        </h1>
        <p className="text-xs text-slate-400 mt-1">v1.4.0 (Forensic Ed.)</p>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onChangeView(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
              currentView === item.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <span className="text-lg flex-shrink-0">{item.icon}</span>
            <span className="font-medium truncate">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
          <p className="text-xs text-slate-400 leading-relaxed">
            Powered by Google GenAI SDK.
            <br />
            Model: Gemini 3 Flash
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;