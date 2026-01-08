import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ChatView from './components/ChatView';
import VisionView from './components/VisionView';
import LiveView from './components/LiveView';
import StructuralAnalysisView from './components/StructuralAnalysisView';
import MicroscopicAnalysisView from './components/MicroscopicAnalysisView';
import IntegralAnalysisView from './components/IntegralAnalysisView';
import DocumentoscopyView from './components/DocumentoscopyView';
import BibliographyView from './components/BibliographyView';
import QuestioningView from './components/QuestioningView';
import EquipmentView from './components/EquipmentView';
import GeneralDataView from './components/GeneralDataView';
import ProblemStatementView from './components/ProblemStatementView';
import ExpertiseAreasView from './components/ExpertiseAreasView';
import QuestionnaireView from './components/QuestionnaireView';
import QuestionedDocumentView from './components/QuestionedDocumentView';
import UndisputedDocumentView from './components/UndisputedDocumentView';
import PrefaceView from './components/PrefaceView';
import ExportView from './components/ExportView';
import MethodologyView from './components/MethodologyView';
import MethodsView from './components/MethodsView';
import ApplicableTechniquesView from './components/ApplicableTechniquesView';
import MorphologicalAnalysisView from './components/MorphologicalAnalysisView';
import GraphokineticAnalysisView from './components/GraphokineticAnalysisView';
import GeneralStructuralAnalysisView from './components/GeneralStructuralAnalysisView';
import { AppView, ReportData } from './types';

// Estado inicial por defecto
const INITIAL_REPORT_DATA: ReportData = {
  court: '',
  plaintiff: '',
  defendantName: '',
  trialType: '',
  fileNumber: '',
  
  // Document Details
  docDescription: 'Impresión Offset',
  questionedDocCount: 1,
  questionedDocDate: '',
  questionedDocPhoto: null,

  // Undisputed Document Details
  undisputedDocPages: 0,
  undisputedDocDate: '',
  courtAddress: '',
  undisputedDocFolio: '',

  expertiseSubjects: 'Grafoscopía y Documentoscopía',
  selectedSubjects: ['Grafoscopía', 'Documentoscopía'], // Default selections
  sampleDate: '',
  expertName: '',
  
  hypothesis: null,
  plaintiffQuestions: [], 
  defendantQuestions: []  
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.GENERAL_DATA);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar state
  
  // Shared state for the Forensic Report with Persistence logic
  const [reportData, setReportData] = useState<ReportData>(() => {
    // Intentar cargar datos guardados al iniciar
    try {
      const savedData = localStorage.getItem('forensicReportData');
      return savedData ? JSON.parse(savedData) : INITIAL_REPORT_DATA;
    } catch (e) {
      console.error("Error loading saved data", e);
      return INITIAL_REPORT_DATA;
    }
  });

  // Guardar en localStorage cada vez que reportData cambie
  useEffect(() => {
    try {
      localStorage.setItem('forensicReportData', JSON.stringify(reportData));
    } catch (e) {
      console.error("Error saving data", e);
    }
  }, [reportData]);

  const renderContent = () => {
    switch (currentView) {
      case AppView.GENERAL_DATA:
        return <GeneralDataView data={reportData} onUpdate={setReportData} />;
      case AppView.PREFACE:
        return <PrefaceView data={reportData} />;
      case AppView.EXPERTISE_AREAS:
        return <ExpertiseAreasView data={reportData} onUpdate={setReportData} />;
      case AppView.PROBLEM_STATEMENT:
        return <ProblemStatementView data={reportData} />;
      case AppView.EQUIPMENT:
        return <EquipmentView />;
      case AppView.METHODOLOGY:
        return <MethodologyView data={reportData} />;
      case AppView.METHODS:
        return <MethodsView data={reportData} />;
      case AppView.APPLICABLE_TECHNIQUES:
        return <ApplicableTechniquesView />;
      case AppView.MORPHOLOGICAL_ANALYSIS:
        return <MorphologicalAnalysisView data={reportData} />;
      case AppView.QUESTIONNAIRE:
        return <QuestionnaireView data={reportData} />;
      case AppView.QUESTIONED_DOCUMENT:
        return <QuestionedDocumentView data={reportData} />;
      case AppView.UNDISPUTED_DOCUMENT:
        return <UndisputedDocumentView data={reportData} />;
      case AppView.CHAT:
        return <ChatView />;
      case AppView.VISION:
        return <VisionView />;
      case AppView.LIVE:
        return <LiveView />;
      case AppView.STRUCTURAL_ANALYSIS:
        return <StructuralAnalysisView data={reportData} />;
      case AppView.MICROSCOPIC_ANALYSIS:
        return <MicroscopicAnalysisView data={reportData} />;
      case AppView.GRAPHOKINETIC_ANALYSIS:
        return <GraphokineticAnalysisView data={reportData} />;
      case AppView.GENERAL_STRUCTURAL_ANALYSIS:
        return <GeneralStructuralAnalysisView data={reportData} />;
      case AppView.INTEGRAL_ANALYSIS:
        return <IntegralAnalysisView data={reportData} />;
      case AppView.DOCUMENTOSCOPY:
        return <DocumentoscopyView data={reportData} />;
      case AppView.BIBLIOGRAPHY:
        return <BibliographyView />;
      case AppView.QUESTIONS:
        return <QuestioningView data={reportData} />;
      case AppView.EXPORT:
        return <ExportView data={reportData} />;
      case AppView.SETTINGS:
        return (
          <div className="p-4 md:p-8 flex flex-col h-full overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">Configuración</h2>
            <div className="glass-panel p-6 rounded-2xl">
              <p className="text-slate-700 mb-4">
                Opciones de la aplicación.
              </p>
              <button 
                onClick={() => {
                  if(confirm('¿Estás seguro de borrar todos los datos del dictamen? Esta acción no se puede deshacer.')) {
                    setReportData(INITIAL_REPORT_DATA);
                    localStorage.removeItem('forensicReportData');
                  }
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Borrar todos los datos y reiniciar
              </button>
            </div>
          </div>
        );
      default:
        return <GeneralDataView data={reportData} onUpdate={setReportData} />;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden font-sans">
      
      {/* Mobile Header - Glassmorphism */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-xl border-b border-white/20 z-40 flex items-center px-4 shadow-lg">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="text-slate-800 p-2 hover:bg-white/20 rounded-lg transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <span className="ml-4 text-lg font-bold text-slate-800 truncate">Peritaje Grafoscopía</span>
      </div>

      {/* Sidebar with Responsive Props */}
      <Sidebar 
        currentView={currentView} 
        onChangeView={(view) => {
          setCurrentView(view);
          setIsSidebarOpen(false); // Close sidebar on selection (mobile)
        }} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Area - Transparent to show body gradient */}
      <main className="flex-1 h-full relative pt-16 md:pt-0 w-full overflow-hidden">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;