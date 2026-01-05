import React, { useState } from 'react';
import { ReportData } from '../types';

interface QuestioningViewProps {
  data: ReportData;
}

const QuestioningView: React.FC<QuestioningViewProps> = ({ data }) => {
  // Local state to hold answers. We use a key based on type + index.
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswerChange = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const plaintiffQs = data.plaintiffQuestions || [];
  const defendantQs = data.defendantQuestions || [];

  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full p-8 space-y-8 bg-white shadow-sm min-h-full">
        
        {/* Header Section */}
        <header className="border-b-2 border-slate-800 pb-4">
          <h2 className="text-3xl font-serif font-bold text-slate-900 uppercase">
            19. CUESTIONAMIENTOS PRESENTADOS POR LAS PARTES
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Respuestas técnicas a los interrogatorios formulados en el Capítulo 4.
          </p>
        </header>

        {/* Cuestionario Parte Actora */}
        <section className="space-y-6">
          <h3 className="text-xl font-bold text-blue-800 uppercase border-b border-blue-200 pb-2">
            A) CUESTIONARIO DE LA PARTE ACTORA
          </h3>
          
          {plaintiffQs.length === 0 ? (
            <div className="p-4 bg-blue-50 text-blue-700 rounded-lg italic text-sm">
              No se han registrado preguntas de la Parte Actora. Vaya a "0. Datos Generales" para agregarlas.
            </div>
          ) : (
            <div className="space-y-8">
              {plaintiffQs.map((question, idx) => (
                <div key={`plaintiff-${idx}`} className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <p className="font-bold text-slate-900 mb-4 text-lg">
                    {idx + 1}. {question}
                  </p>
                  
                  <div className="relative">
                    <label className="absolute -top-3 left-3 bg-white px-2 text-xs font-bold text-blue-600 uppercase tracking-wide">
                      Respuesta al planteamiento
                    </label>
                    <textarea
                      value={answers[`p-${idx}`] || ''}
                      onChange={(e) => handleAnswerChange(`p-${idx}`, e.target.value)}
                      className="w-full h-32 p-4 rounded-lg border border-blue-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-serif text-slate-800 shadow-inner"
                      placeholder="Escriba la respuesta técnica a este cuestionamiento..."
                    ></textarea>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <div className="border-t border-slate-300 my-8"></div>

        {/* Cuestionario Parte Demandada */}
        <section className="space-y-6">
          <h3 className="text-xl font-bold text-emerald-800 uppercase border-b border-emerald-200 pb-2">
            B) CUESTIONARIO DE LA PARTE DEMANDADA
          </h3>
          
          {defendantQs.length === 0 ? (
            <div className="p-4 bg-emerald-50 text-emerald-700 rounded-lg italic text-sm">
              No se han registrado preguntas de la Parte Demandada. Vaya a "0. Datos Generales" para agregarlas.
            </div>
          ) : (
            <div className="space-y-8">
              {defendantQs.map((question, idx) => (
                <div key={`defendant-${idx}`} className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <p className="font-bold text-slate-900 mb-4 text-lg">
                    {idx + 1}. {question}
                  </p>
                  
                  <div className="relative">
                    <label className="absolute -top-3 left-3 bg-white px-2 text-xs font-bold text-emerald-600 uppercase tracking-wide">
                      Respuesta al planteamiento
                    </label>
                    <textarea
                      value={answers[`d-${idx}`] || ''}
                      onChange={(e) => handleAnswerChange(`d-${idx}`, e.target.value)}
                      className="w-full h-32 p-4 rounded-lg border border-emerald-200 bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none font-serif text-slate-800 shadow-inner"
                      placeholder="Escriba la respuesta técnica a este cuestionamiento..."
                    ></textarea>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
};

export default QuestioningView;