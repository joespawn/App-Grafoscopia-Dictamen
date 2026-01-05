import React, { useState } from 'react';
import { ReportData } from '../types';
import VoiceInput from './VoiceInput';

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

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange('questionedDocPhoto', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
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

  const getNextPlaintiffIndex = (data.plaintiffQuestions?.length || 0) + 1;
  const getNextDefendantIndex = (data.defendantQuestions?.length || 0) + 1;

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Main Glass Panel */}
      <div className="max-w-6xl mx-auto w-full p-4 md:p-8 space-y-8 min-h-full">
        <div className="glass-panel p-8 rounded-3xl">
          <header className="border-b border-slate-400/30 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 uppercase drop-shadow-sm">
              0. DATOS GENERALES
            </h2>
            <p className="text-slate-600 mt-2 text-sm md:text-base font-medium">
              Complete los siguientes recuadros con la información del expediente. Puede escribir o <strong>dictar por voz</strong> usando el icono del micrófono.
            </p>
          </header>

          <div className="mt-8 space-y-8">
            {/* Sección 1: Datos Identificativos Básicos */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              
              <div className="glass-card p-4 rounded-xl">
                <VoiceInput
                  label="[Juzgado o Tribunal]"
                  value={data.court}
                  onValueChange={(val) => handleChange('court', val)}
                  placeholder="Ej. JUZGADO QUINCUAGÉSIMO DE LO CIVIL..."
                  className="glass-input rounded-lg"
                />
              </div>

              <div className="glass-card p-4 rounded-xl">
                <VoiceInput
                  label="[Número de Expediente]"
                  value={data.fileNumber}
                  onValueChange={(val) => handleChange('fileNumber', val)}
                  placeholder="Ej. 1234/2024"
                  className="glass-input rounded-lg"
                />
              </div>

              <div className="glass-card p-4 rounded-xl">
                <VoiceInput
                  label="[Tipo de Juicio]"
                  value={data.trialType}
                  onValueChange={(val) => handleChange('trialType', val)}
                  placeholder="Ej. ORDINARIO MERCANTIL"
                  className="glass-input rounded-lg"
                />
              </div>

              <div className="glass-card p-4 rounded-xl">
                <VoiceInput
                  type="date"
                  label="[Fecha de Toma de Muestra]"
                  value={data.sampleDate}
                  onValueChange={(val) => handleChange('sampleDate', val)}
                  className="glass-input rounded-lg"
                />
              </div>
            </section>

            {/* Sección 2: Partes */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="glass-card bg-blue-50/40 border-blue-200/50 p-4 rounded-xl">
                <VoiceInput
                  label="[Datos del Actor]"
                  value={data.plaintiff}
                  onValueChange={(val) => handleChange('plaintiff', val)}
                  placeholder="Nombre del Actor"
                  className="glass-input rounded-lg text-blue-900"
                />
              </div>

              <div className="glass-card bg-emerald-50/40 border-emerald-200/50 p-4 rounded-xl">
                <VoiceInput
                  label="[Datos del Demandado]"
                  value={data.defendantName}
                  onValueChange={(val) => handleChange('defendantName', val)}
                  placeholder="Nombre del Demandado"
                  className="glass-input rounded-lg text-emerald-900"
                />
              </div>
            </section>

            {/* Sección 3: Perito y Materia */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="glass-card p-4 rounded-xl">
                <VoiceInput
                  label="[Nombre del Perito]"
                  value={data.expertName}
                  onValueChange={(val) => handleChange('expertName', val)}
                  placeholder="Nombre del Perito a cargo"
                  className="glass-input rounded-lg"
                />
              </div>

              <div className="glass-card p-4 rounded-xl">
                <VoiceInput
                  label="[Materias del Dictamen]"
                  value={data.expertiseSubjects}
                  onValueChange={(val) => handleChange('expertiseSubjects', val)}
                  placeholder="Ej. Grafoscopía, Documentoscopía y Dactiloscopía"
                  className="glass-input rounded-lg"
                />
              </div>
            </section>

            {/* Sección 4: El Documento Cuestionado */}
            <section className="space-y-6">
              <div className="glass-card bg-yellow-50/30 border-yellow-200/50 p-4 md:p-6 rounded-xl">
                <h3 className="font-bold text-yellow-900 mb-4 uppercase tracking-wide">Detalles del Documento Cuestionado</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold text-yellow-800 uppercase mb-1">
                        Sistema de Impresión
                      </label>
                      <select
                        value={data.docDescription}
                        onChange={(e) => handleChange('docDescription', e.target.value)}
                        className="w-full p-2 rounded-lg glass-input text-yellow-900 outline-none focus:ring-2 focus:ring-yellow-500/50"
                      >
                        <option value="Impresión Offset">Impresión Offset</option>
                        <option value="Impresión Láser">Impresión Láser</option>
                        <option value="Inyección de Tinta">Inyección de Tinta</option>
                      </select>
                    </div>
                    <div>
                      <VoiceInput
                        type="number"
                        label="Cantidad (Num)"
                        value={data.questionedDocCount?.toString() || '1'}
                        onValueChange={(val) => handleChange('questionedDocCount', parseInt(val) || 1)}
                        className="glass-input rounded-lg text-yellow-900"
                      />
                    </div>
                    <div>
                      <VoiceInput
                        label="Fecha del Documento"
                        value={data.questionedDocDate || ''}
                        onValueChange={(val) => handleChange('questionedDocDate', val)}
                        placeholder="Ej. 15 de Octubre de 2023"
                        className="glass-input rounded-lg text-yellow-900"
                      />
                    </div>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl border-2 border-dashed border-slate-300/50">
                <label className="block text-xs font-bold text-slate-500 uppercase mb-4">
                  [Fotografía Documento Cuestionado]
                </label>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0 w-32 h-32 bg-white/40 border border-white/60 flex items-center justify-center rounded-lg overflow-hidden shadow-inner backdrop-blur-sm">
                    {data.questionedDocPhoto ? (
                      <img src={data.questionedDocPhoto} alt="Cuestionado" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-xs text-slate-500 text-center px-2">Sin imagen</span>
                    )}
                  </div>
                  <div className="flex-1 w-full text-center md:text-left">
                    <label className="cursor-pointer inline-flex items-center px-6 py-2 bg-white/50 border border-white/60 rounded-full font-semibold text-slate-700 text-sm hover:bg-white/80 transition-all shadow-sm backdrop-blur-md">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                      </svg>
                      Cargar Fotografía
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload}
                        className="hidden" 
                      />
                    </label>
                    <p className="text-xs text-slate-500 mt-2 font-medium">
                      Esta imagen servirá de referencia visual principal del documento dudoso.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Sección 4.1: Documento Indubitable (NUEVO - AZUL) */}
            <section className="space-y-6 mt-4">
              <div className="glass-card bg-blue-50/30 border-blue-200/50 p-4 md:p-6 rounded-xl">
                <h3 className="font-bold text-blue-900 mb-4 uppercase tracking-wide">Documento Indubitable</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <VoiceInput
                        type="number"
                        label="[Número de Páginas]"
                        value={data.undisputedDocPages?.toString() || ''}
                        onValueChange={(val) => handleChange('undisputedDocPages', parseInt(val) || 0)}
                        placeholder="Ej. 5"
                        className="glass-input rounded-lg text-blue-900"
                      />
                    </div>
                    <div>
                      <VoiceInput
                        label="[Fecha de Firmas]"
                        value={data.undisputedDocDate || ''}
                        onValueChange={(val) => handleChange('undisputedDocDate', val)}
                        placeholder="Fecha de plasmar firmas"
                        className="glass-input rounded-lg text-blue-900"
                      />
                    </div>
                    <div>
                      <VoiceInput
                        label="[Domicilio del Juzgado]"
                        value={data.courtAddress || ''}
                        onValueChange={(val) => handleChange('courtAddress', val)}
                        placeholder="Calle, Número, Colonia, Ciudad..."
                        className="glass-input rounded-lg text-blue-900"
                      />
                    </div>
                    <div>
                      <VoiceInput
                        label="[Foja donde se localiza]"
                        value={data.undisputedDocFolio || ''}
                        onValueChange={(val) => handleChange('undisputedDocFolio', val)}
                        placeholder="Ej. 45 vuelta"
                        className="glass-input rounded-lg text-blue-900"
                      />
                    </div>
                </div>
              </div>
            </section>

            <hr className="border-slate-400/30" />

            {/* Sección 5: Interrogatorios */}
            <section className="space-y-6">
              <div className="glass-card p-4 md:p-6 rounded-xl border-l-4 border-l-blue-500 relative overflow-hidden">
                <h3 className="block text-lg font-bold text-blue-900 uppercase mb-4">
                  Interrogatorio Parte Actora
                </h3>
                
                <ul className="space-y-2 mb-4">
                  {data.plaintiffQuestions?.map((q, idx) => (
                    <li key={idx} className="flex justify-between items-start text-sm bg-white/40 p-3 rounded-lg border border-white/50 shadow-sm backdrop-blur-sm">
                      <span className="font-bold text-blue-900 mr-2">{idx + 1}.</span>
                      <span className="flex-1 text-slate-700">{q}</span>
                      <button onClick={() => removeQuestion('plaintiff', idx)} className="text-red-400 hover:text-red-600 ml-2 font-bold px-2 hover:bg-white/50 rounded transition-all">×</button>
                    </li>
                  ))}
                </ul>

                {/* Input with Voice and Counter */}
                <div className="flex gap-2">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-blue-100/80 rounded-full text-blue-800 font-bold backdrop-blur-md shadow-sm">
                    {getNextPlaintiffIndex}
                  </div>
                  <div className="flex-1">
                    <VoiceInput 
                        value={newPlaintiffQ}
                        onValueChange={setNewPlaintiffQ}
                        onKeyDown={(e) => e.key === 'Enter' && addQuestion('plaintiff')}
                        placeholder={`Pregunta número ${getNextPlaintiffIndex}...`}
                        className="glass-input rounded-lg w-full"
                    />
                  </div>
                  <button 
                    onClick={() => addQuestion('plaintiff')} 
                    className="bg-blue-600/90 text-white px-4 rounded-lg hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 text-sm font-medium transition-all backdrop-blur-sm"
                  >
                    Agregar
                  </button>
                </div>
              </div>

              <div className="glass-card p-4 md:p-6 rounded-xl border-l-4 border-l-emerald-500 relative overflow-hidden">
                <h3 className="block text-lg font-bold text-emerald-900 uppercase mb-4">
                  Interrogatorio Parte Demandada
                </h3>
                
                <ul className="space-y-2 mb-4">
                  {data.defendantQuestions?.map((q, idx) => (
                    <li key={idx} className="flex justify-between items-start text-sm bg-white/40 p-3 rounded-lg border border-white/50 shadow-sm backdrop-blur-sm">
                      <span className="font-bold text-emerald-900 mr-2">{idx + 1}.</span>
                      <span className="flex-1 text-slate-700">{q}</span>
                      <button onClick={() => removeQuestion('defendant', idx)} className="text-red-400 hover:text-red-600 ml-2 font-bold px-2 hover:bg-white/50 rounded transition-all">×</button>
                    </li>
                  ))}
                </ul>

                {/* Input with Voice and Counter */}
                <div className="flex gap-2">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-emerald-100/80 rounded-full text-emerald-800 font-bold backdrop-blur-md shadow-sm">
                    {getNextDefendantIndex}
                  </div>
                  <div className="flex-1">
                    <VoiceInput 
                        value={newDefendantQ}
                        onValueChange={setNewDefendantQ}
                        onKeyDown={(e) => e.key === 'Enter' && addQuestion('defendant')}
                        placeholder={`Pregunta número ${getNextDefendantIndex}...`}
                        className="glass-input rounded-lg w-full"
                    />
                  </div>
                  <button 
                    onClick={() => addQuestion('defendant')} 
                    className="bg-emerald-600/90 text-white px-4 rounded-lg hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30 text-sm font-medium transition-all backdrop-blur-sm"
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </section>

            {/* DETERMINACIÓN PERICIAL (Selector de Hipótesis Actualizado) */}
            <div className="glass-card bg-purple-50/40 border-purple-300/50 p-4 md:p-6 rounded-xl mt-4">
                <header className="mb-4">
                  <h3 className="text-xl font-bold text-purple-900 uppercase tracking-wide">
                    DETERMINACIÓN PERICIAL (Control Global)
                  </h3>
                  <p className="text-sm text-purple-800 mt-1 font-medium">
                    Seleccione la conclusión final del estudio. Esta opción determinará el contenido automático de los capítulos "Análisis Integral", "Documentoscopía" y "Conclusiones".
                  </p>
                </header>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Opción A: Corresponde */}
                  <label className={`
                    relative flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all duration-300
                    ${data.hypothesis === 'A' 
                      ? 'bg-green-100/70 border-green-500 shadow-lg shadow-green-200/50 transform scale-105 backdrop-blur-md' 
                      : 'bg-white/40 border-white/60 hover:border-green-300 hover:bg-green-50/50 backdrop-blur-sm'}
                  `}>
                    <div className="flex items-center mb-2">
                      <input 
                        type="radio" 
                        name="hypothesis" 
                        value="A" 
                        checked={data.hypothesis === 'A'} 
                        onChange={() => handleChange('hypothesis', 'A')} 
                        className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300"
                      />
                      <span className="ml-2 font-bold text-green-900">SÍ CORRESPONDE</span>
                    </div>
                    <p className="text-xs text-slate-700 font-medium">
                      La firma indubitable <strong>CORRESPONDE</strong> al demandado (Firma Auténtica).
                    </p>
                  </label>

                  {/* Opción B: No Corresponde */}
                  <label className={`
                    relative flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all duration-300
                    ${data.hypothesis === 'B' 
                      ? 'bg-red-100/70 border-red-500 shadow-lg shadow-red-200/50 transform scale-105 backdrop-blur-md' 
                      : 'bg-white/40 border-white/60 hover:border-red-300 hover:bg-red-50/50 backdrop-blur-sm'}
                  `}>
                    <div className="flex items-center mb-2">
                      <input 
                        type="radio" 
                        name="hypothesis" 
                        value="B" 
                        checked={data.hypothesis === 'B'} 
                        onChange={() => handleChange('hypothesis', 'B')} 
                        className="h-5 w-5 text-red-600 focus:ring-red-500 border-gray-300"
                      />
                      <span className="ml-2 font-bold text-red-900">NO CORRESPONDE</span>
                    </div>
                    <p className="text-xs text-slate-700 font-medium">
                      La firma indubitable <strong>NO CORRESPONDE</strong> al demandado (Firma Falsa).
                    </p>
                  </label>

                  {/* Opción C: Imposibilidad */}
                  <label className={`
                    relative flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all duration-300
                    ${data.hypothesis === 'C' 
                      ? 'bg-amber-100/70 border-amber-500 shadow-lg shadow-amber-200/50 transform scale-105 backdrop-blur-md' 
                      : 'bg-white/40 border-white/60 hover:border-amber-300 hover:bg-amber-50/50 backdrop-blur-sm'}
                  `}>
                    <div className="flex items-center mb-2">
                      <input 
                        type="radio" 
                        name="hypothesis" 
                        value="C" 
                        checked={data.hypothesis === 'C'} 
                        onChange={() => handleChange('hypothesis', 'C')} 
                        className="h-5 w-5 text-amber-600 focus:ring-amber-500 border-gray-300"
                      />
                      <span className="ml-2 font-bold text-amber-900">IMPOSIBILIDAD TÉCNICA</span>
                    </div>
                    <p className="text-xs text-slate-700 font-medium">
                      No es posible determinar la autoría por deficiencias en el material (Imposibilidad Material).
                    </p>
                  </label>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralDataView;