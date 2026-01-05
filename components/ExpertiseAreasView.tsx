import React from 'react';
import { ReportData } from '../types';

interface ExpertiseAreasViewProps {
  data: ReportData;
  onUpdate: (data: ReportData) => void;
}

const AVAILABLE_SUBJECTS = [
  'Grafoscopía',
  'Documentoscopía',
  'Grafometría',
  'Caligrafía',
  'Grafología',
  'Dactiloscopia',
  'Fotografía Forense'
];

const ExpertiseAreasView: React.FC<ExpertiseAreasViewProps> = ({ data, onUpdate }) => {
  const selectedSubjects = data.selectedSubjects || [];

  const toggleSubject = (subject: string) => {
    let newSelection = [...selectedSubjects];
    if (newSelection.includes(subject)) {
      newSelection = newSelection.filter(s => s !== subject);
    } else {
      newSelection.push(subject);
    }
    onUpdate({ ...data, selectedSubjects: newSelection });
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full p-8 space-y-8 bg-white shadow-sm min-h-full flex flex-col">
        
        {/* Configuration Header */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 print:hidden">
          <h3 className="text-blue-900 font-bold mb-2 uppercase text-sm tracking-wider">
            Configuración de Materias
          </h3>
          <p className="text-blue-800 text-sm mb-4">
            Seleccione las materias aplicables a este dictamen. Solo las seleccionadas aparecerán en el resumen final.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {AVAILABLE_SUBJECTS.map((subject) => (
              <label 
                key={subject} 
                className={`flex items-center space-x-3 p-3 rounded-md border cursor-pointer transition-all ${
                  selectedSubjects.includes(subject) 
                    ? 'bg-white border-blue-500 shadow-sm ring-1 ring-blue-500' 
                    : 'bg-slate-50 border-slate-300 hover:bg-white'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSubjects.includes(subject)}
                  onChange={() => toggleSubject(subject)}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className={`font-medium ${selectedSubjects.includes(subject) ? 'text-blue-900' : 'text-slate-600'}`}>
                  {subject}
                </span>
              </label>
            ))}
          </div>
        </div>

        <hr className="border-slate-300 mb-8" />

        {/* Report View (The Resume) */}
        <div>
          <header className="border-b-2 border-slate-800 pb-4 mb-8">
            <h2 className="text-3xl font-serif font-bold text-slate-900 uppercase">
              2. MATERIAS A DICTAMINAR
            </h2>
          </header>

          <section className="prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed font-serif text-lg">
            <p className="mb-6">
              En atención a lo solicitado por la autoridad competente y con el fin de dar cumplimiento al cargo conferido, el presente estudio técnico-científico se desarrollará conforme a los principios y metodología especializada en las siguientes materias periciales:
            </p>

            {selectedSubjects.length > 0 ? (
              <ul className="list-disc pl-10 space-y-2">
                {selectedSubjects.map((subject) => (
                  <li key={subject} className="font-bold text-slate-900">
                    {subject}.
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-4 border-l-4 border-red-500 bg-red-50 text-red-700 italic text-base">
                No se ha seleccionado ninguna materia. Por favor seleccione al menos una opción en el panel de configuración superior.
              </div>
            )}

            <p className="mt-8">
              Lo anterior con el propósito de emitir un dictamen integral, objetivo y veraz que auxilie en el esclarecimiento de los hechos controvertidos.
            </p>
          </section>
        </div>
        
      </div>
    </div>
  );
};

export default ExpertiseAreasView;