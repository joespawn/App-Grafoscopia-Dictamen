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
import PageWordBar from './components/PageWordBar';
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
  undisputedDocPages: 1,
  undisputedDocDate: '',
  courtAddress: '',
  undisputedDocFolio: '',

  expertiseSubjects: 'Grafoscopía y Documentoscopía',
  selectedSubjects: ['Grafoscopía', 'Documentoscopía'],
  sampleDate: '',
  expertName: '',
  
  hypothesis: null,
  plaintiffQuestions: [], 
  defendantQuestions: [],
  questioningAnswers: {}
};

// Caso de ejemplo completo para peritaje judicial
const SAMPLE_REPORT_DATA: ReportData = {
  court: 'JUZGADO VIGÉSIMO TERCERO DE LO CIVIL DE LA CIUDAD DE MÉXICO',
  plaintiff: 'ADMINISTRADORA DE CRÉDITO Y VALORES S.A. DE C.V.',
  defendantName: 'LIC. ROBERTO CARLOS MENDOZA SOTO',
  trialType: 'EJECUTIVO MERCANTIL ORAL',
  fileNumber: '678/2024',
  
  docDescription: 'Impresión Offset',
  questionedDocCount: 1,
  questionedDocDate: '15 de marzo de 2023',
  questionedDocPhoto: null,

  undisputedDocPages: 4,
  undisputedDocDate: '22 de enero de 2024',
  courtAddress: 'Calle Claudio Bernard No. 60, Colonia Doctores, Alcaldía Cuauhtémoc, C.P. 06720, Ciudad de México',
  undisputedDocFolio: 'Fojas 45 a 49 del expediente principal',

  expertiseSubjects: 'Grafoscopía, Documentoscopía y Grafometría',
  selectedSubjects: ['Grafoscopía', 'Documentoscopía', 'Grafometría', 'Fotografía Forense'],
  sampleDate: '22 de enero de 2024',
  expertName: 'LIC. ALEJANDRO MORALES SALGADO',
  
  hypothesis: 'B', // Falsa / No Procede
  plaintiffQuestions: [
    'Que diga el perito si tuvo a la vista el documento base de la acción consistente en el pagaré.',
    'Que diga el perito qué método técnico empleó para el cotejo de las firmas controvertidas.',
    'Que diga el perito si la firma del pagaré coincide en su aspecto general con la firma de la demandada.'
  ],
  defendantQuestions: [
    'Que determine el perito si existen indicios de ejecución lenta, temblor o paradas en la firma cuestionada.',
    'Que señale el perito si los momentos gráficos y puntos de ataque corresponden a la dinámica muscular del demandado.',
    'Que emita el perito su conclusión categórica sobre si la firma del pagaré proviene o no del puño y letra de mi mandante.'
  ],
  questioningAnswers: {
    'p-0': 'Sí, el suscrito perito tuvo a la vista directa en el secreto del Juzgado el pagaré original base de la acción, procediendo a su examen microscópico y fotográfico.',
    'p-1': 'Se aplicó el Método Grafocrítico y Analítico-Comparativo sustentado en las Leyes de la Escritura de Solange Pellat y la escuela de Félix del Val Latierro.',
    'p-2': 'Aunque visualmente existe una imitación de la forma externa (morfología burda), el examen intrínseco revela divergencias determinantes en la presión, velocidad y automatismos.',
    'd-0': 'Efectivamente, en la firma cuestionada se detectaron paradas anormales del útil inscriptor, falta de tensión de línea y una velocidad disminuida característica del calco o imitación servil.',
    'd-1': 'No corresponden. Se advierten puntos de ataque apoyados y torpes que discrepan de los ataques acerados y espontáneos habituales en el titular.',
    'd-2': 'Se determina de manera categórica que la firma dubitada NO PROCEDE del puño y letra del demandado Lic. Roberto Carlos Mendoza Soto.'
  },
  structuralAnalysis: {
    questionedImages: [],
    undisputedImages: [],
    dictamen: 'Se detecta discrepancia angular y velocidad reducida en el grafismo dubitado, con presión excesiva en los enlaces.',
    tableRows: [
      { aspect: 'Dimensión (Altura)', indubitable: 'Proporcionada (12 mm)', dubitable: 'Sobredimensionada (16 mm)', observations: 'Divergencia notable en caja de escritura' },
      { aspect: 'Dirección de la línea', indubitable: 'Ascendente a 8°', dubitable: 'Horizontal rígida a 1°', observations: 'Ausencia de la inclinación habitual del autor' },
      { aspect: 'Inclinación', indubitable: 'Dextrógira a 75°', dubitable: 'Vertical a 90°', observations: 'Divergencia angular manifiesta' },
      { aspect: 'Presión Efectiva (Surco)', indubitable: 'Alternante (finos y gruesos)', dubitable: 'Monótona y pesada', observations: 'Surco profundo continuo por ejecución lenta' },
      { aspect: 'Velocidad de ejecución', indubitable: 'Rápida y espontánea', dubitable: 'Lenta con vacilaciones', observations: 'Signo indiscutible de imitación' },
      { aspect: 'Punto de Ataque', indubitable: 'Acerado en movimiento aéreo', dubitable: 'Apoyado y estático', observations: 'Falta de dinamismo al inicio' },
      { aspect: 'Remates (Finales)', indubitable: 'Fuga acerada rápida', dubitable: 'Remate trunco y contenido', observations: 'Frenado involuntario por control visual' },
      { aspect: 'Enlaces (Coligamento)', indubitable: 'Arcada fluida', dubitable: 'Anguloso con empalmes', observations: 'Disolución de automatismos' },
      { aspect: 'Gesto Gráfico (Idiotismo)', indubitable: 'Bucle ciego en segundo tercio', dubitable: 'Bucle abierto redondo', observations: 'Omisión del automatismo subconsciente del titular' },
    ]
  },
  graphokineticAnalysis: {
    questionedImages: [],
    undisputedImages: [],
    analysisText: 'El rastro del trayecto en la firma dubitada evidencia pérdida de la melodía cinética y paradas anómalas en los cambios de dirección.'
  },
  generalStructuralAnalysis: {
    questionedImages: [],
    undisputedImages: [],
    analysisText: 'Bajo luz rasante a 7°, el reverso del documento cuestionado presenta un sobre-relieve estático que delata la aplicación de una fuerza muscular desmedida propia de la imitación gráfica.'
  },
  documentoscopyData: {
    questionedImages: [],
    undisputedImages: [],
    dictamen: 'El formato de pagaré se encuentra impreso en offset con fondos de seguridad intactos. La tinta de bolígrafo empleada es pastosa tipo pasta oleosa de secado rápido.'
  }
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.GENERAL_DATA);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showToast, setShowToast] = useState<string | null>(null);

  // Shared state for the Forensic Report with Persistence logic
  const [reportData, setReportData] = useState<ReportData>(() => {
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

  const notify = (msg: string) => {
    setShowToast(msg);
    setTimeout(() => setShowToast(null), 3500);
  };

  const handleExportJSON = () => {
    const jsonStr = JSON.stringify(reportData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Respaldo_Peritaje_${reportData.fileNumber ? reportData.fileNumber.replace(/[\/\\:]/g, '_') : 'Expediente'}.json`;
    link.click();
    URL.revokeObjectURL(url);
    notify("Respaldo JSON descargado correctamente.");
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          setReportData(parsed);
          notify("Expediente importado exitosamente.");
        } catch (err) {
          notify("Error al leer el archivo JSON.");
        }
      };
      reader.readAsText(file);
    }
  };

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
        return <ChatView data={reportData} />;
      case AppView.VISION:
        return <VisionView />;
      case AppView.LIVE:
        return <LiveView />;
      case AppView.STRUCTURAL_ANALYSIS:
        return <StructuralAnalysisView data={reportData} onUpdate={setReportData} />;
      case AppView.MICROSCOPIC_ANALYSIS:
        return <MicroscopicAnalysisView data={reportData} onUpdate={setReportData} />;
      case AppView.GRAPHOKINETIC_ANALYSIS:
        return <GraphokineticAnalysisView data={reportData} onUpdate={setReportData} />;
      case AppView.GENERAL_STRUCTURAL_ANALYSIS:
        return <GeneralStructuralAnalysisView data={reportData} onUpdate={setReportData} />;
      case AppView.INTEGRAL_ANALYSIS:
        return <IntegralAnalysisView data={reportData} onUpdate={setReportData} />;
      case AppView.DOCUMENTOSCOPY:
        return <DocumentoscopyView data={reportData} onUpdate={setReportData} />;
      case AppView.BIBLIOGRAPHY:
        return <BibliographyView />;
      case AppView.QUESTIONS:
        return <QuestioningView data={reportData} onUpdate={setReportData} />;
      case AppView.EXPORT:
        return <ExportView data={reportData} />;
      case AppView.SETTINGS:
        return (
          <div className="p-4 md:p-8 flex flex-col h-full overflow-y-auto font-sans">
            <div className="max-w-4xl mx-auto w-full space-y-6">
              <header className="border-b border-slate-300 pb-3">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                  <span>⚙️</span> Configuración y Gestión de Casos
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Administre el almacenamiento local, exportación de respaldos y precarga de casos judiciales.
                </p>
              </header>

              {/* Precarga de Ejemplo */}
              <div className="glass-panel p-6 rounded-2xl space-y-3">
                <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                  <span>📂</span> Cargar Caso de Demostración Completo
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Carga un expediente real de Juicio Ejecutivo Mercantil con datos de Juzgado, Actor, Demandado, cotejo estructural de 9 aspectos, cuestionario e hipótesis probatoria para verificar de inmediato todo el flujo del dictamen.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setReportData(SAMPLE_REPORT_DATA);
                    notify("Caso de ejemplo cargado exitosamente en todos los capítulos.");
                  }}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md text-sm flex items-center gap-2"
                >
                  <span>Cargar Expediente Demo (Roberto Mendoza)</span>
                </button>
              </div>

              {/* Respaldos */}
              <div className="glass-panel p-6 rounded-2xl space-y-4">
                <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                  <span>💾</span> Respaldar y Transferir Expediente
                </h3>
                <p className="text-slate-600 text-sm">
                  Exporte todos los datos ingresados en un archivo JSON seguro para archivar en su computadora o transferir a otro equipo.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleExportJSON}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2.5 rounded-xl transition-colors text-sm shadow flex items-center gap-1.5"
                  >
                    <span>Exportar Respaldo (.json)</span>
                  </button>
                  <label className="cursor-pointer bg-white hover:bg-slate-50 text-slate-700 font-semibold px-4 py-2.5 rounded-xl transition-colors text-sm border border-slate-300 shadow flex items-center gap-1.5">
                    <span>Importar Respaldo (.json)</span>
                    <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
                  </label>
                </div>
              </div>

              {/* Borrado Seguro */}
              <div className="glass-panel p-6 rounded-2xl border-red-200 space-y-3">
                <h3 className="text-base font-bold text-red-800 flex items-center gap-2">
                  <span>⚠️</span> Restablecer Dictamen Pericial
                </h3>
                <p className="text-slate-600 text-sm">
                  Borra todos los campos, textos y fotografías del dictamen activo para comenzar un expediente nuevo desde cero.
                </p>
                {!showResetConfirm ? (
                  <button
                    type="button"
                    onClick={() => setShowResetConfirm(true)}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-xl transition-colors text-sm"
                  >
                    Iniciar nuevo dictamen en blanco
                  </button>
                ) : (
                  <div className="p-4 bg-red-50 border border-red-300 rounded-xl space-y-3 animate-fade-in">
                    <p className="text-sm font-semibold text-red-900">
                      ¿Confirma que desea borrar todos los datos ingresados? Esta acción es irreversible.
                    </p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setReportData(INITIAL_REPORT_DATA);
                          localStorage.removeItem('forensicReportData');
                          setShowResetConfirm(false);
                          notify("Todos los datos han sido reiniciados.");
                        }}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg text-xs"
                      >
                        Sí, borrar todo y reiniciar
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowResetConfirm(false)}
                        className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium px-4 py-2 rounded-lg text-xs"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      default:
        return <GeneralDataView data={reportData} onUpdate={setReportData} />;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden font-sans">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 right-5 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-white/20 text-sm font-semibold flex items-center gap-2 animate-bounce">
          <span>✓</span>
          <span>{showToast}</span>
        </div>
      )}

      {/* Mobile Header - Glassmorphism with Safe Area support */}
      <div 
        className="md:hidden fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-xl border-b border-white/20 z-40 flex items-center px-4 shadow-lg"
        style={{ 
          height: 'calc(4rem + env(safe-area-inset-top))', 
          paddingTop: 'env(safe-area-inset-top)' 
        }}
      >
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="text-slate-800 p-2 hover:bg-white/20 rounded-lg transition-colors"
          title="Abrir menú"
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
          setIsSidebarOpen(false);
        }} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <main 
        className="flex-1 h-full relative w-full overflow-hidden flex flex-col pt-16 md:pt-0"
      >
        {/* Top Word Copy Bar for the active page */}
        <div className="p-3 md:px-6 md:pt-4 md:pb-1 flex-shrink-0 z-20">
          <PageWordBar
            currentView={currentView}
            data={reportData}
            containerId="active-page-content"
            onNotify={notify}
          />
        </div>

        {/* View container */}
        <div id="active-page-content" className="flex-1 min-h-0 overflow-hidden relative">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
