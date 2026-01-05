import React, { useState } from 'react';
import { ReportData } from '../types';

interface DocumentoscopyViewProps {
  data: ReportData;
}

const DocumentoscopyView: React.FC<DocumentoscopyViewProps> = ({ data }) => {
  const [questionedImages, setQuestionedImages] = useState<string[]>([]);
  const [undisputedImages, setUndisputedImages] = useState<string[]>([]);
  const [dictamen, setDictamen] = useState('');

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

  const getConclusionText = () => {
    switch (data.hypothesis) {
      case 'A':
        return (
          <>
            <strong className="block text-lg mb-2 text-green-800">Opción 1: Correspondencia de Autenticidad (Documento Íntegro)</strong>
            Como resultado del Análisis en Documentoscopía, se ha determinado que el documento cuestionado no presenta signos de alteración material por supresión, adición o sustitución, conservando la integridad de su soporte, tintas y elementos anexos. Tras el cotejo técnico de los caracteres identificadores, se verificó una total convergencia en los automatismos y gestos-tipo del grafismo analizado, por lo que se concluye técnicamente que la firma y/o escritura en estudio <strong>SÍ PROCEDE DEL PUÑO Y LETRA</strong> de la persona a quien se le atribuye <strong>{defendantName}</strong>, por lo que se considera que si es autentico el documento cuestionado.
          </>
        );
      case 'B':
        return (
          <>
            <strong className="block text-lg mb-2 text-red-800">Opción 2: Determinación de Falsedad (Documento Alterado o Inauténtico)</strong>
            Derivado del Análisis en Documentoscopía, se han identificado discrepancias insalvables y evidencias de manipulación material en el soporte, consistentes en [especificar según el caso: borrados, lavados químicos o interpolación de caracteres], lo que vulnera la integridad y eficacia probatoria del espécimen. Dada la ausencia de las constantes gráficas habituales y la presencia de signos de falsificación durante la ejecución, se establece que el grafismo cuestionado <strong>NO PROCEDE DEL PUÑO Y LETRA</strong> de la persona a quien se le atribuye <strong>{defendantName}</strong>, tratándose de una pieza documental carente de autenticidad.
          </>
        );
      case 'C':
        return (
          <>
            <strong className="block text-lg mb-2 text-amber-800">Opción 3: Imposibilidad Técnica o Material</strong>
            Atendiendo a las limitaciones materiales del espécimen remitido para estudio (tales como la falta de idoneidad en las muestras de cotejo o la ausencia del documento original), se manifiesta una <strong>IMPOSIBILIDAD TÉCNICA</strong> para emitir un juicio categórico de autenticidad. Al no ser factible realizar el examen instrumental exhaustivo para descartar alteraciones o verificar la génesis gráfica del trazo, este perito se encuentra impedido para determinar si el grafismo en estudio procede o no del puño y letra de la persona referida <strong>{defendantName}</strong>.
          </>
        );
      default:
        return (
          <span className="text-slate-400 italic">
            Por favor, seleccione una hipótesis en el apartado "0. Datos Generales" para generar la conclusión automáticamente.
          </span>
        );
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full p-8 space-y-8 bg-white shadow-sm min-h-full">
        
        {/* Header Section */}
        <header className="border-b-2 border-slate-800 pb-4">
          <h2 className="text-3xl font-serif font-bold text-slate-900 uppercase">
            17. ANÁLISIS DOCUMENTOSCOPIA
          </h2>
        </header>

        {/* Fixed Technical Text */}
        <section className="prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed space-y-4">
          <p>
            La Documentoscopía es la disciplina auxiliar de la criminalística que se encarga del estudio integral de los documentos para determinar su autenticidad o falsedad, así como para identificar posibles alteraciones o modificaciones. Etimológicamente, proviene de las raíces latinas doceo-docui-ductum, que significan "enseñar, informar o probar", definiéndose técnicamente como el estudio de cualquier cuerpo físico capaz de ser alterado o manipulado.
          </p>

          <h4 className="font-bold text-lg text-slate-900 mt-6">1. Elementos Constitutivos del Documento</h4>
          <p>Para que el perito analice un documento, debe considerar cuatro elementos fundamentales:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>El Soporte:</strong> Generalmente papel, compuesto por fibras de celulosa.</li>
            <li><strong>Elementos Anexos:</strong> Medidas de seguridad como fibras ópticas, marcas de agua, hilos de seguridad y tintas especiales.</li>
            <li><strong>El Texto:</strong> Manuscrito, mecanografiado o impreso.</li>
            <li><strong>La Firma:</strong> El elemento que vincula el contenido con el autor.</li>
          </ul>

          <h4 className="font-bold text-lg text-slate-900 mt-6">2. La Técnica: ¿Cómo se analizan las alteraciones?</h4>
          <p>La técnica documentoscópica se divide en dos fases principales: la inspección preliminar (organoléptica) y el examen sistemático instrumental.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Detección de Supresiones (Borrados y Lavados):</strong> El falsificador intenta eliminar texto mediante métodos mecánicos (raspado) o químicos (lavado). El perito utiliza luz ultravioleta, para revelar manchas de reacción química invisibles a luz normal y luz rasante para detectar el erizamiento de las fibras del papel causado por la abrasión.</li>
            <li><strong>Detección de Adiciones (Retoques e Interpolaciones):</strong> Se busca texto agregado posteriormente. Aquí se emplea el Análisis Multiespectral (VSC); al aplicar radiación infrarroja (IR), se pueden diferenciar tintas que a simple vista parecen iguales pero tienen distinta composición química, haciendo que una sea transparente y la otra permanezca visible.</li>
            <li><strong>Examen de Indentaciones:</strong> Para leer lo que se escribió en hojas superiores (escritura latente), se utiliza el ESDA (Aparato de Detección Electrostática), que revela surcos invisibles mediante carga eléctrica y polvos reveladores.</li>
          </ul>

          <div className="bg-slate-50 p-4 border-l-4 border-slate-400 italic my-4">
            <p className="mb-2">El documento no solo debe contener un pensamiento, sino tener relevancia jurídica para ser objeto de este estudio.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Falsedad Material vs. Ideológica:</strong> La documentoscopía se centra en la falsedad material (alteración física del documento), mientras que la ideológica (contenido falso en documento auténtico) suele ser de difícil comprobación técnica salvo por el análisis de contradicciones en el texto.</li>
              <li><strong>Integridad del Soporte:</strong> Cualquier manipulación afecta el "brillo" y la "opacidad" del papel, elementos que el perito mide con precisión.</li>
            </ul>
          </div>
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
                    <div className="p-2 text-center text-xs text-slate-500 font-mono">FIGURA DOC-C-{idx + 1}</div>
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
                    <div className="p-2 text-center text-xs text-slate-500 font-mono">FIGURA DOC-I-{idx + 1}</div>
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
        <section className="space-y-4">
          <h3 className="text-xl font-bold text-slate-800 uppercase">
            Dictamen / Observaciones Específicas
          </h3>
          <p className="text-sm text-slate-500">
            Describa de forma manual lo que se aprecia en el estudio documentoscópico.
          </p>
          <textarea
            value={dictamen}
            onChange={(e) => setDictamen(e.target.value)}
            className="w-full h-64 p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-serif text-lg leading-relaxed shadow-inner"
            placeholder="Escriba aquí su análisis sobre alteraciones, tipo de papel, tintas, borrados mecánicos o químicos..."
          ></textarea>
        </section>

        {/* Dynamic Conclusion Section */}
        <section className="bg-slate-50 p-8 rounded-lg border-2 border-slate-200 mt-8">
          <h3 className="text-2xl font-bold text-slate-900 uppercase border-b border-slate-300 pb-4 mb-6">
            CONCLUSIÓN
          </h3>
          
          <div className="prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed">
             {getConclusionText()}
          </div>
        </section>

      </div>
    </div>
  );
};

export default DocumentoscopyView;