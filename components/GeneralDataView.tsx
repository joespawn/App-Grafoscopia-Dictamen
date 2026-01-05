import React, { useState } from 'react';
import { ReportData } from '../types';

interface GeneralDataViewProps {
  data: ReportData;
  onUpdate: (data: ReportData) => void;
}

const GeneralDataView: React.FC<GeneralDataViewProps> = ({ data, onUpdate }) => {
  const [newPlaintiffQ, setNewPlaintiffQ] = useState('');
  const [newDefendantQ, setNewDefendantQ] = useState('');

  const handleChange = (field: keyof ReportData, value: any) => {
    onUpdate({ ...data, [field]: value });
  };

  const addQuestion = (type: 'plaintiff' | 'defendant') => {
    if (type === 'plaintiff' && newPlaintiffQ.trim()) {
      const updated = [...(data.plaintiffQuestions || []), newPlaintiffQ.trim()];
      handleChange('plaintiffQuestions', updated);
      setNewPlaintiffQ('');
    } else if (type === 'defendant' && newDefendantQ.trim()) {
      const updated = [...(data.defendantQuestions || []), newDefendantQ.trim()];
      handleChange('defendantQuestions', updated);
      setNewDefendantQ('');
    }
  };

  const removeQuestion = (type: 'plaintiff' | 'defendant', index: number) => {
    if (type === 'plaintiff') {
      const updated = data.plaintiffQuestions.filter((_, i) => i !== index);
      handleChange('plaintiffQuestions', updated);
    } else {
      const updated = data.defendantQuestions.filter((_, i) => i !== index);
      handleChange('defendantQuestions', updated);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto w-full p-8 space-y-8 bg-white shadow-sm min-h-full">
        <header className="border-b-2 border-slate-800 pb-4">
          <h2 className="text-3xl font-serif font-bold text-slate-900 uppercase">
            0. DATOS GENERALES
          </h2>
          <p className="text-slate-500 mt-2">
            La información ingresada aquí configurará automáticamente las conclusiones y el capitulo de cuestionamientos.
          </p>
        </header>

        <section className="space-y-6">
          {/* Nombre del Demandado */}
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <label className="block text-sm font-bold text-slate-700 uppercase mb-2">
              Nombre de la persona a quien se atribuye (Demandado)
            </label>
            <input
              type="text"
              value={data.defendantName}
              onChange={(e) => handleChange('defendantName', e.target.value)}
              placeholder="Ej. Juan Pérez García"
              className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Hipótesis Pericial Preliminar */}
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <label className="block text-sm font-bold text-slate-700 uppercase mb-4">
              Hipótesis Pericial Preliminar (Resultado del Dictamen)
            </label>
            
            <div className="space-y-4">
              <label className={`flex items-start p-4 rounded-lg border cursor-pointer transition-all ${data.hypothesis === 'A' ? 'bg-blue-50 border-blue-500 ring-1 ring-blue-500' : 'bg-white border-slate-300 hover:bg-slate-100'}`}>
                <input
                  type="radio"
                  name="hypothesis"
                  value="A"
                  checked={data.hypothesis === 'A'}
                  onChange={() => handleChange('hypothesis', 'A')}
                  className="mt-1 h-4 w-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                />
                <div className="ml-3">
                  <span className="block text-sm font-medium text-slate-900">Opción A: Correspondencia de Autoría (Firma Auténtica)</span>
                  <span className="block text-sm text-slate-500">Se concluye que la firma SÍ procede del puño y letra del demandado.</span>
                </div>
              </label>

              <label className={`flex items-start p-4 rounded-lg border cursor-pointer transition-all ${data.hypothesis === 'B' ? 'bg-blue-50 border-blue-500 ring-1 ring-blue-500' : 'bg-white border-slate-300 hover:bg-slate-100'}`}>
                <input
                  type="radio"
                  name="hypothesis"
                  value="B"
                  checked={data.hypothesis === 'B'}
                  onChange={() => handleChange('hypothesis', 'B')}
                  className="mt-1 h-4 w-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                />
                <div className="ml-3">
                  <span className="block text-sm font-medium text-slate-900">Opción B: Discrepancia de Autoría (Firma Falsa)</span>
                  <span className="block text-sm text-slate-500">Se concluye que la firma NO procede del puño y letra del demandado.</span>
                </div>
              </label>

              <label className={`flex items-start p-4 rounded-lg border cursor-pointer transition-all ${data.hypothesis === 'C' ? 'bg-blue-50 border-blue-500 ring-1 ring-blue-500' : 'bg-white border-slate-300 hover:bg-slate-100'}`}>
                <input
                  type="radio"
                  name="hypothesis"
                  value="C"
                  checked={data.hypothesis === 'C'}
                  onChange={() => handleChange('hypothesis', 'C')}
                  className="mt-1 h-4 w-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                />
                <div className="ml-3">
                  <span className="block text-sm font-medium text-slate-900">Opción C: Imposibilidad Técnica</span>
                  <span className="block text-sm text-slate-500">No es posible determinar la autoría por limitaciones del material.</span>
                </div>
              </label>
            </div>
          </div>

          <hr className="border-slate-300" />

          {/* CAPÍTULO 4 DATA INPUT */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-800 uppercase">
              Datos del Capítulo 4: Interrogatorio
            </h3>
            <p className="text-sm text-slate-500">
              Ingrese aquí las preguntas formuladas por las partes. Estas aparecerán en el <strong>Capítulo 19. Cuestionamientos</strong> listas para ser respondidas.
            </p>

            {/* Parte Actora */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <label className="block text-sm font-bold text-blue-800 uppercase mb-2">
                Interrogatorio Parte Actora
              </label>
              <div className="flex gap-2 mb-4">
                <input 
                  type="text" 
                  value={newPlaintiffQ}
                  onChange={(e) => setNewPlaintiffQ(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addQuestion('plaintiff')}
                  placeholder="Escriba la pregunta y presione Enter..."
                  className="flex-1 p-2 border border-blue-300 rounded outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  onClick={() => addQuestion('plaintiff')}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Agregar
                </button>
              </div>
              <ul className="space-y-2">
                {data.plaintiffQuestions?.map((q, idx) => (
                  <li key={idx} className="flex justify-between items-center bg-white p-2 rounded shadow-sm">
                    <span className="text-sm text-slate-700"><span className="font-bold mr-2">{idx + 1}.</span>{q}</span>
                    <button onClick={() => removeQuestion('plaintiff', idx)} className="text-red-500 hover:text-red-700 ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </li>
                ))}
                {(!data.plaintiffQuestions || data.plaintiffQuestions.length === 0) && (
                   <li className="text-xs text-blue-400 italic">No hay preguntas registradas.</li>
                )}
              </ul>
            </div>

            {/* Parte Demandada */}
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
              <label className="block text-sm font-bold text-emerald-800 uppercase mb-2">
                Interrogatorio Parte Demandada
              </label>
              <div className="flex gap-2 mb-4">
                <input 
                  type="text" 
                  value={newDefendantQ}
                  onChange={(e) => setNewDefendantQ(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addQuestion('defendant')}
                  placeholder="Escriba la pregunta y presione Enter..."
                  className="flex-1 p-2 border border-emerald-300 rounded outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button 
                  onClick={() => addQuestion('defendant')}
                  className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
                >
                  Agregar
                </button>
              </div>
              <ul className="space-y-2">
                {data.defendantQuestions?.map((q, idx) => (
                  <li key={idx} className="flex justify-between items-center bg-white p-2 rounded shadow-sm">
                    <span className="text-sm text-slate-700"><span className="font-bold mr-2">{idx + 1}.</span>{q}</span>
                    <button onClick={() => removeQuestion('defendant', idx)} className="text-red-500 hover:text-red-700 ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </li>
                ))}
                {(!data.defendantQuestions || data.defendantQuestions.length === 0) && (
                   <li className="text-xs text-emerald-400 italic">No hay preguntas registradas.</li>
                )}
              </ul>
            </div>

          </div>

        </section>
      </div>
    </div>
  );
};

export default GeneralDataView;