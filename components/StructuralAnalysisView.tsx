import React, { useState } from 'react';

const StructuralAnalysisView: React.FC = () => {
  const [questionedImages, setQuestionedImages] = useState<string[]>([]);
  const [undisputedImages, setUndisputedImages] = useState<string[]>([]);
  const [dictamen, setDictamen] = useState('');

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
    <div className="flex flex-col h-full bg-slate-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full p-8 space-y-8 bg-white shadow-sm min-h-full">
        
        {/* Header Section */}
        <header className="border-b-2 border-slate-800 pb-4">
          <h2 className="text-3xl font-serif font-bold text-slate-900 uppercase">
            DESENVOLVIMIENTO ESCRITURAL
          </h2>
        </header>

        {/* Fixed Technical Text */}
        <section className="prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed space-y-4">
          <p>
            El Análisis Estructural Particular o del Gesto Gráfico es la fase más profunda y determinante de la grafoscopía forense. Mientras que el análisis general observa la "fachada" de la escritura, esta técnica se adentra en las "huellas digitales del grafismo": aquellos hábitos subconscientes, automáticos e invisibles para el ojo inexperto que individualizan a un autor de manera única.
          </p>

          <p>
            El gesto gráfico (también llamado idiotismo, habitualismo o gesto tipo) es una constante escritural que se aparta del modelo caligráfico aprendido para adquirir una impronta personalísima. La técnica consiste en el método analítico: descomponer la firma (un todo) en sus partes constituyentes para aislar estas peculiaridades, verificando su repetición constante en el material indubitable para luego cotejarlas con la muestra cuestionada. Para que un rasgo sea considerado un "gesto gráfico" con valor identificatorio, debe cumplir con requisitos estrictos:
          </p>

          <ul className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-600 space-y-3 list-none">
            <li>
              <strong>• Origen Subconsciente y Automático:</strong> Son movimientos que el cerebro ejecuta sin intervención de la voluntad, lo que los hace casi imposibles de omitir por el titular o de imitar por un falsificador.
            </li>
            <li>
              <strong>• Constancia:</strong> El rasgo debe aparecer en la mayoría de las muestras (entre el 90% y 100% de las veces) para ser considerado una constante del autor.
            </li>
            <li>
              <strong>• Invisibilidad para el neófito:</strong> Son detalles tan sutiles (como la forma de un punto de ataque o un cambio de presión mínimo) que pasan desapercibidos para quien intenta falsificar la firma.
            </li>
          </ul>
        </section>

        <hr className="border-slate-300" />

        {/* Documento Cuestionado Section */}
        <section className="space-y-4">
          <h3 className="text-xl font-bold text-red-700 uppercase border-b border-red-200 pb-2">
            Documento Cuestionado
          </h3>
          
          <div className="bg-slate-50 p-6 rounded-lg border-2 border-dashed border-slate-300">
            <div className="mb-4">
              <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-white border border-slate-300 rounded-md font-semibold text-slate-700 uppercase tracking-widest hover:bg-slate-50 active:bg-slate-100 transition ease-in-out duration-150 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
                Subir Fotografías (Cuestionado)
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
                  <div key={idx} className="relative group rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img src={img} alt={`Cuestionado ${idx + 1}`} className="w-full h-64 object-contain" />
                    <button 
                      onClick={() => removeImage(idx, setQuestionedImages)}
                      className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Eliminar imagen"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <div className="p-2 text-center text-xs text-slate-500 font-mono">FIGURA C-{idx + 1}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-slate-400 py-8">
                No se han cargado imágenes del documento cuestionado.
              </div>
            )}
          </div>
        </section>

        {/* Documento Indubitable Section */}
        <section className="space-y-4">
          <h3 className="text-xl font-bold text-green-700 uppercase border-b border-green-200 pb-2">
            Documento Indubitable
          </h3>
          
          <div className="bg-slate-50 p-6 rounded-lg border-2 border-dashed border-slate-300">
            <div className="mb-4">
              <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-white border border-slate-300 rounded-md font-semibold text-slate-700 uppercase tracking-widest hover:bg-slate-50 active:bg-slate-100 transition ease-in-out duration-150 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
                Subir Fotografías (Indubitable)
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
                  <div key={idx} className="relative group rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img src={img} alt={`Indubitable ${idx + 1}`} className="w-full h-64 object-contain" />
                    <button 
                      onClick={() => removeImage(idx, setUndisputedImages)}
                      className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Eliminar imagen"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <div className="p-2 text-center text-xs text-slate-500 font-mono">FIGURA I-{idx + 1}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-slate-400 py-8">
                No se han cargado imágenes del documento indubitable.
              </div>
            )}
          </div>
        </section>

        <hr className="border-slate-300" />

        {/* Dictamen Manual Section */}
        <section className="space-y-4 pb-12">
          <h3 className="text-xl font-bold text-slate-800 uppercase">
            Dictamen / Observaciones Específicas
          </h3>
          <p className="text-sm text-slate-500">
            Describa de forma manual lo que se aprecia en el dictamen para este asunto específico.
          </p>
          <textarea
            value={dictamen}
            onChange={(e) => setDictamen(e.target.value)}
            className="w-full h-64 p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-serif text-lg leading-relaxed shadow-inner"
            placeholder="Escriba aquí su análisis sobre los gestos gráficos, puntos de ataque y características subconscientes observadas..."
          ></textarea>
        </section>

      </div>
    </div>
  );
};

export default StructuralAnalysisView;