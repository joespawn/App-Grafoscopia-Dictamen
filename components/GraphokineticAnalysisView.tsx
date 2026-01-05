import React, { useState } from 'react';
import { ReportData } from '../types';

interface GraphokineticAnalysisViewProps {
  data: ReportData;
}

const GraphokineticAnalysisView: React.FC<GraphokineticAnalysisViewProps> = ({ data }) => {
  const [questionedImages, setQuestionedImages] = useState<string[]>([]);
  const [undisputedImages, setUndisputedImages] = useState<string[]>([]);
  const [analysisText, setAnalysisText] = useState('');

  const defendantName = data.defendantName || "[DEMANDADO]";

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    setImages: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImages((prev) => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (
    index: number,
    setImages: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const getConclusionContent = () => {
    switch (data.hypothesis) {
      case 'A':
        return (
          <div className="mt-8 glass-card bg-green-50/50 p-6 rounded-2xl border-green-200/50">
            <h4 className="font-bold text-green-900 uppercase mb-2 border-b border-green-300/50 pb-1">
              CONCLUSIÓN
            </h4>
            <p className="font-bold text-green-800 text-sm mb-2">Opción 1: Correspondencia de Autoría (Firma Auténtica)</p>
            <p className="text-justify text-green-900 leading-relaxed font-medium">
              Como resultado del Análisis Grafocinético realizado, se determinó que la génesis gráfica y el dinamismo escritural (velocidad, presión y tensión de línea) de la firma cuestionada guardan una correspondencia cualitativa con los hábitos identificados en el material indubitable. Al verificarse que los automatismos y gestos-tipo analizados se sitúan plenamente dentro del Patrón de Variaciones Posibles (PVP) del titular, se concluye que el grafismo dubitado <strong>SÍ PROCEDE DEL PUÑO Y LETRA</strong> de la persona a quien se le atribuye <strong>{defendantName}</strong>, tratándose de una ejecución espontánea y habitual.
            </p>
          </div>
        );
      case 'B':
        return (
          <div className="mt-8 glass-card bg-red-50/50 p-6 rounded-2xl border-red-200/50">
             <h4 className="font-bold text-red-900 uppercase mb-2 border-b border-red-300/50 pb-1">
               CONCLUSIÓN
             </h4>
             <p className="font-bold text-red-800 text-sm mb-2">Opción 2: Discrepancia de Autoría (Firma Falsa)</p>
             <p className="text-justify text-red-900 leading-relaxed font-medium">
              Derivado del estudio de los movimientos generadores y el rastro del trayecto en el Análisis Grafocinético, se advierten divergencias morfo-estructurales y dinámicas significativas entre la firma cuestionada y las muestras de cotejo. La presencia de signos de ejecución lenta, tales como paradas inusuales, vacilaciones y una presión uniforme ajena al biorritmo del titular, denota una falta de espontaneidad propia de la imitación. En virtud de estos hallazgos, se determina que la firma dubitada <strong>NO PROCEDE DEL PUÑO Y LETRA</strong> de la persona a quien se le atribuye <strong>{defendantName}</strong>.
             </p>
          </div>
        );
      case 'C':
        return (
          <div className="mt-8 glass-card bg-amber-50/50 p-6 rounded-2xl border-amber-200/50">
            <h4 className="font-bold text-amber-900 uppercase mb-2 border-b border-amber-300/50 pb-1">
              CONCLUSIÓN
            </h4>
            <p className="font-bold text-amber-800 text-sm mb-2">Opción 3: Imposibilidad Técnica o Material</p>
            <p className="text-justify text-amber-900 leading-relaxed font-medium">
              Atendiendo a las limitaciones del material disponible (escasez de riqueza gráfica / falta de idoneidad en las muestras de cotejo), este perito manifiesta que no resulta técnicamente factible reconstruir la génesis gráfica ni evaluar con certeza el dinamismo del grafismo cuestionado. Al no contar con elementos de juicio suficientes para establecer una relación de uniprocedencia o exclusión bajo los estándares del método grafocinético, se declara una <strong>IMPOSIBILIDAD MATERIAL</strong> para determinar si el grafismo analizado procede o no del puño y letra de la persona en mención.
            </p>
          </div>
        );
      default:
        return (
          <div className="mt-8 glass-card bg-slate-100/50 p-6 rounded-2xl border-slate-300/50 text-slate-500 italic text-center">
            Para visualizar la conclusión automática, seleccione una "Determinación Pericial" en el apartado <strong>0. Datos Generales</strong>.
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="max-w-6xl mx-auto w-full p-4 md:p-8 space-y-8 min-h-full">
        
        {/* Main Header */}
        <div className="glass-panel p-8 rounded-3xl">
          <header className="border-b border-slate-400/30 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 uppercase drop-shadow-sm">
              14. ANÁLISIS GRAFOCINÉTICO
            </h2>
          </header>

          <div className="mt-8">
            {/* 1. Parte Fija: Introducción Teórica */}
            <div className="p-4 md:p-8 prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed font-serif text-base md:text-lg border-b border-slate-200/50">
              <p>
                El análisis grafocinético es una especialidad técnica de la grafoscopía que se centra en el estudio de los movimientos generadores del trazo para reconstruir de manera objetiva la "historia del grafismo". A diferencia de los métodos morfológicos que solo observan la apariencia externa o "forma" de las letras, esta técnica busca entender cómo fue ejecutada la escritura, analizando la trayectoria, el ritmo y la energía del útil inscriptor.
              </p>

              <p>
                Ahora bien, es importante determinar de manera analítica el orden, dirección y sentido de los movimientos que dan origen a cada trazo. Esto permite revelar si una grafía fue realizada con un solo impulso espontáneo o si fue fragmentada, lo cual es un indicio clave para detectar falsificaciones por imitación lenta. El perito evalúa variables físicas que son el resultado de procesos neurofisiológicos, tales como la velocidad, la presión efectiva, la tensión de línea, la fluidez y la tonicidad del trazo. Estas características son personalísimas y dependen de la coordinación neuromuscular única de cada individuo. Este método permite localizar constantes que surgen del subconsciente del autor y que aparecen de forma automática e involuntaria. Estos gestos se manifiestan en puntos críticos como los puntos de ataque (donde el útil toca el papel), los enlaces y los remates.
              </p>

              <p>
                A través de la grafocinética se investigan signos de falta de espontaneidad, como paradas inusuales, vacilaciones, retoques o temblores, diferenciando si estos son naturales (por enfermedad o edad) o producto del esfuerzo consciente de un falsificador por imitar un modelo ajeno. La trascendencia de este análisis ante su Señoría radica en que los automatismos motores son hábitos grabados en la memoria motriz que el autor legítimo no puede evitar realizar y que un falsificador no puede replicar con exactitud. Mientras que la "forma" de una firma es relativamente fácil de imitar (imitación servil), la "melodía cinética" o el ritmo del movimiento es prácticamente imposible de suplantar, lo que otorga al dictamen un alto grado de certeza científica.
              </p>
            </div>

            {/* 2. DOCUMENTO CUESTIONADO (Fotos) */}
            <div className="p-4 md:p-8 border-b border-slate-200/50 bg-red-50/20 backdrop-blur-sm">
              <h4 className="text-lg font-bold text-red-800 uppercase mb-4 border-l-4 border-red-500 pl-3">
                DOCUMENTO CUESTIONADO
              </h4>
              
              <div className="glass-card bg-white/50 p-4 md:p-6 rounded-xl border-2 border-dashed border-red-200/50">
                <div className="mb-4">
                  <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-red-50/50 border border-red-200/50 rounded-lg font-semibold text-red-700 uppercase tracking-widest hover:bg-red-100/50 active:bg-red-200/50 transition ease-in-out duration-150 shadow-sm text-sm backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                    [APARTADO DE FOTOGRAFÍAS DEL DOCUMENTO CUESTIONADO] - Subir
                    <input 
                      type="file" 
                      multiple 
                      accept="image/*" 
                      onChange={(e) => handleImageUpload(e, setQuestionedImages)}
                      className="hidden" 
                    />
                  </label>
                </div>

                {questionedImages.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {questionedImages.map((img, idx) => (
                      <div key={idx} className="relative group rounded-xl overflow-hidden glass-card p-2">
                        <img src={img} alt={`Grafocinética Cuestionado ${idx + 1}`} className="w-full h-48 md:h-64 object-contain rounded-lg" />
                        <button 
                          onClick={() => removeImage(idx, setQuestionedImages)}
                          className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity shadow-lg"
                          title="Eliminar imagen"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                        <div className="p-2 text-center text-xs text-slate-600 font-mono font-bold">FIGURA GC-C-{idx + 1}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-red-400 py-12 italic border border-red-100/50 rounded-xl bg-red-50/20 text-sm md:text-base">
                    Visualización de imágenes del documento cuestionado (Grafocinética)
                  </div>
                )}
              </div>
            </div>

            {/* 3. DOCUMENTO INDUBITABLE (Fotos) */}
            <div className="p-4 md:p-8 border-b border-slate-200/50 bg-green-50/20 backdrop-blur-sm">
              <h4 className="text-lg font-bold text-green-800 uppercase mb-4 border-l-4 border-green-500 pl-3">
                DOCUMENTO INDUBITABLE
              </h4>
              
              <div className="glass-card bg-white/50 p-4 md:p-6 rounded-xl border-2 border-dashed border-green-200/50">
                <div className="mb-4">
                  <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-green-50/50 border border-green-200/50 rounded-lg font-semibold text-green-700 uppercase tracking-widest hover:bg-green-100/50 active:bg-green-200/50 transition ease-in-out duration-150 shadow-sm text-sm backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                    [APARTADO DE FOTOGRAFÍAS DEL DOCUMENTO INDUBITABLE] - Subir
                    <input 
                      type="file" 
                      multiple 
                      accept="image/*" 
                      onChange={(e) => handleImageUpload(e, setUndisputedImages)}
                      className="hidden" 
                    />
                  </label>
                </div>

                {undisputedImages.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {undisputedImages.map((img, idx) => (
                      <div key={idx} className="relative group rounded-xl overflow-hidden glass-card p-2">
                        <img src={img} alt={`Grafocinética Indubitable ${idx + 1}`} className="w-full h-48 md:h-64 object-contain rounded-lg" />
                        <button 
                          onClick={() => removeImage(idx, setUndisputedImages)}
                          className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity shadow-lg"
                          title="Eliminar imagen"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                        <div className="p-2 text-center text-xs text-slate-600 font-mono font-bold">FIGURA GC-I-{idx + 1}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-green-400 py-12 italic border border-green-100/50 rounded-xl bg-green-50/20 text-sm md:text-base">
                     Visualización de imágenes del documento indubitable (Grafocinética)
                  </div>
                )}
              </div>
            </div>

            {/* 4. Descripción Manual Variable */}
            <div className="p-4 md:p-8 bg-white/20 border-b border-slate-200/50 backdrop-blur-sm">
              <h4 className="text-lg font-bold text-slate-800 uppercase mb-2">
                Análisis Específico (Variable)
              </h4>
              <p className="text-sm text-slate-600 mb-4">
                Describa aquí lo que se aprecia en cada dictamen para este asunto específico.
              </p>
              <textarea
                value={analysisText}
                onChange={(e) => setAnalysisText(e.target.value)}
                className="w-full h-48 md:h-64 p-4 rounded-xl glass-input border border-white/50 focus:ring-2 focus:ring-blue-500/50 outline-none font-serif text-base md:text-lg leading-relaxed shadow-inner"
                placeholder="Ingrese el análisis detallado de la velocidad, presión, ritmo y espontaneidad observados..."
              ></textarea>
            </div>

            {/* 5. CONCLUSIÓN */}
            <div className="p-4 md:p-8">
               {getConclusionContent()}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphokineticAnalysisView;