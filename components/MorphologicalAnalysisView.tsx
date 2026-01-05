import React from 'react';
import { ReportData } from '../types';

interface MorphologicalAnalysisViewProps {
  data: ReportData;
}

const MorphologicalAnalysisView: React.FC<MorphologicalAnalysisViewProps> = ({ data }) => {
  const court = data.court || "[JUZGADO]";
  const sampleDate = data.sampleDate || "[FECHA TOMA MUESTRA]";
  
  // Logic for singular/plural
  const isPlural = (data.questionedDocCount || 1) > 1;
  const docRef = isPlural ? "los documentos cuestionados" : "el documento cuestionado";
  const dateText = data.questionedDocDate ? `de fecha ${data.questionedDocDate}` : "";

  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full p-8 space-y-8 bg-white shadow-sm min-h-full">
        
        {/* Header Section */}
        <header className="border-b-2 border-slate-800 pb-4">
          <h2 className="text-3xl font-serif font-bold text-slate-900 uppercase">
            8. ANÁLISIS MORFOLÓGICO DE LA FIRMA
          </h2>
          <p className="text-lg font-serif italic text-slate-600 mt-2">
            ESTUDIO TÉCNICO REALIZADO
          </p>
        </header>

        {/* Content Section */}
        <section className="prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed font-serif text-lg">
          
          <p>
             En este capítulo se describe la aplicación práctica de los métodos y técnicas sobre el material cuestionado e indubitable. Se presenta el análisis detallado, desglosando las observaciones macroscópicas y microscópicas.
          </p>

          <h3 className="font-bold text-xl uppercase mt-6 mb-3">I. Análisis del Material Indubitable</h3>
          <p>
            En cumplimiento con la técnica de investigación de campo, el suscrito se constituyó en las instalaciones de este H. <strong>{court}</strong> con fecha <strong>{sampleDate}</strong>, procediendo a realizar un examen minucioso, sistemático y exhaustivo de los documentos que contienen las firmas y/o rúbricas señaladas como indubitables. Este examen tiene como objetivo verificar la autenticidad del sustrato material y la integridad del mensaje. Para ello, se aplicaron las siguientes técnicas:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Examen del Soporte y Sustrato:</strong> Se analizó la homogeneidad del papel, su brillo superficial y la integridad de las fibras para descartar borrados mecánicos (raspados) o lavados químicos.</li>
            <li><strong>Análisis Óptico y Lumínico:</strong> Se utilizó luz ultravioleta (Lámpara de Wood) para detectar fluorescencias anormales de reactivos erradicadores y radiación infrarroja (IR) para verificar la correspondencia entre los compuestos de las tintas.</li>
            <li><strong>Detección de Alteraciones:</strong> Mediante luz rasante o tangencial, se examinó la superficie en busca de escrituras latentes o añadidos posteriores (interpolaciones) que pudieran comprometer la cronología de los trazos.</li>
          </ul>

          <p className="mt-4">
            Además de lo anterior, el Estudio inicial se centró en la ejecución de un análisis intrínseco para identificar el Gesto Gráfico (automatismos o idiotismos), definido como el conjunto de particularidades sutiles, constantes y de origen subconsciente que individualizan el grafismo de un autor y permiten determinar de manera fehaciente su origen gráfico.
          </p>
          <p className="mt-4">
            Obviamente se realizó el Análisis Grafocinético de las Firmas (Prioridad Metodológica), Superada la fase preliminar, se llevó a cabo el estudio medular centrado en el grafocinetismo, considerado el capítulo más científico de la grafoscopía moderna. A diferencia de un estudio morfológico superficial, este análisis permitió reconstruir la "historia del grama" y los movimientos motores subconscientes del autor.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Dinámica del Trazo:</strong> Se estudió la melodía cinética de las firmas, evaluando la velocidad, el ritmo y la tensión de los trazos para determinar si la ejecución fue espontánea y fluida (característica de firmas auténticas) o lenta y vacilante (indicio de falsificación).</li>
            <li><strong>Génesis Gráfica:</strong> Se identificó el ductus o el camino recorrido por el útil inscriptor, analizando el orden y dirección de los movimientos flexores y extensores que conforman los idiotismos o gestos-tipo del firmante.</li>
          </ul>
          
          <p className="mt-4">
            También, se realizó el Análisis de la Presión Efectiva, para esto se otorgó especial relevancia al estudio de la presión efectiva, definida como la fuerza muscular que el escribiente imprime sobre el papel, dejando un surco tridimensional que es imposible de imitar o controlar voluntariamente. Para su puesta en evidencia, se ejecutaron las siguientes técnicas instrumentales:
          </p>
          <ol className="list-decimal pl-6 mt-4 space-y-2">
            <li><strong>Eliminación de pigmentos mediante IR:</strong> Se utilizó un equipo de análisis multiespectral para "apagar" el color de la tinta y observar nítidamente la profundidad del cauce de incisión.</li>
            <li><strong>Observación del Reverso con Luz Oblicua:</strong> Se analizó el relieve en la cara posterior del documento, aplicando un "efecto espejo" digital para visualizar los cambios de carga y descarga de energía del puño gráfico en su sentido original.</li>
            <li><strong>Evaluación de la Tensión de Línea:</strong> Se determinó la firmeza de los trazos, identificando los sectores de apoyo (plenos) y los sectores de perfilamiento (finos), los cuales constituyen el ritmo de la presión del suscriptor.</li>
          </ol>

          <h3 className="font-bold text-xl uppercase mt-8 mb-3">II. Análisis del Material Dubitable</h3>
          <p>
            Bajo la misma metodología científica aplicada al material de cotejo, se realizó el estudio integral sobre <strong>{docRef} {dateText}</strong>, iniciando con un examen exhaustivo {isPlural ? 'de los mismos' : 'del mismo'} para garantizar la ausencia de alteraciones físico-químicas en el soporte. Acto seguido, se analizó la firma desde una perspectiva morfológica, grafocinética y de presión efectiva, evaluando de forma conjunta la estructura de los trazos, la velocidad y el ritmo de ejecución, así como la fuerza muscular impresa en el papel mediante análisis multiespectral. Este procedimiento permitió identificar los automatismos y el gesto gráfico de la pieza cuestionada, estableciendo los elementos técnicos necesarios para el posterior cotejo comparativo con los patrones de autenticidad previamente determinados.
          </p>

          <h3 className="font-bold text-xl uppercase mt-8 mb-3">III. Confrontación o Cotejo</h3>
          <p>
            Una vez establecidas las constantes escriturales, se ejecutó el Método de Comparación Formal, realizando la confrontación sistemática entre las cualidades del material indubitable y el dubitable. Este proceso permitió valorar cualitativa y cuantitativamente si los automatismos identificados en el puño gráfico del autor se reproducen o divergen en la firma cuestionada, sirviendo de base técnica para el juicio de identidad o uniprocedencia.
          </p>

          <h3 className="font-bold text-xl uppercase mt-8 mb-3">IV. Aclaración Metodológica sobre la Muestra</h3>
          <p>
            Se hace constar que el presente análisis incluyó el estudio de todos y cada uno de los grafismos, tanto de forma individual como en su conjunto, lo que permitió determinar el Patrón de Variaciones Posibles (PVP) del autor. Por lo tanto, para efectos de claridad en este dictamen, los términos "firmas indubitables" y "firma dubitable" se refieren a la totalidad de los elementos que integran sus respectivos grupos de control y cuestionamiento, garantizando que el cotejo y las conclusiones vertidas correspondan a la valoración integral de la masa gráfica analizada.
          </p>

          <h3 className="font-bold text-xl uppercase mt-8 mb-3">V. Criterios de Selección y Descripción de Hallazgos</h3>
          <p>
            Al efectuar la descripción de los resultados derivados del cotejo, se ha procedido a realizar una jerarquización de las observaciones, resaltando únicamente aquellos puntos de convergencia y divergencia que poseen una mayor fuerza indiciaria y valor identificatorio. Se otorga especial relevancia al Gesto Gráfico (idiotismos o automatismos), definido como el conjunto de micro-características y modismos subconscientes que, al apartarse del modelo caligráfico aprendido, individualizan la ejecución y resultan casi imposibles de imitar por un tercero o de eliminar voluntariamente por el titular.
          </p>
          <p className="mt-4">
            No obstante, se hace constar que se llevó a cabo un análisis intrínseco, minucioso y exhaustivo de la totalidad de los documentos y firmas sometidos a estudio, ya que el examen de muestras abundantes y variadas es la única vía científica para determinar con exactitud el Patrón de Variaciones Posibles (PVP) y la personalidad escritural del suscriptor. Finalmente, bajo un principio de concisión y claridad pericial, se han omitido descripciones sobreabundantes de caracteres genéricos o de nulo valor signalético, centrando la exposición exclusivamente en las constantes gráficas que fundamentan de manera objetiva la determinación técnica del presente dictamen.
          </p>

        </section>
      </div>
    </div>
  );
};

export default MorphologicalAnalysisView;