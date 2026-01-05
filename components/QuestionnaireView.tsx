import React from 'react';
import { ReportData } from '../types';

interface QuestionnaireViewProps {
  data: ReportData;
}

const QuestionnaireView: React.FC<QuestionnaireViewProps> = ({ data }) => {
  const plaintiffQs = data.plaintiffQuestions || [];
  const defendantQs = data.defendantQuestions || [];

  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full p-8 space-y-8 bg-white shadow-sm min-h-full">
        
        {/* Header Section */}
        <header className="border-b-2 border-slate-800 pb-4">
          <h2 className="text-3xl font-serif font-bold text-slate-900 uppercase">
            9. INTERROGATORIO PRESENTADO POR LAS PARTES
          </h2>
        </header>

        {/* Intro Text */}
        <section className="prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed font-serif text-lg">
          <p>
            En cumplimiento a lo ordenado por Su Señoría, y con el objetivo de dar contestación puntual a los extremos planteados en la prueba pericial ofrecida, se transcribe a continuación el interrogatorio al tenor del cual se desahoga el presente dictamen:
          </p>
        </section>

        {/* 1. Parte Actora */}
        <section className="bg-white border border-slate-200 rounded-lg overflow-hidden">
          <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 uppercase">
              1. Interrogatorio presentado por la parte actora
            </h3>
          </div>
          <div className="p-6">
            {plaintiffQs.length > 0 ? (
              <ol className="list-decimal pl-6 space-y-4 text-slate-800 font-serif text-lg">
                {plaintiffQs.map((q, idx) => (
                  <li key={idx} className="pl-2">
                    {q}
                  </li>
                ))}
              </ol>
            ) : (
              <p className="text-slate-400 italic">No se han registrado preguntas de la parte actora.</p>
            )}
          </div>
        </section>

        {/* 2. Parte Demandada */}
        <section className="bg-white border border-slate-200 rounded-lg overflow-hidden">
          <div className="bg-emerald-50 px-6 py-4 border-b border-emerald-100">
            <h3 className="text-xl font-bold text-emerald-900 uppercase">
              2. Interrogatorio presentado por la parte demandada
            </h3>
          </div>
          <div className="p-6">
            {defendantQs.length > 0 ? (
              <ol className="list-decimal pl-6 space-y-4 text-slate-800 font-serif text-lg">
                {defendantQs.map((q, idx) => (
                  <li key={idx} className="pl-2">
                    {q}
                  </li>
                ))}
              </ol>
            ) : (
              <p className="text-slate-400 italic">No se han registrado preguntas de la parte demandada.</p>
            )}
          </div>
        </section>

        <section className="mt-8 p-4 bg-slate-50 border-l-4 border-slate-400 text-slate-600 text-sm italic">
          <p>
            Nota: Las respuestas técnicas a estos cuestionamientos se encuentran desarrolladas detalladamente en el apartado de Conclusiones y/o Respuestas a los Cuestionamientos al final de este documento.
          </p>
        </section>

      </div>
    </div>
  );
};

export default QuestionnaireView;