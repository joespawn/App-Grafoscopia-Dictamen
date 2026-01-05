import React, { useState } from 'react';
import { ReportData } from '../types';

interface QuestioningViewProps {
  data: ReportData;
}

const QuestioningView: React.FC<QuestioningViewProps> = ({ data }) => {
  // Estado local para guardar las respuestas de cada pregunta.
  // Las claves serán 'p-0', 'p-1' (plaintiff/actora) y 'd-0', 'd-1' (defendant/demandada)
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswerChange = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const plaintiffQs = data.plaintiffQuestions || [];
  const defendantQs = data.defendantQuestions || [];

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="max-w-6xl mx-auto w-full p-8 space-y-8 min-h-full">
        
        {/* Header Section */}
        <div className="glass-panel p-8 rounded-3xl">
          <header className="border-b border-slate-400/30 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 uppercase drop-shadow-sm">
              19. CUESTIONAMIENTOS PRESENTADOS POR LAS PARTES
            </h2>
          </header>

          <div className="mt-8 space-y-12">
            
            {/* Sección A: Parte Actora */}
            <section>
              <h3 className="text-xl font-bold text-blue-900 uppercase mb-6 border-b-2 border-blue-300/50 pb-2 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">A</span>
                INTERROGATORIO DE LA PARTE ACTORA
              </h3>
              
              {plaintiffQs.length === 0 ? (
                <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl text-center text-blue-800 italic">
                  No se han registrado preguntas de la Parte Actora. 
                  <br/><span className="text-xs">Por favor regrese a "0. Datos Generales" para ingresarlas.</span>
                </div>
              ) : (
                <div className="space-y-8">
                  {plaintiffQs.map((question, idx) => (
                    <div key={`p-${idx}`} className="glass-card bg-white/60 p-6 rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
                      {/* La Pregunta */}
                      <div className="mb-4">
                        <span className="font-bold text-blue-800 text-lg mr-2">{idx + 1}.-</span>
                        <span className="font-serif text-lg text-slate-900 font-medium">{question}</span>
                      </div>
                      
                      {/* El Recuadro de Respuesta */}
                      <div className="relative mt-2">
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-wider ml-1">
                          Respuesta Técnica:
                        </label>
                        <textarea
                          value={answers[`p-${idx}`] || ''}
                          onChange={(e) => handleAnswerChange(`p-${idx}`, e.target.value)}
                          className="w-full h-32 p-4 rounded-xl glass-input border border-blue-200/50 focus:ring-2 focus:ring-blue-500/50 outline-none font-serif text-slate-800 text-lg shadow-inner bg-blue-50/20"
                          placeholder="Escriba aquí la respuesta técnica correspondiente a este cuestionamiento..."
                        ></textarea>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Separador */}
            <hr className="border-slate-300/50" />

            {/* Sección B: Parte Demandada */}
            <section>
              <h3 className="text-xl font-bold text-emerald-900 uppercase mb-6 border-b-2 border-emerald-300/50 pb-2 flex items-center gap-2">
                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-sm">B</span>
                INTERROGATORIO DE LA PARTE DEMANDADA
              </h3>
              
              {defendantQs.length === 0 ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-emerald-800 italic">
                  No se han registrado preguntas de la Parte Demandada.
                  <br/><span className="text-xs">Por favor regrese a "0. Datos Generales" para ingresarlas.</span>
                </div>
              ) : (
                <div className="space-y-8">
                  {defendantQs.map((question, idx) => (
                    <div key={`d-${idx}`} className="glass-card bg-white/60 p-6 rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
                      {/* La Pregunta */}
                      <div className="mb-4">
                        <span className="font-bold text-emerald-800 text-lg mr-2">{idx + 1}.-</span>
                        <span className="font-serif text-lg text-slate-900 font-medium">{question}</span>
                      </div>
                      
                      {/* El Recuadro de Respuesta */}
                      <div className="relative mt-2">
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-wider ml-1">
                          Respuesta Técnica:
                        </label>
                        <textarea
                          value={answers[`d-${idx}`] || ''}
                          onChange={(e) => handleAnswerChange(`d-${idx}`, e.target.value)}
                          className="w-full h-32 p-4 rounded-xl glass-input border border-emerald-200/50 focus:ring-2 focus:ring-emerald-500/50 outline-none font-serif text-slate-800 text-lg shadow-inner bg-emerald-50/20"
                          placeholder="Escriba aquí la respuesta técnica correspondiente a este cuestionamiento..."
                        ></textarea>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

          </div>
        </div>

      </div>
    </div>
  );
};

export default QuestioningView;