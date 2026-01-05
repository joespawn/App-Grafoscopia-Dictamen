import React, { useState } from 'react';
import { ReportData } from '../types';

interface MicroscopicAnalysisViewProps {
  data: ReportData;
}

const MicroscopicAnalysisView: React.FC<MicroscopicAnalysisViewProps> = ({ data }) => {
  // Estado para Momentos Gráficos
  const [questionedImages, setQuestionedImages] = useState<string[]>([]);
  const [undisputedImages, setUndisputedImages] = useState<string[]>([]);
  const [analysisText, setAnalysisText] = useState('');

  // Estado para Inclinación
  const [inclinationQuestionedImages, setInclinationQuestionedImages] = useState<string[]>([]);
  const [inclinationUndisputedImages, setInclinationUndisputedImages] = useState<string[]>([]);
  const [inclinationAnalysisText, setInclinationAnalysisText] = useState('');

  // Estado para Desenvolvimiento Escritural
  const [developmentQuestionedImages, setDevelopmentQuestionedImages] = useState<string[]>([]);
  const [developmentUndisputedImages, setDevelopmentUndisputedImages] = useState<string[]>([]);
  const [developmentAnalysisText, setDevelopmentAnalysisText] = useState('');

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

  // Conclusión para MOMENTOS GRÁFICOS
  const getMomentosConclusionContent = () => {
    switch (data.hypothesis) {
      case 'A':
        return (
          <div className="mt-8 glass-card bg-green-50/50 p-6 rounded-2xl border-green-200/50">
            <h4 className="font-bold text-green-900 uppercase mb-2 border-b border-green-300/50 pb-1">
              CONCLUSIÓN
            </h4>
            <p className="font-bold text-green-800 text-sm mb-2">Opción 1: Conclusión Positiva (Autenticidad)</p>
            <p className="text-justify text-green-900 leading-relaxed font-medium">
              Tras el estudio técnico-comparativo, se determina que los momentos escriturales identificados en la firma cuestionada se encuentran plenamente representados y comprendidos dentro del Patrón de Variaciones Posibles (PVP) del titular, guardando una correspondencia cualitativa con las muestras indubitadas. Al existir una equivalencia gestual en los automatismos, puntos de ataque y nexos, se concluye que el grafismo dubitado <strong>SÍ PROCEDE DEL PUÑO Y LETRA</strong> de la persona a quien se le atribuye <strong>{defendantName}</strong>, siendo una ejecución espontánea y genuina.
            </p>
          </div>
        );
      case 'B':
        return (
          <div className="mt-8 glass-card bg-red-50/50 p-6 rounded-2xl border-red-200/50">
             <h4 className="font-bold text-red-900 uppercase mb-2 border-b border-red-300/50 pb-1">
               CONCLUSIÓN
             </h4>
             <p className="font-bold text-red-800 text-sm mb-2">Opción 2: Conclusión Negativa (Falsedad)</p>
             <p className="text-justify text-red-900 leading-relaxed font-medium">
              Derivado del análisis gramográfico, se advierte que los momentos escriturales de la firma cuestionada presentan una fragmentación y morfología que exceden las variaciones naturales observadas en el material indubitable. Al detectarse gestos-tipo y hábitos de ejecución ajenos a la dinámica motora del titular, así como signos de falta de espontaneidad, se concluye que la firma dubitada <strong>NO CORRESPONDE AL PUÑO Y LETRA</strong> de la persona a quien se le atribuye <strong>{defendantName}</strong>, tratándose de una ejecución por imitación.
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
              Debido a las limitaciones intrínsecas del material disponible (como la falta de idoneidad o insuficiencia de las muestras), no es posible establecer de manera fehaciente si los momentos escriturales y demás gestos-tipo se sitúan dentro del rango de variabilidad del autor. Por lo anterior, existe una <strong>IMPOSIBILIDAD TÉCNICA</strong> para determinar si la firma cuestionada corresponde o no al puño y letra de la persona en mención, debiendo prevalecer el criterio de reserva pericial ante la carencia de elementos de juicio suficientes.
            </p>
          </div>
        );
      default:
        return (
          <div className="mt-8 glass-card bg-slate-100/50 p-6 rounded-2xl border-slate-300/50 text-slate-500 italic text-center">
            Para visualizar la conclusión automática de este subapartado, por favor seleccione una "Determinación Pericial" (Hipótesis) en el apartado <strong>0. Datos Generales</strong>.
          </div>
        );
    }
  };

  // Conclusión para INCLINACIÓN
  const getInclinationConclusionContent = () => {
    switch (data.hypothesis) {
      case 'A':
        return (
          <div className="mt-8 glass-card bg-green-50/50 p-6 rounded-2xl border-green-200/50">
            <h4 className="font-bold text-green-900 uppercase mb-2 border-b border-green-300/50 pb-1">
              CONCLUSIÓN
            </h4>
            <p className="font-bold text-green-800 text-sm mb-2">Opción A: Conclusión de Correspondencia (Autenticidad)</p>
            <p className="text-justify text-green-900 leading-relaxed font-medium">
              Tras el análisis detallado de la inclinación o versión axial, se determinó que los ángulos de desviación de los trazos magistrales en la firma cuestionada guardan una correspondencia rítmica y constante con los hábitos identificados en el material indubitable. Al no exceder el Patrón de Variaciones Posibles (PVP) del titular y presentar un paralelismo grammático equivalente en la base de la caja de escritura, se concluye que el grafismo analizado <strong>SÍ PROCEDE DEL PUÑO Y LETRA</strong> de la persona a quien se le atribuye <strong>{defendantName}</strong>, tratándose de una ejecución espontánea y habitual.
            </p>
          </div>
        );
      case 'B':
        return (
          <div className="mt-8 glass-card bg-red-50/50 p-6 rounded-2xl border-red-200/50">
             <h4 className="font-bold text-red-900 uppercase mb-2 border-b border-red-300/50 pb-1">
               CONCLUSIÓN
             </h4>
             <p className="font-bold text-red-800 text-sm mb-2">Opción B: Conclusión de Discrepancia (Falsedad)</p>
             <p className="text-justify text-red-900 leading-relaxed font-medium">
              Derivado de la compulsa técnica de la inclinación, se advierten divergencias morfo-estructurales significativas en los valores angulares de la firma cuestionada respecto a las constantes del material de cotejo. La ausencia de un paralelismo grammático coherente y la presencia de variaciones de inclinación erráticas en la limitante basilar denotan una ejecución lenta y precavida, ajena al automatismo motor del titula; por lo tanto, se determina que la firma dubitada <strong>NO PROCEDE DEL PUÑO Y LETRA</strong> de la persona a quien se le atribuye <strong>{defendantName}</strong>.
             </p>
          </div>
        );
      case 'C':
        return (
          <div className="mt-8 glass-card bg-amber-50/50 p-6 rounded-2xl border-amber-200/50">
            <h4 className="font-bold text-amber-900 uppercase mb-2 border-b border-amber-300/50 pb-1">
              CONCLUSIÓN
            </h4>
            <p className="font-bold text-amber-800 text-sm mb-2">Opción C: Conclusión de Imposibilidad Técnica (Material insuficiente)</p>
            <p className="text-justify text-amber-900 leading-relaxed font-medium">
              Atendiendo a las limitaciones intrínsecas del material disponible para estudio (como la escasa riqueza gráfica o la falta de idoneidad de las muestras), no resulta técnicamente factible realizar una valoración fidedigna de la versión inclinación y el alineamiento básico de la firma cuestionada. En virtud de que no se cuenta con elementos suficientes para establecer una relación de identidad o exclusión, este perito manifiesta una <strong>IMPOSIBILIDAD MATERIAL</strong> para determinar si el grafismo analizado procede o no del puño y letra de la persona en mención.
            </p>
          </div>
        );
      default:
        return (
          <div className="mt-8 glass-card bg-slate-100/50 p-6 rounded-2xl border-slate-300/50 text-slate-500 italic text-center">
            Para visualizar la conclusión automática de este subapartado, por favor seleccione una "Determinación Pericial" (Hipótesis) en el apartado <strong>0. Datos Generales</strong>.
          </div>
        );
    }
  };

  // Conclusión para DESENVOLVIMIENTO ESCRITURAL
  const getDevelopmentConclusionContent = () => {
    switch (data.hypothesis) {
      case 'A':
        return (
          <div className="mt-8 glass-card bg-green-50/50 p-6 rounded-2xl border-green-200/50">
            <h4 className="font-bold text-green-900 uppercase mb-2 border-b border-green-300/50 pb-1">
              CONCLUSIÓN
            </h4>
            <p className="font-bold text-green-800 text-sm mb-2">Opción 1: Conclusión de Correspondencia (Autenticidad)</p>
            <p className="text-justify text-green-900 leading-relaxed font-medium">
              Tras el análisis técnico del desenvolvimiento escritural, se ha determinado una concordancia rítmica y dinámica entre el rastro del trayecto identificado en la firma cuestionada y las constantes motoras del titular. Los automatismos y la génesis gráfica observada guardan una equivalencia cualitativa con el material de cotejo, situándose plenamente dentro de su Patrón de Variaciones Posibles (PVP). Por lo tanto, se concluye que el grafismo analizado <strong>SÍ PROCEDE DEL PUÑO Y LETRA</strong> de la persona a quien se le atribuye <strong>{defendantName}</strong>, tratándose de una ejecución espontánea y habitual.
            </p>
          </div>
        );
      case 'B':
        return (
          <div className="mt-8 glass-card bg-red-50/50 p-6 rounded-2xl border-red-200/50">
             <h4 className="font-bold text-red-900 uppercase mb-2 border-b border-red-300/50 pb-1">
               CONCLUSIÓN
             </h4>
             <p className="font-bold text-red-800 text-sm mb-2">Opción 2: Conclusión de Discrepancia (Falsedad)</p>
             <p className="text-justify text-red-900 leading-relaxed font-medium">
              Derivado del estudio del desenvolvimiento escritural, se advierten discrepancias significativas en la génesis gráfica y la dinámica motriz de la firma cuestionada respecto a las constantes identificadas en las muestras indubitables. La presencia de signos de ejecución lenta, tales como paradas inusuales y vacilaciones en el rastro del trayecto, denota una falta de espontaneidad ajena al automatismo habitual del titular. En consecuencia, se determina que la firma dubitada <strong>NO PROCEDE DEL PUÑO Y LETRA</strong> de la persona a quien se le atribuye <strong>{defendantName}</strong>, siendo producto de una ejecución por imitación.
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
              Atendiendo a las limitaciones materiales del espécimen analizado (como la escasez de riqueza gráfica o la falta de idoneidad en las muestras de cotejo), no resulta técnicamente factible reconstruir la génesis gráfica ni evaluar con certeza el dinamismo del desenvolvimiento escritural. Ante la carencia de elementos de juicio suficientes para establecer una relación de identidad o exclusión con el rigor científico necesario, se manifiesta una <strong>IMPOSIBILIDAD MATERIAL</strong> para determinar si el grafismo analizado procede o no del puño y letra de la persona en mención.
            </p>
          </div>
        );
      default:
        return (
          <div className="mt-8 glass-card bg-slate-100/50 p-6 rounded-2xl border-slate-300/50 text-slate-500 italic text-center">
            Para visualizar la conclusión automática de este subapartado, por favor seleccione una "Determinación Pericial" (Hipótesis) en el apartado <strong>0. Datos Generales</strong>.
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
              13. ANÁLISIS MICROSCÓPICOS
            </h2>
          </header>

          {/* --------------------------------------------------------------------------------------- */}
          {/* SUB-APARTADO 1: MOMENTOS GRÁFICOS */}
          {/* --------------------------------------------------------------------------------------- */}
          <div className="mt-8">
            <div className="glass-card bg-white/40 p-6 rounded-t-2xl border-b-0">
              <h3 className="text-lg md:text-xl font-bold uppercase text-slate-800 tracking-wide">
                MOMENTOS GRÁFICOS (O ESCRITURALES)
              </h3>
            </div>

            <div className="glass-panel rounded-b-2xl border-t-0 p-0 overflow-hidden">
              {/* 1. Parte Fija: Definición e Importancia */}
              <div className="p-4 md:p-8 prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed font-serif text-base md:text-lg border-b border-slate-200/50">
                <p>
                  <strong>Definición:</strong> Los momentos gráficos (también denominados momentos escriturales o signaturales) se definen como cada una de las secuencias de trazos ejecutadas de forma continua, los cuales se contabilizan cada vez que el útil inscriptor (bolígrafo, pluma, lápiz, etc.) se posa sobre el sustrato y se separa de este. En términos técnicos, cada levantamiento del útil constituye una solución de continuidad o "corte", marcando el inicio y el fin de un momento gráfico específico dentro de la ejecución de una firma o escrito.
                </p>

                <p>
                  El análisis de los momentos gráficos es de vital importancia en el estudio grafoscópico por las siguientes razones:
                </p>

                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Identificación de la Génesis Gráfica:</strong> Permiten reconstruir la "historia del grama", revelando el orden y la dirección de los movimientos motores y nerviosos que el autor refleja de manera subconsciente en su escritura.
                  </li>
                  <li>
                    <strong>Valor de Individualización:</strong> Constituyen una de las particularidades intrínsecas y gestos-tipo de mayor valor identificatorio, ya que el número de momentos y los puntos exactos de levantamiento son hábitos automáticos difícilmente modificables o imitables.
                  </li>
                  <li>
                    <strong>Detección de Falsificaciones:</strong> En firmas apócrifas, es común observar un número inusual de momentos gráficos debido a vacilaciones, paradas innecesarias o retoques propios de una ejecución lenta e insegura, lo cual contrasta con la fluidez y el dinamismo de una firma auténtica.
                  </li>
                  <li>
                    <strong>Análisis Grafocinético:</strong> Su estudio permite verificar los hábitos del movimiento escritural, identificando si hubo tropiezos, interrupciones o reenganches que delaten la falta de espontaneidad en el trazo.
                  </li>
                </ul>
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
                      Subir Foto (Cuestionado)
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
                          <img src={img} alt={`Micro Cuestionado ${idx + 1}`} className="w-full h-48 md:h-64 object-contain rounded-lg" />
                          <button 
                            onClick={() => removeImage(idx, setQuestionedImages)}
                            className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity shadow-lg"
                            title="Eliminar imagen"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                          <div className="p-2 text-center text-xs text-slate-600 font-mono font-bold">FIGURA C-{idx + 1}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-red-400 py-12 italic border border-red-100/50 rounded-xl bg-red-50/20 text-sm md:text-base">
                      Visualización de imágenes del documento cuestionado
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
                      Subir Foto (Indubitable)
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
                          <img src={img} alt={`Micro Indubitable ${idx + 1}`} className="w-full h-48 md:h-64 object-contain rounded-lg" />
                          <button 
                            onClick={() => removeImage(idx, setUndisputedImages)}
                            className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity shadow-lg"
                            title="Eliminar imagen"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                          <div className="p-2 text-center text-xs text-slate-600 font-mono font-bold">FIGURA I-{idx + 1}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-green-400 py-12 italic border border-green-100/50 rounded-xl bg-green-50/20 text-sm md:text-base">
                       Visualización de imágenes del documento indubitable
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
                  Describa aquí lo que se aprecia en el dictamen para este asunto específico.
                </p>
                <textarea
                  value={analysisText}
                  onChange={(e) => setAnalysisText(e.target.value)}
                  className="w-full h-48 md:h-64 p-4 rounded-xl glass-input border border-white/50 focus:ring-2 focus:ring-blue-500/50 outline-none font-serif text-base md:text-lg leading-relaxed shadow-inner"
                  placeholder="Ingrese el análisis detallado de los momentos gráficos observados en las muestras..."
                ></textarea>
              </div>

              {/* 5. CONCLUSIÓN (Dinámica MOMENTOS) */}
              <div className="p-4 md:p-8">
                 {getMomentosConclusionContent()}
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------------------------------- */}
          {/* SUB-APARTADO 2: INCLINACIÓN */}
          {/* --------------------------------------------------------------------------------------- */}
          <div className="mt-8 md:mt-12">
            <div className="glass-card bg-white/40 p-6 rounded-t-2xl border-b-0">
               <h3 className="text-lg md:text-xl font-bold uppercase text-slate-800 tracking-wide">
                 INCLINACIÓN
               </h3>
            </div>
            
            <div className="glass-panel rounded-b-2xl border-t-0 p-0 overflow-hidden">
              {/* 1. Parte Fija: INCLINACIÓN */}
              <div className="p-4 md:p-8 prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed font-serif text-base md:text-lg border-b border-slate-200/50">
                <p>
                  La inclinación, se define como el ángulo de desviación que presentan los trazos magistrales (ejes de las letras) respecto de la perpendicular a la línea de base o limitante basal del grafismo. Esta característica de orden estructural permite clasificar la escritura en tres categorías principales: erguida (vertical a 90°), derecha (inclinada a la derecha) o izquierda (inclinada a la izquierda o invertida).
                </p>

                <p>
                  El análisis de la inclinación es de vital trascendencia para este estudio, ya que no se limita a una apreciación general del "vuelco" de la firma, sino que se centra en el paralelismo grammático. Es decir, se evalúa la constancia rítmica con la que el autor mantiene o varía los ángulos de sus grafías de manera subconsciente. Resulta imperativo destacar ante su Señoría que la inclinación que se manifiesta en la base de la caja de escritura (el espacio donde se asienta el núcleo de las letras) posee un valor identificatorio superior. Mientras que un falsificador puede intentar emular la inclinación general o "macroscópica" de una firma, le resulta prácticamente imposible replicar la micro-inclinación y el alineamiento básico presentes en la base de los trazos. Esto se debe a que la dirección de los ejes en contacto con la línea de sustentación es el resultado de un hábito motriz automatizado y de la presión efectiva biorrítmica, elementos que escapan al control consciente de un imitador.
                </p>
                
                <p>
                  La ciencia grafoscópica establece que la inclinación está íntimamente ligada a la velocidad y al dinamismo del puño ejecutor. En una ejecución apócrifa, el falsario suele realizar un trazado lento y precavido para cuidar la forma, lo que interrumpe el flujo natural de los ejes y produce variaciones angulares erráticas en la base de la escritura que no corresponden al Patrón de Variaciones Posibles (PVP) del titular legítimo. Por lo tanto, la concordancia en los valores angulares internos y su relación con la caja de escritura constituye uno de los indicios más sólidos de autenticidad.
                </p>
              </div>

              {/* 2. DOCUMENTO CUESTIONADO - INCLINACIÓN */}
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
                      Subir Foto (Cuestionado)
                      <input 
                        type="file" 
                        multiple 
                        accept="image/*" 
                        onChange={(e) => handleImageUpload(e, setInclinationQuestionedImages)}
                        className="hidden" 
                      />
                    </label>
                  </div>

                  {inclinationQuestionedImages.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {inclinationQuestionedImages.map((img, idx) => (
                        <div key={idx} className="relative group rounded-xl overflow-hidden glass-card p-2">
                          <img src={img} alt={`Inclinación Cuestionado ${idx + 1}`} className="w-full h-48 md:h-64 object-contain rounded-lg" />
                          <button 
                            onClick={() => removeImage(idx, setInclinationQuestionedImages)}
                            className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity shadow-lg"
                            title="Eliminar imagen"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                          <div className="p-2 text-center text-xs text-slate-600 font-mono font-bold">FIGURA INC-C-{idx + 1}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-red-400 py-12 italic border border-red-100/50 rounded-xl bg-red-50/20 text-sm md:text-base">
                      Visualización de imágenes del documento cuestionado (Inclinación)
                    </div>
                  )}
                </div>
              </div>

              {/* 3. DOCUMENTO INDUBITABLE - INCLINACIÓN */}
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
                      Subir Foto (Indubitable)
                      <input 
                        type="file" 
                        multiple 
                        accept="image/*" 
                        onChange={(e) => handleImageUpload(e, setInclinationUndisputedImages)}
                        className="hidden" 
                      />
                    </label>
                  </div>

                  {inclinationUndisputedImages.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {inclinationUndisputedImages.map((img, idx) => (
                        <div key={idx} className="relative group rounded-xl overflow-hidden glass-card p-2">
                          <img src={img} alt={`Inclinación Indubitable ${idx + 1}`} className="w-full h-48 md:h-64 object-contain rounded-lg" />
                          <button 
                            onClick={() => removeImage(idx, setInclinationUndisputedImages)}
                            className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity shadow-lg"
                            title="Eliminar imagen"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                          <div className="p-2 text-center text-xs text-slate-600 font-mono font-bold">FIGURA INC-I-{idx + 1}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-green-400 py-12 italic border border-green-100/50 rounded-xl bg-green-50/20 text-sm md:text-base">
                       Visualización de imágenes del documento indubitable (Inclinación)
                    </div>
                  )}
                </div>
              </div>

              {/* 4. Descripción Manual Variable - INCLINACIÓN */}
              <div className="p-4 md:p-8 bg-white/20 border-b border-slate-200/50 backdrop-blur-sm">
                <h4 className="text-lg font-bold text-slate-800 uppercase mb-2">
                  Análisis Específico (Variable)
                </h4>
                <p className="text-sm text-slate-600 mb-4">
                  Describa aquí lo que se aprecia en el dictamen para este asunto específico referente a la INCLINACIÓN.
                </p>
                <textarea
                  value={inclinationAnalysisText}
                  onChange={(e) => setInclinationAnalysisText(e.target.value)}
                  className="w-full h-48 md:h-64 p-4 rounded-xl glass-input border border-white/50 focus:ring-2 focus:ring-blue-500/50 outline-none font-serif text-base md:text-lg leading-relaxed shadow-inner"
                  placeholder="Ingrese el análisis detallado de la inclinación, paralelismo grammático y micro-inclinación observada..."
                ></textarea>
              </div>

               {/* 5. CONCLUSIÓN (Dinámica INCLINACIÓN) */}
              <div className="p-4 md:p-8">
                 {getInclinationConclusionContent()}
              </div>
            </div>

          </div>

          {/* --------------------------------------------------------------------------------------- */}
          {/* SUB-APARTADO 3: DESENVOLVIMIENTO ESCRITURAL */}
          {/* --------------------------------------------------------------------------------------- */}
          <div className="mt-8 md:mt-12">
            <div className="glass-card bg-white/40 p-6 rounded-t-2xl border-b-0">
               <h3 className="text-lg md:text-xl font-bold uppercase text-slate-800 tracking-wide">
                 DESENVOLVIMIENTO ESCRITURAL
               </h3>
            </div>
            
            <div className="glass-panel rounded-b-2xl border-t-0 p-0 overflow-hidden">
              {/* 1. Parte Fija: DESENVOLVIMIENTO ESCRITURAL */}
              <div className="p-4 md:p-8 prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed font-serif text-base md:text-lg border-b border-slate-200/50">
                <p>
                  El Análisis Estructural Particular o del Gesto Gráfico es la fase más profunda y determinante de la grafoscopía forense. Mientras que el análisis general observa la "fachada" de la escritura, esta técnica se adentra en las "huellas digitales del grafismo": aquellos hábitos subconscientes, automáticos e invisibles para el ojo inexperto que individualizan a un autor de manera única.
                </p>

                <p>
                  El gesto gráfico (también llamado idiotismo, habitualismo o gesto tipo) es una constante escritural que se aparta del modelo caligráfico aprendido para adquirir una impronta personalísima. La técnica consiste en el método analítico: descomponer la firma (un todo) en sus partes constituyentes para aislar estas peculiaridades, verificando su repetición constante en el material indubitable para luego cotejarlas con la muestra cuestionada. Para que un rasgo sea considerado un "gesto gráfico" con valor identificatorio, debe cumplir con requisitos estrictos:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Origen Subconsciente y Automático:</strong> Son movimientos que el cerebro ejecuta sin intervención de la voluntad, lo que los hace casi imposibles de omitir por el titular o de imitar por un falsificador.</li>
                  <li><strong>Constancia:</strong> El rasgo debe aparecer en la mayoría de las muestras (entre el 90% y 100% de las veces) para ser considerado una constante del autor.</li>
                  <li><strong>Invisibilidad para el neófito:</strong> Son detalles tan sutiles (como la forma de un punto de ataque o un cambio de presión mínimo) que pasan desapercibidos para quien intenta falsificar la firma.</li>
                </ul>
              </div>

              {/* 2. DOCUMENTO CUESTIONADO - DESENVOLVIMIENTO */}
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
                      Subir Foto (Cuestionado)
                      <input 
                        type="file" 
                        multiple 
                        accept="image/*" 
                        onChange={(e) => handleImageUpload(e, setDevelopmentQuestionedImages)}
                        className="hidden" 
                      />
                    </label>
                  </div>

                  {developmentQuestionedImages.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {developmentQuestionedImages.map((img, idx) => (
                        <div key={idx} className="relative group rounded-xl overflow-hidden glass-card p-2">
                          <img src={img} alt={`Desenvolvimiento Cuestionado ${idx + 1}`} className="w-full h-48 md:h-64 object-contain rounded-lg" />
                          <button 
                            onClick={() => removeImage(idx, setDevelopmentQuestionedImages)}
                            className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity shadow-lg"
                            title="Eliminar imagen"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                          <div className="p-2 text-center text-xs text-slate-600 font-mono font-bold">FIGURA DES-C-{idx + 1}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-red-400 py-12 italic border border-red-100/50 rounded-xl bg-red-50/20 text-sm md:text-base">
                      Visualización de imágenes del documento cuestionado (Desenvolvimiento)
                    </div>
                  )}
                </div>
              </div>

              {/* 3. DOCUMENTO INDUBITABLE - DESENVOLVIMIENTO */}
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
                      Subir Foto (Indubitable)
                      <input 
                        type="file" 
                        multiple 
                        accept="image/*" 
                        onChange={(e) => handleImageUpload(e, setDevelopmentUndisputedImages)}
                        className="hidden" 
                      />
                    </label>
                  </div>

                  {developmentUndisputedImages.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {developmentUndisputedImages.map((img, idx) => (
                        <div key={idx} className="relative group rounded-xl overflow-hidden glass-card p-2">
                          <img src={img} alt={`Desenvolvimiento Indubitable ${idx + 1}`} className="w-full h-48 md:h-64 object-contain rounded-lg" />
                          <button 
                            onClick={() => removeImage(idx, setDevelopmentUndisputedImages)}
                            className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity shadow-lg"
                            title="Eliminar imagen"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                          <div className="p-2 text-center text-xs text-slate-600 font-mono font-bold">FIGURA DES-I-{idx + 1}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-green-400 py-12 italic border border-green-100/50 rounded-xl bg-green-50/20 text-sm md:text-base">
                       Visualización de imágenes del documento indubitable (Desenvolvimiento)
                    </div>
                  )}
                </div>
              </div>

              {/* 4. Descripción Manual Variable - DESENVOLVIMIENTO */}
              <div className="p-4 md:p-8 bg-white/20 border-b border-slate-200/50 backdrop-blur-sm">
                <h4 className="text-lg font-bold text-slate-800 uppercase mb-2">
                  Análisis Específico (Variable)
                </h4>
                <p className="text-sm text-slate-600 mb-4">
                  Describa aquí lo que se aprecia en el dictamen para este asunto específico referente al DESENVOLVIMIENTO ESCRITURAL.
                </p>
                <textarea
                  value={developmentAnalysisText}
                  onChange={(e) => setDevelopmentAnalysisText(e.target.value)}
                  className="w-full h-48 md:h-64 p-4 rounded-xl glass-input border border-white/50 focus:ring-2 focus:ring-blue-500/50 outline-none font-serif text-base md:text-lg leading-relaxed shadow-inner"
                  placeholder="Ingrese el análisis detallado del desenvolvimiento escritural, dinámica motriz y hábitos motores..."
                ></textarea>
              </div>

              {/* 5. CONCLUSIÓN (Dinámica DESENVOLVIMIENTO) */}
              <div className="p-4 md:p-8">
                 {getDevelopmentConclusionContent()}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroscopicAnalysisView;