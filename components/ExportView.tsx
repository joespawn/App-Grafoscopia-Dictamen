import React from 'react';
import { ReportData } from '../types';

interface ExportViewProps {
  data: ReportData;
}

const ExportView: React.FC<ExportViewProps> = ({ data }) => {
  const defendant = data.defendantName || "[DEMANDADO]";
  
  // Logic helpers for singular/plural document references
  const isPlural = (data.questionedDocCount || 1) > 1;
  const docRef = isPlural ? "los documentos" : "el documento";
  const docRefType = isPlural ? `${data.docDescription || 'Documento'}s` : (data.docDescription || 'Documento');
  const dateText = data.questionedDocDate ? `de fecha ${data.questionedDocDate}` : "";
  const signatureRef = isPlural ? "las firmas y/o rubricas" : "la firma y/o rubrica";

  const getHypothesisText = () => {
    switch(data.hypothesis) {
      case 'A': return `Se determina una correspondencia absoluta... la firma SÍ PROCEDE del puño y letra de ${defendant}.`;
      case 'B': return `Se identifican divergencias significativas... la firma NO PROCEDE del puño y letra de ${defendant}.`;
      case 'C': return `Se manifiesta una IMPOSIBILIDAD TÉCNICA para determinar la autoría.`;
      default: return "[Conclusión pendiente de selección de hipótesis]";
    }
  };

  const getMethodsContent = () => {
    const subjects = data.selectedSubjects || [];
    if (subjects.length === 0) return "<p>No se seleccionaron materias específicas.</p>";

    return subjects.map(subject => {
      let content = "";
      if (subject === 'Grafología') {
        content = `
          <p>La grafología, definida como el estudio del carácter o la personalidad a través de la escritura, se aplica en el ámbito judicial bajo la denominación de Grafología Forense o Judicial.</p>
          <p><b>1. Fundamentos Científicos:</b> Leyes de la Escritura (Sollange Pellat) y el Gesto Gráfico.</p>
          <p><b>2. Métodos de Análisis:</b> Método Analítico (Escuela Francesa), Nivel de Forma (Alemana), Simbólico-Espacial (Suiza).</p>
        `;
      } else if (subject === 'Grafoscopía') {
        content = `<p>Se aplica el Método Analítico-Descriptivo y Comparativo. Análisis Extrínseco (General) y Análisis Intrínseco (Particular de automatismos).</p>`;
      } else if (subject === 'Documentoscopía') {
        content = `<p>Metodología físico-comparativa e instrumental. Examen Físico no Destructivo (UV, IR) y Análisis de Tintas y Soportes.</p>`;
      } else if (subject === 'Grafometría') {
        content = `<p>Aplicación de mediciones métricas y estadísticas (índices métricos y medición angular).</p>`;
      } else if (subject === 'Dactiloscopia') {
        content = `
          <p>Se define como la disciplina de la criminalística que aplica métodos y técnicas al estudio físico y comparativo de las impresiones digitales para lograr la identificación física indubitable, categórica y fehaciente de una persona. A diferencia de la grafoscopía, que estudia la mutabilidad del gesto humano, la dactiloscopía se basa en la inalterabilidad, perennidad e inmutabilidad de los dibujos papilares.</p>
          <p><b>1. Fundamentos:</b> Identidad Matemática y Naturaleza Biométrica.</p>
          <p><b>2. Clasificación:</b> Sistemas Marginal, Nuclear y Basilar.</p>
          <p><b>3. Método Comparativo:</b> Análisis de Minucias, Líneas Blancas y Crestas Subsidiarias.</p>
          <p><b>4. Aplicación:</b> En casos donde la persona no sabe firmar, identificación de anónimos y detección de fraude.</p>
        `;
      } else if (subject === 'Fotografía Forense') {
        content = `
          <p>La Fotografía Forense no es meramente ilustrativa; es un método de fijación y demostración probatoria. Su función es perpetuar el indicio y revelar detalles invisibles al ojo humano mediante técnicas de macrofotografía y microfotografía.</p>
          <p>En este dictamen, la fotografía actúa como el "testigo objetivo" que permite al Juzgador visualizar lo que el perito observó a través del microscopio. Se emplean técnicas de iluminación especial (rasante, transmitida, IR, Ultravioleta) para evidenciar características como la presión efectiva y la estructura de la línea.</p>
        `;
      } else {
        content = `<p>Métodos estándar aplicables a ${subject}.</p>`;
      }
      
      return `<h4>Ø ${subject}</h4>${content}`;
    }).join('<br/>');
  };

  const getApplicableTechniquesContent = () => {
    return `
      <p>Las técnicas en las ciencias del grafismo y la documentoscopía se definen como las herramientas procedimentales y recursos tecnológicos mediante los cuales se ejecutan los métodos de análisis.</p>
      
      <h4>1. Técnicas de Señalamiento y Registro (Procedimentales)</h4>
      <ul>
        <li><b>Técnica Sinaléctica:</b> Uso de indicadores numéricos, flechas y círculos.</li>
        <li><b>Técnica de Investigación de Campo:</b> Examen in vivo en archivos públicos.</li>
        <li><b>Técnica de Capas:</b> Reconstrucción de sellos o textos ilegibles.</li>
      </ul>

      <h4>2. Técnicas de Examen Óptico e Instrumental</h4>
      <ul>
        <li><b>Examen Microscópico y Estereoscópico:</b> Para observar relieve, fibras y distribución de tinta.</li>
        <li><b>Técnicas de Iluminación Especial:</b> Luz Rasante (relieve), Transmitida (marcas de agua), UV (lavados químicos) e IR (tintas).</li>
      </ul>

      <h4>3. Técnicas de Análisis de la Presión y el Trazo</h4>
      <ul>
         <li>Eliminación de pigmentos con IR.</li>
         <li>Observación del reverso (efecto espejo).</li>
         <li>Filtrado en bajo relieve.</li>
      </ul>

      <h4>4. Técnica de Análisis Geométrico-Estructural</h4>
      <ul>
        <li><b>Caja de Escritura:</b> Tangentes a letras medias.</li>
        <li><b>Ejes de Inclinación:</b> Ángulos respecto a línea base.</li>
        <li><b>Curvatura:</b> Radios de giro.</li>
      </ul>
      
      <h4>5. Técnicas de Registro Fotográfico y Digital</h4>
      <ul>
        <li>Macrofotografía y Fotomicrografía.</li>
        <li>Estereofotografía (relieve 3D).</li>
        <li>Digitalización y Tratamiento de Imágenes.</li>
      </ul>
    `;
  };

  const getMorphologicalAnalysisContent = () => {
    return `
      <p>ESTUDIO TÉCNICO REALIZADO. En este capítulo se describe la aplicación práctica de los métodos y técnicas sobre el material cuestionado e indubitable.</p>
      
      <h4>I. Análisis del Material Indubitable</h4>
      <p>En cumplimiento con la técnica de investigación de campo, el suscrito se constituyó en las instalaciones de este H. <b>${data.court || '[JUZGADO]'}</b> con fecha <b>${data.sampleDate || '[FECHA TOMA MUESTRA]'}</b>, procediendo a realizar un examen minucioso... Para ello, se aplicaron las siguientes técnicas:</p>
      <ul>
        <li>Examen del Soporte y Sustrato.</li>
        <li>Análisis Óptico y Lumínico (UV e IR).</li>
        <li>Detección de Alteraciones (Luz rasante).</li>
      </ul>
      <p>Además, se realizó el Análisis Grafocinético (Dinámica del Trazo, Génesis Gráfica) y el Análisis de la Presión Efectiva (Eliminación de pigmentos, Observación del Reverso, Evaluación de Tensión).</p>

      <h4>II. Análisis del Material Dubitable</h4>
      <p>Bajo la misma metodología científica aplicada al material de cotejo, se realizó el estudio integral sobre <b>${docRef} ${dateText}</b>, iniciando con un examen exhaustivo ${isPlural ? 'de los mismos' : 'del mismo'}...</p>

      <h4>III. Confrontación o Cotejo</h4>
      <p>Una vez establecidas las constantes escriturales, se ejecutó el Método de Comparación Formal, realizando la confrontación sistemática...</p>

      <h4>IV. Aclaración Metodológica sobre la Muestra</h4>
      <p>Se hace constar que el presente análisis incluyó el estudio de todos y cada uno de los grafismos... los términos "firmas indubitables" y "firma dubitable" se refieren a la totalidad de los elementos.</p>

      <h4>V. Criterios de Selección y Descripción de Hallazgos</h4>
      <p>Al efectuar la descripción de los resultados derivados del cotejo, se ha procedido a realizar una jerarquización de las observaciones, resaltando únicamente aquellos puntos de convergencia y divergencia que poseen una mayor fuerza indiciaria.</p>
    `;
  };

  const getFullReportHTML = () => {
    // This constructs the full HTML document for the Word export
    return `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>Dictamen Pericial</title>
      <style>body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.5; }</style>
      </head><body>
      
      <!-- 1. PRESENTACION -->
      <p align="right">
        <b>C. ${data.court || '[JUZGADO]'}</b><br/>
        <b>P r e s e n t e.-</b><br/><br/>
        ${data.plaintiff || '[ACTOR]'} VS ${data.defendantName || '[DEMANDADO]'}<br/>
        ${data.trialType || '[TIPO DE JUICIO]'}<br/>
        EXPEDIENTE.- ${data.fileNumber || '[EXPEDIENTE]'}<br/>
        <b>PETITORIO. - DICTAMEN PERICIAL.</b>
      </p>
      <br/>
      <p align="justify">
        <b>${data.expertName || '[PERITO]'}</b>, mexicano, mayor de edad, Licenciado en Derecho, Perito Técnico en Criminalística...
        Ante ustedes con el debido respeto comparezco y expongo:
      </p>
      <p align="justify">
        Que una vez que aceptado y protestado el fiel desempeño, revise minuciosamente el expediente principal radicado bajo la estadística No. <b>${data.fileNumber || '[EXPEDIENTE]'}</b>...
        en contra de <b>${data.defendantName || '[DEMANDADO]'}</b>... en las Instalaciones de este H. <b>${data.court || '[JUZGADO]'}</b>...
      </p>

      <br/><hr/><br/>

      <!-- 2. MATERIAS -->
      <h3>2. MATERIAS A DICTAMINAR</h3>
      <ul>
        ${(data.selectedSubjects || []).map(s => `<li>${s}</li>`).join('')}
      </ul>

      <br/>

      <!-- 3. PLANTEAMIENTO -->
      <h3>3. PLANTEAMIENTO DEL PROBLEMA</h3>
      <p align="justify">
        La razón primordial del presente dictamen lo es determinar mediante el estudio técnico si ${signatureRef} que obran en ${docRef} Tipo <b>${docRefType}</b> ${dateText}, atribuida a <b>${data.defendantName || '[DEMANDADO]'}</b>...
      </p>

      <br/>

      <!-- 4. INSTRUMENTAL -->
      <h3>4. INSTRUMENTAL Y EQUIPO</h3>
      <p>Se utilizó equipo óptico de alta resolución, fuentes de luz UV e IR, escáneres y software especializado.</p>

      <br/>

      <!-- 5. METODOLOGIA -->
      <h3>5. METODOLOGÍA</h3>
      <p align="justify">Consiste en el estudio del Método... basado en el Método Científico Experimental.</p>
      <h4>5.1. Fundamento Epistemológico</h4>
      <p align="justify">Se adopta un enfoque falsacionista (Popperiano)...</p>
      <h4>5.2. Etapas del Proceso</h4>
      <p>
        1. Observación Sistemática.<br/>
        2. Planteamiento de Hipótesis.<br/>
        3. Experimentación y Análisis.<br/>
        4. Verificación.<br/>
        5. Conclusión.
      </p>

      <br/>

      <!-- 6. METODOS ESPECIFICOS -->
      <h3>6. MÉTODO Y TÉCNICAS APLICADAS</h3>
      ${getMethodsContent()}

      <br/>

      <!-- 7. TECNICAS APLICABLES -->
      <h3>7. TÉCNICAS APLICABLES AL CASO</h3>
      ${getApplicableTechniquesContent()}

      <br/>

      <!-- 8. ANALISIS MORFOLOGICO (NUEVO) -->
      <h3>8. ANÁLISIS MORFOLÓGICO DE LA FIRMA</h3>
      ${getMorphologicalAnalysisContent()}

      <br/>

      <!-- 9. INTERROGATORIO (RENUMERADO) -->
      <h3>9. INTERROGATORIO PRESENTADO POR LAS PARTES</h3>
      <h4>Parte Actora:</h4>
      <ol>${(data.plaintiffQuestions || []).map(q => `<li>${q}</li>`).join('')}</ol>
      <h4>Parte Demandada:</h4>
      <ol>${(data.defendantQuestions || []).map(q => `<li>${q}</li>`).join('')}</ol>

      <br/>
      <p align="center"><i>[... Desarrollo Técnico: Des. Escritural, Análisis Integral, Documentoscopía ...]</i></p>
      <br/>

      <!-- CONCLUSIONES (SIMPLIFICADO PARA EXPORT) -->
      <h3>CONCLUSIONES GENERALES</h3>
      <p align="justify">${getHypothesisText()}</p>
      
      <br/><br/>
      <p align="center">___________________________________<br/><b>${data.expertName || '[PERITO]'}</b><br/>Perito en la Materia</p>

      </body></html>
    `;
  };

  const handleDownloadWord = () => {
    const html = getFullReportHTML();
    const blob = new Blob(['\ufeff', html], {
      type: 'application/msword'
    });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = `Dictamen_${data.fileNumber || 'Expediente'}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col h-full bg-slate-100 overflow-y-auto">
      <div className="max-w-4xl mx-auto w-full p-12 space-y-8 bg-white shadow-xl min-h-full my-8 print:m-0 print:shadow-none print:w-full print:max-w-none">
        
        {/* Controls - Hidden when Printing */}
        <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center gap-4 mb-8 print:hidden">
          <div>
            <h2 className="text-2xl font-bold">Exportar Dictamen</h2>
            <p className="text-blue-200 text-sm">Genere el documento final para firma o edición.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => window.print()}
              className="flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition shadow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
              </svg>
              Imprimir / PDF
            </button>
            <button 
              onClick={handleDownloadWord}
              className="flex items-center bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-600 transition shadow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              Descargar Editable (Docs)
            </button>
          </div>
        </div>

        {/* PRINT PREVIEW CONTAINER */}
        <div id="print-container" className="font-serif text-slate-900 leading-relaxed text-justify space-y-12">
          
          {/* 1. Presentacion */}
           <section className="mb-12">
            <div className="text-right uppercase font-bold text-sm tracking-wide mb-8">
              <p>C. {data.court || '[JUZGADO]'}.</p>
              <p>P r e s e n t e.-</p>
              <div className="mt-4">
                <p>{data.plaintiff || '[ACTOR]'}</p>
                <p>VS</p>
                <p>{data.defendantName || '[DEMANDADO]'}</p>
                <p>{data.trialType || '[TIPO DE JUICIO]'}</p>
                <p>EXPEDIENTE.- {data.fileNumber || '[EXPEDIENTE]'}</p>
                <p className="mt-2">PETITORIO. - DICTAMEN PERICIAL.</p>
              </div>
            </div>
            <p className="indent-12">
              <strong>{data.expertName || '[PERITO]'}</strong>, mexicano, mayor de edad, Licenciado en Derecho, Perito Técnico en Criminalística, Perito Técnico en Grafoscopía, Documentoscopía y Dactiloscopia... Ante ustedes con el debido respeto comparezco y expongo:
            </p>
            <p className="indent-12 mt-4">
              Que una vez que aceptado y protestado el fiel desempeño, revise minuciosamente el expediente principal radicado bajo la estadística No. <strong>{data.fileNumber}</strong>, formado por motivo del Juicio <strong>{data.trialType}</strong>, promovido por <strong>{data.plaintiff}</strong>, en contra de <strong>{data.defendantName}</strong>, en especial el documento cuestionado... en las Instalaciones de este H. <strong>{data.court}</strong>...
            </p>
          </section>

          {/* 2. Materias */}
          <section>
            <h3 className="font-bold text-lg uppercase mb-4 border-b border-black">2. Materias a Dictaminar</h3>
            <ul className="list-disc pl-10">
              {data.selectedSubjects?.map(s => <li key={s}>{s}</li>)}
            </ul>
          </section>

          {/* 3. Planteamiento */}
          <section>
            <h3 className="font-bold text-lg uppercase mb-4 border-b border-black">3. Planteamiento del Problema</h3>
            <p>
              La razón primordial del presente dictamen lo es determinar mediante el estudio técnico si ${signatureRef} que obran en ${docRef} Tipo <strong>{docRefType}</strong> ${dateText}, atribuida a <strong>{data.defendantName}</strong>...
            </p>
          </section>

           {/* 4. Instrumental */}
          <section>
            <h3 className="font-bold text-lg uppercase mb-4 border-b border-black">4. Instrumental y Equipo</h3>
            <p>Se utilizaron instrumentos ópticos de precisión, fuentes de iluminación multiespectral (UV, IR), equipo de cómputo y software especializado para el análisis forense.</p>
          </section>

          {/* 5. Metodología */}
          <section>
            <h3 className="font-bold text-lg uppercase mb-4 border-b border-black">5. Metodología</h3>
            <p>Se basa en el Método Científico Experimental... H0: La firma NO proviene de {defendant} vs H1: La firma SÍ proviene de {defendant}.</p>
          </section>

          {/* 6. Metodos Especificos */}
          <section>
            <h3 className="font-bold text-lg uppercase mb-4 border-b border-black">6. Método y Técnicas Aplicadas</h3>
            {data.selectedSubjects?.map(s => (
               <div key={s} className="mb-4">
                 <p className="font-bold">Ø {s}.</p>
                 <p className="text-sm italic pl-4">
                   (Ver desarrollo completo en el documento digital o PDF generado...)
                 </p>
               </div>
            ))}
          </section>

          {/* 7. Tecnicas Aplicables */}
          <section>
             <h3 className="font-bold text-lg uppercase mb-4 border-b border-black">7. Técnicas Aplicables al Caso</h3>
             <div dangerouslySetInnerHTML={{ __html: getApplicableTechniquesContent() }} />
          </section>

          {/* 8. Analisis Morfologico */}
          <section>
             <h3 className="font-bold text-lg uppercase mb-4 border-b border-black">8. Análisis Morfológico de la Firma</h3>
             <div dangerouslySetInnerHTML={{ __html: getMorphologicalAnalysisContent() }} />
          </section>

           {/* 9. Interrogatorio */}
           <section>
            <h3 className="font-bold text-lg uppercase mb-4 border-b border-black">9. Interrogatorio de las Partes</h3>
            <div className="mb-4">
              <h4 className="font-bold uppercase text-sm">Parte Actora:</h4>
              <ol className="list-decimal pl-10">
                 {(data.plaintiffQuestions || []).map((q, i) => <li key={i}>{q}</li>)}
              </ol>
            </div>
            <div>
              <h4 className="font-bold uppercase text-sm">Parte Demandada:</h4>
               <ol className="list-decimal pl-10">
                 {(data.defendantQuestions || []).map((q, i) => <li key={i}>{q}</li>)}
              </ol>
            </div>
          </section>
          
          <div className="py-8 text-center text-slate-400 italic print:hidden">
            [... Se omiten las secciones intermedias de análisis visual en esta vista previa ...]
          </div>

          {/* Final Conclusions */}
          <section className="mt-12">
            <h3 className="font-bold text-lg uppercase mb-4 border-b border-black">Conclusiones Finales</h3>
            <p>{getHypothesisText()}</p>
          </section>

          <div className="mt-24 text-center">
            <div className="inline-block border-t border-black px-12 pt-2">
              <p className="font-bold">{data.expertName || '[PERITO]'}</p>
              <p>Perito en la Materia</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ExportView;