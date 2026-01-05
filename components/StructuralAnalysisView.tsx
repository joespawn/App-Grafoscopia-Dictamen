import React, { useState } from 'react';
import { ReportData } from '../types';

interface TableRow {
  aspect: string;
  indubitable: string;
  dubitable: string;
  observations: string;
}

interface StructuralAnalysisViewProps {
  data: ReportData;
}

const StructuralAnalysisView: React.FC<StructuralAnalysisViewProps> = ({ data }) => {
  const [questionedImages, setQuestionedImages] = useState<string[]>([]);
  const [undisputedImages, setUndisputedImages] = useState<string[]>([]);
  const [dictamen, setDictamen] = useState('');

  const defendantName = data.defendantName || "[DEMANDADO]";

  // Initial State for the Table
  const [tableRows, setTableRows] = useState<TableRow[]>([
    { aspect: 'Dimensión (Altura)', indubitable: '', dubitable: '', observations: '' },
    { aspect: 'Dirección de la línea', indubitable: '', dubitable: '', observations: '' },
    { aspect: 'Inclinación', indubitable: '', dubitable: '', observations: '' },
    { aspect: 'Presión Efectiva (Interpretación General)', indubitable: '', dubitable: '', observations: '' },
    { aspect: 'Velocidad de ejecución', indubitable: '', dubitable: '', observations: '' },
    { aspect: 'Punto de Ataque', indubitable: '', dubitable: '', observations: '' },
    { aspect: 'Remates (Finales)', indubitable: '', dubitable: '', observations: '' },
    { aspect: 'Enlaces (Coligamento)', indubitable: '', dubitable: '', observations: '' },
    { aspect: 'Gesto Gráfico (Idiotismo)', indubitable: '', dubitable: '', observations: '' },
  ]);

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

  const updateRow = (index: number, field: keyof TableRow, value: string) => {
    const newRows = [...tableRows];
    newRows[index] = { ...newRows[index], [field]: value };
    setTableRows(newRows);
  };

  const getConclusionContent = () => {
    switch (data.hypothesis) {
      case 'A':
        return (
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-900 uppercase mb-2">Opción A: Conclusión de Correspondencia (Positiva)</h4>
            <p className="text-justify text-green-900">
              <strong>CONCLUSIÓN DEL ANÁLISIS MORFOLÓGICO:</strong> Como resultado de un estudio profundo, minucioso y con el rigor especializado que la materia exige, se concluye que la firma señalada como dubitada <strong>SÍ PROVIENE</strong> del puño y letra de la persona a quien se le atribuye <strong>{defendantName}</strong>. Lo anterior se fundamenta en la identidad total observada durante el proceso de cotejo técnico, estableciendo una relación de procedencia directa y fehaciente entre la grafía cuestionada y el hábito gráfico del suscriptor.
            </p>
          </div>
        );
      case 'B':
        return (
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
             <h4 className="font-bold text-red-900 uppercase mb-2">Opción B: Conclusión de No Correspondencia (Negativa)</h4>
             <p className="text-justify text-red-900">
              <strong>CONCLUSIÓN DEL ANÁLISIS MORFOLÓGICO:</strong> Como resultado de un estudio profundo, minucioso y con el rigor especializado que la materia exige, se concluye que la firma señalada como dubitada <strong>NO PROVIENE</strong> del puño y letra de la persona a quien se le atribuye <strong>{defendantName}</strong>. Lo anterior se fundamenta en las discrepancias formales e insuperables detectadas durante el proceso de cotejo técnico, determinando que la grafía cuestionada corresponde a un origen gráfico distinto y es ajena a la ejecución del suscriptor.
             </p>
          </div>
        );
      case 'C':
        return (
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h4 className="font-bold text-amber-900 uppercase mb-2">Opción C: Conclusión de Imposibilidad Técnica / Material</h4>
            <p className="text-justify text-amber-900">
              <strong>CONCLUSIÓN DEL ANÁLISIS MORFOLÓGICO:</strong> Como resultado de un estudio profundo, minucioso y con el rigor especializado que la materia exige, se determina que existe una <strong>IMPOSIBILIDAD TÉCNICA</strong> para establecer si la firma señalada como dubitada <strong>PROVIENE O NO</strong> del puño y letra de la persona a quien se le atribuye. Esta determinación obedece a que el material sometido a dictamen no reúne los requisitos técnicos mínimos de idoneidad o suficiencia necesarios para realizar un cotejo fidedigno, lo que impide a este perito emitir un pronunciamiento categórico con la certeza científica que el presente análisis requiere.
            </p>
          </div>
        );
      default:
        return (
          <div className="bg-slate-100 p-6 rounded-lg border border-slate-300 text-slate-500 italic text-center">
            Para visualizar la conclusión automática de este capítulo, por favor seleccione una "Determinación Pericial" (Hipótesis) en el apartado <strong>0. Datos Generales</strong>.
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full p-8 space-y-8 bg-white shadow-sm min-h-full">
        
        {/* Header Section */}
        <header className="border-b-2 border-slate-800 pb-4">
          <h2 className="text-3xl font-serif font-bold text-slate-900 uppercase">
            12. ANÁLISIS MORFOLÓGICO DEL TRAZADO
          </h2>
          <p className="text-lg font-serif italic text-slate-600 mt-2">
            (Estudio Estructural)
          </p>
        </header>

        {/* 1. Parte Fija: Introducción */}
        <section className="prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed font-serif text-lg">
          <p>
            Consiste en la observación minuciosa, rigurosa y fundamentada de la “onda gráfica” que constituye la escritura o firma. Este estudio técnico no es empírico, sino que se sustenta en el Método de Comparación Formal de la Escritura, el cual permite identificar los rasgos de cada estructura que integra la grafía para distinguir diferencias o similitudes significativas en los cotejos. A través de esta evaluación, se analizan tanto las características generales (aspectos extrínsecos y estructurales) como los rasgos particulares (grammas y gestostipo), con el objetivo de determinar si el grafismo proviene de un mismo Sistema Nervioso Central (SNC) y así establecer de manera fehaciente su origen gráfico.
          </p>
        </section>

        {/* 2. Documento Cuestionado (Fotos) */}
        <section className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 uppercase border-b border-slate-200 pb-2">
            DOCUMENTO CUESTIONADO
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
              <div className="text-center text-slate-400 py-8 italic">
                [APARTADO DE FOTOGRAFÍAS DEL DOCUMENTO CUESTIONADO]
              </div>
            )}
          </div>
        </section>

        {/* 3. Documento Indubitable (Fotos) */}
        <section className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 uppercase border-b border-slate-200 pb-2">
            DOCUMENTO INDUBITABLE
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
              <div className="text-center text-slate-400 py-8 italic">
                [APARTADO DE FOTOGRAFÍAS DEL DOCUMENTO INDUBITABLE]
              </div>
            )}
          </div>
        </section>

        {/* 4. Tabla de Cotejo Morfológico-Estructural */}
        <section className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 uppercase border-b border-slate-200 pb-2">
            TABLA DE COTEJO MORFOLÓGICO-ESTRUCTURAL
          </h3>

          <div className="prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed font-serif text-lg">
            <p>
              A efectos de mayor claridad técnica, se presenta a continuación el Cuadro Comparativo de Características Morfo-Estructurales, donde se confrontan los hallazgos obtenidos en ambos materiales objeto de estudio. Es pertinente precisar a su Señoría que las valoraciones consignadas en el presente esquema no deben interpretarse como magnitudes absolutas ni constantes matemáticas, sino como una interpretación técnica y científica derivada del análisis de las constantes gráficas. Esta aclaración es imperativa debido a que el grafismo humano, por su origen neurofisiológico, es un proceso esencialmente dinámico y mutable que admite fluctuaciones naturales e inevitables dentro de un Patrón de Variaciones Posibles (PVP). Por lo tanto, el estudio de los automatismos no busca una igualdad geométrica inexistente en la naturaleza, sino una equivalencia rítmica y gestual que, a pesar de las variaciones intrínsecas de la ejecución, permite individualizar de forma fehaciente al autor.
            </p>
          </div>

          {/* Tabla Dinámica */}
          <div className="overflow-x-auto mt-4 rounded-lg border border-slate-300 shadow-sm">
            <table className="min-w-full divide-y divide-slate-300">
              <caption className="bg-slate-50 py-3 text-lg font-bold text-slate-800 uppercase tracking-wide border-b border-slate-300">
                Tabla Análisis de Confrontación Gráfica
              </caption>
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider w-1/4">Aspecto Técnico</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider w-1/4">Material Indubitable (M.I.)</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider w-1/4">Material Dubitable (M.D.)</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider w-1/4">Observaciones / Grado de Coincidencia</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {tableRows.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-bold text-slate-900 align-top">
                      {row.aspect}
                    </td>
                    <td className="px-2 py-2 align-top">
                      <textarea
                        value={row.indubitable}
                        onChange={(e) => updateRow(index, 'indubitable', e.target.value)}
                        className="w-full h-20 p-2 text-sm border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Describir M.I."
                      />
                    </td>
                    <td className="px-2 py-2 align-top">
                      <textarea
                        value={row.dubitable}
                        onChange={(e) => updateRow(index, 'dubitable', e.target.value)}
                        className="w-full h-20 p-2 text-sm border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Describir M.D."
                      />
                    </td>
                    <td className="px-2 py-2 align-top">
                      <textarea
                        value={row.observations}
                        onChange={(e) => updateRow(index, 'observations', e.target.value)}
                        className="w-full h-20 p-2 text-sm border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Observaciones"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-slate-300 my-8" />

        {/* 5. Contenido Original (Texto Técnico) */}
        <section className="prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed space-y-4">
          <h4 className="font-bold text-lg uppercase text-slate-700">Análisis Estructural Particular o del Gesto Gráfico (Continuación)</h4>
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

        {/* 6. Contenido Original (Dictamen Manual) */}
        <section className="space-y-4">
          <h3 className="text-xl font-bold text-slate-800 uppercase">
            Dictamen / Observaciones Específicas Adicionales
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

        <hr className="border-slate-300 my-8" />

        {/* 7. CONCLUSIÓN DEL CAPÍTULO (DINÁMICA) */}
        <section className="space-y-6 pb-12">
          <h3 className="text-2xl font-bold text-slate-900 uppercase border-b-2 border-slate-800 pb-2">
            CONCLUSIÓN
          </h3>
          {getConclusionContent()}
        </section>

      </div>
    </div>
  );
};

export default StructuralAnalysisView;