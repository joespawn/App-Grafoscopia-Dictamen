import React, { useState } from 'react';
import { ReportData } from '../types';

interface GeneralStructuralAnalysisViewProps {
  data: ReportData;
}

const GeneralStructuralAnalysisView: React.FC<GeneralStructuralAnalysisViewProps> = ({ data }) => {
  const [questionedImages, setQuestionedImages] = useState<string[]>([]);
  const [undisputedImages, setUndisputedImages] = useState<string[]>([]);
  const [analysisText, setAnalysisText] = useState('');

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

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="max-w-6xl mx-auto w-full p-4 md:p-8 space-y-8 min-h-full">
        
        {/* Main Header */}
        <div className="glass-panel p-8 rounded-3xl">
          <header className="border-b border-slate-400/30 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 uppercase drop-shadow-sm">
              15. ANÁLISIS ESTRUCTURAL DE ORDEN GENERAL
            </h2>
          </header>

          <div className="mt-8">
            {/* 1. Parte Fija: Introducción Teórica */}
            <div className="p-4 md:p-8 prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed font-serif text-base md:text-lg border-b border-slate-200/50">
              <p>
                Aquí se analizará y se realizará el estudio técnico de la fuerza de contacto que el útil inscriptor ejerce sobre el papel, lo cual constituye un hábito motorizado de origen subconsciente de altísimo valor identificatorio. Mientras que la forma de una firma puede ser imitada visualmente, la energía y el dinamismo grabados en las fibras del soporte son prácticamente imposibles de replicar o distorsionar por un falsificador.
              </p>

              <p>
                Para observar el surco real sin la distracción del color de la tinta, se utiliza una metodología validada por organismos internacionales como la AEEED. El procedimiento técnico consiste en, Eliminación por Radiación Infrarroja (IR), Se coloca el documento frente a una cámara de video con un sensor CCD sensible al espectro infrarrojo. Al aplicar filtros específicos “entre los 720 y 950 nanómetros”, los pigmentos de la mayoría de las tintas de bolígrafo se vuelven transparentes, permitiendo ver a través de ellos. Una vez que la tinta es "invisible" para la cámara, se ilumina el sector con luz oblicua o rasante en ángulos muy bajos (entre 5° y 10°). Esta iluminación proyecta sombras dentro del surco o hendidura, revelando con total nitidez la profundidad, los puntos de parada y la intensidad real de la carga muscular.
              </p>

              <p>
                Tercera Dimensión del Grafismo. A diferencia del examen morfológico (que es bidimensional), la presión efectiva analiza la profundidad o "tercera dimensión" del trazo. Identificación de Puntos de Referencia Intrínsecos (PRI): La presión se clasifica como un PRI porque está "escondida" dentro del trazo y el autor no es consciente de dónde aplica más o menos fuerza. Es importante destacar, las firmas auténticas presentan una presión alternante (sucesión natural de finos y gruesos), mientras que las falsas suelen mostrar una presión monótona y uniforme debido a la ejecución lenta del imitador. Esta técnica permite confirmar con precisión científica las paradas del instrumento, los retoques o los reenganches que a menudo quedan ocultos bajo el entintado superficial.
              </p>

              <p>
                La trascendencia de este estudio radica en que la presión es un automatismo invisible para el ojo inexperto y para el propio autor, por lo que no puede ser sometida a un control voluntario. Un peritaje que incluya la demostración del relieve otorga al juzgador una prueba objetiva y tangible, eliminando las interpretaciones subjetivas sobre el parecido de las formas.
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
                        <img src={img} alt={`Estructural Cuestionado ${idx + 1}`} className="w-full h-48 md:h-64 object-contain rounded-lg" />
                        <button 
                          onClick={() => removeImage(idx, setQuestionedImages)}
                          className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity shadow-lg"
                          title="Eliminar imagen"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                        <div className="p-2 text-center text-xs text-slate-600 font-mono font-bold">FIGURA ES-C-{idx + 1}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-red-400 py-12 italic border border-red-100/50 rounded-xl bg-red-50/20 text-sm md:text-base">
                    Visualización de imágenes del documento cuestionado (Estructural)
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
                        <img src={img} alt={`Estructural Indubitable ${idx + 1}`} className="w-full h-48 md:h-64 object-contain rounded-lg" />
                        <button 
                          onClick={() => removeImage(idx, setUndisputedImages)}
                          className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity shadow-lg"
                          title="Eliminar imagen"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                        <div className="p-2 text-center text-xs text-slate-600 font-mono font-bold">FIGURA ES-I-{idx + 1}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-green-400 py-12 italic border border-green-100/50 rounded-xl bg-green-50/20 text-sm md:text-base">
                     Visualización de imágenes del documento indubitable (Estructural)
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
                placeholder="Ingrese el análisis detallado de la presión efectiva, profundidad del surco y relieve observado..."
              ></textarea>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralStructuralAnalysisView;