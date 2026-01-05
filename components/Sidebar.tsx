import React from 'react';
import { AppView } from '../types';

interface SidebarProps {
  currentView: AppView;
  onChangeView: (view: AppView) => void;
  isOpen: boolean; // Control visibility on mobile
  onClose: () => void; // Function to close sidebar
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView, isOpen, onClose }) => {
  const navItems = [
    { id: AppView.GENERAL_DATA, label: '0. Datos Generales', icon: '📋' },
    { id: AppView.PREFACE, label: '1. Presentación', icon: '⚖️' },
    { id: AppView.EXPERTISE_AREAS, label: '2. Materias a Dictaminar', icon: '✅' },
    { id: AppView.PROBLEM_STATEMENT, label: '3. Planteamiento', icon: '🎯' },
    { id: AppView.EQUIPMENT, label: '4. Instrumental', icon: '🔬' },
    { id: AppView.METHODOLOGY, label: '5. Metodología', icon: '🧠' },
    { id: AppView.METHODS, label: '6. Método', icon: '🛠️' },
    { id: AppView.APPLICABLE_TECHNIQUES, label: '7. Técnicas Aplicables', icon: '📐' },
    { id: AppView.MORPHOLOGICAL_ANALYSIS, label: '8. Análisis Morfológico', icon: '🔍' },
    { id: AppView.QUESTIONNAIRE, label: '9. Interrogatorio', icon: '📝' },
    { id: AppView.QUESTIONED_DOCUMENT, label: '10. Documento Cuestionado', icon: '📄' },
    { id: AppView.UNDISPUTED_DOCUMENT, label: '11. Documento Indubitable', icon: '📜' },
    { id: AppView.STRUCTURAL_ANALYSIS, label: '12. Análisis Morfológico del Trazado', icon: '📑' },
    { id: AppView.MICROSCOPIC_ANALYSIS, label: '13. Análisis Microscópicos', icon: '🔬' },
    { id: AppView.GRAPHOKINETIC_ANALYSIS, label: '14. Análisis Grafocinético', icon: '✍️' },
    { id: AppView.GENERAL_STRUCTURAL_ANALYSIS, label: '15. Análisis Estructural General', icon: '📐' },
    { id: AppView.INTEGRAL_ANALYSIS, label: '16. Análisis Integral', icon: '⚖️' },
    { id: AppView.DOCUMENTOSCOPY, label: '17. Análisis Documentoscopía', icon: '🔍' },
    { id: AppView.BIBLIOGRAPHY, label: '18. Bibliografía', icon: '📚' },
    { id: AppView.QUESTIONS, label: '19. Cuestionamientos Partes', icon: '❓' },
    { id: AppView.CHAT, label: 'AI Chat', icon: '💬' },
    { id: AppView.VISION, label: 'Visual Analysis', icon: '👁️' },
    { id: AppView.LIVE, label: 'Gemini Live', icon: '🎙️' },
    { id: AppView.EXPORT, label: 'Exportar Dictamen', icon: '📥' },
    { id: AppView.SETTINGS, label: 'Settings', icon: '⚙️' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar Container - Dark Glassmorphism */}
      <div 
        className={`
          fixed inset-y-0 left-0 z-50 w-72 flex flex-col h-full 
          bg-slate-900/80 backdrop-blur-2xl border-r border-white/10 shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:relative md:translate-x-0 md:w-64 print:hidden text-slate-100
        `}
      >
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
              Peritaje
            </h1>
            <p className="text-xs text-slate-400 mt-1 font-medium tracking-wide">Grafoscopía & Documentoscopía</p>
          </div>
          {/* Close button for mobile */}
          <button onClick={onClose} className="md:hidden text-slate-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-left border ${
                currentView === item.id
                  ? 'bg-gradient-to-r from-blue-600/60 to-purple-600/60 border-white/20 text-white shadow-lg shadow-blue-900/40 backdrop-blur-md'
                  : 'border-transparent text-slate-400 hover:bg-white/10 hover:text-white hover:border-white/5'
              }`}
            >
              <span className="text-lg flex-shrink-0 filter drop-shadow-md">{item.icon}</span>
              <span className="font-medium truncate text-sm md:text-sm tracking-wide">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10 bg-black/20">
          <div className="p-3 rounded-lg bg-white/5 border border-white/5">
            <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-wider font-semibold">
              Powered by Gemini 3 Flash
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;