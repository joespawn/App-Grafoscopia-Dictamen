import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatView from './components/ChatView';
import VisionView from './components/VisionView';
import LiveView from './components/LiveView';
import StructuralAnalysisView from './components/StructuralAnalysisView';
import IntegralAnalysisView from './components/IntegralAnalysisView';
import DocumentoscopyView from './components/DocumentoscopyView';
import BibliographyView from './components/BibliographyView';
import QuestioningView from './components/QuestioningView';
import GeneralDataView from './components/GeneralDataView';
import { AppView, ReportData } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.CHAT);
  
  // Shared state for the Forensic Report
  const [reportData, setReportData] = useState<ReportData>({
    defendantName: '',
    hypothesis: null,
    plaintiffQuestions: [], // Initialize empty array
    defendantQuestions: []  // Initialize empty array
  });

  const renderContent = () => {
    switch (currentView) {
      case AppView.GENERAL_DATA:
        return <GeneralDataView data={reportData} onUpdate={setReportData} />;
      case AppView.CHAT:
        return <ChatView />;
      case AppView.VISION:
        return <VisionView />;
      case AppView.LIVE:
        return <LiveView />;
      case AppView.STRUCTURAL_ANALYSIS:
        return <StructuralAnalysisView />;
      case AppView.INTEGRAL_ANALYSIS:
        return <IntegralAnalysisView data={reportData} />;
      case AppView.DOCUMENTOSCOPY:
        return <DocumentoscopyView data={reportData} />;
      case AppView.BIBLIOGRAPHY:
        return <BibliographyView />;
      case AppView.QUESTIONS:
        return <QuestioningView data={reportData} />;
      case AppView.SETTINGS:
        return (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">Settings</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <p className="text-slate-600">
                You can extend this application by adding your existing code here.
                The structure is modular, allowing you to plug in new views in <code>App.tsx</code>.
              </p>
              <div className="mt-4 p-4 bg-blue-50 text-blue-800 rounded-lg text-sm">
                <strong>Tip:</strong> Create a new component for your existing code and import it here.
              </div>
            </div>
          </div>
        );
      default:
        return <ChatView />;
    }
  };

  return (
    <div className="flex h-screen w-screen bg-slate-50 overflow-hidden font-sans">
      <Sidebar currentView={currentView} onChangeView={setCurrentView} />
      <main className="flex-1 h-full relative">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;