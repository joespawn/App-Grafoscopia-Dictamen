import React from 'react';
import { ReportData } from '../types';

interface MethodsViewProps {
  data: ReportData;
}

const MethodsView: React.FC<MethodsViewProps> = ({ data }) => {
  const selectedSubjects = data.selectedSubjects || [];

  // Define content for each subject
  const getContentForSubject = (subject: string) => {
    switch (subject) {
      case 'Grafología':
        return (
          <>
            <p className="mb-4">
              La grafología, definida como el estudio del carácter o la personalidad a través de la escritura, se aplica en el ámbito judicial bajo la denominación de Grafología Forense o Judicial. Esta disciplina busca resolver problemas relacionados con la expresión gráfica dentro de un proceso legal, utilizando el análisis de los automatismos y gestos para determinar la procedencia de una firma.
            </p>
            <p className="mb-4">
              A continuación, se describen los métodos y fundamentos de la grafología orientados al análisis de autoría, según las fuentes:
            </p>
            
            <h4 className="font-bold text-slate-900 mt-6 mb-2">1. Fundamentos Científicos y Teóricos</h4>
            <p className="mb-2">La grafología forense se apoya en principios neurofisiológicos que establecen que la escritura emana del cerebro y no simplemente de la mano.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Leyes de la Escritura (Sollange Pellat):</strong> Son la base fundamental. Destacan la Ley del impulso cerebral (el cerebro rige el gesto), la Ley de la acción del "yo" (el subconsciente domina el trazo conforme avanza el escrito) y la Ley de la marca del esfuerzo (no se puede modificar la letra natural sin dejar rastros de lucha contra el subconsciente).</li>
              <li><strong>El Gesto Gráfico o "Idiotismo":</strong> Es la impronta personal e invisible que se repite constantemente en los escritos de una persona. Estos rasgos son de difícil imitación y casi imposibles de eliminar, lo que los convierte en la clave para identificar al autor real incluso frente a intentos de disfraz o "autofalsificación".</li>
            </ul>

            <h4 className="font-bold text-slate-900 mt-6 mb-2">2. Métodos de Análisis por Escuelas</h4>
            <p className="mb-2">Las fuentes detallan diversos enfoques metodológicos desarrollados por las principales escuelas grafológicas:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Método Analítico (Escuela Francesa - Michon y Crépieux-Jamin):</strong> Sistematiza el estudio dividiendo la escritura en géneros, especies y modos (como velocidad, presión, forma, dirección, etc.). Se basa en la teoría de las resultantes, donde la combinación de signos revela facetas específicas de la personalidad que se traducen en rasgos gráficos únicos.</li>
              <li><strong>Método de Nivel de Forma (Escuela Alemana - Ludwig Klages):</strong> Analiza la "vida" del trazo a través del Formniveau (nivel de forma) y el ritmo. Una escritura con un alto nivel de forma es difícil de imitar por alguien con menor destreza, fundamentando la identificación en la capacidad o destreza escritural del autor.</li>
              <li><strong>Método Simbólico-Espacial (Escuela Suiza - Max Pulver):</strong> Utiliza la "Cruz de Pulver" para analizar la proyección del autor en el papel. Divide el espacio en zonas (superior/idealismo, inferior/instintos, izquierda/pasado y derecha/futuro), permitiendo rastrear la dirección de los impulsos y detectar anomalías emocionales que alteran la firma.</li>
              <li><strong>Método de la Mímica Somática (Escuela de Barcelona - Muñoz Espinalt):</strong> Se centra en el simbolismo del óvalo, considerándolo la síntesis de la personalidad y el eje donde se reflejan los movimientos corporales inconscientes.</li>
            </ul>

            <h4 className="font-bold text-slate-900 mt-6 mb-2">3. Técnicas de Aplicación en Autoría</h4>
            <p className="mb-2">Para determinar si una firma corresponde al puño y letra de una persona, se emplean las siguientes técnicas:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Identificación del Gesto-Tipo:</strong> El perito busca modismos que se apartan del modelo caligráfico aprendido y que son realizados de forma automática e inconsciente.</li>
              <li><strong>Análisis de la Velocidad y Espontaneidad:</strong> Una firma auténtica fluye con un ritmo propio que un falsificador no puede emular sin mostrar lentitud, paradas o vacilaciones (signos de falsificación).</li>
              <li><strong>Grafología Emocional:</strong> Permite detectar lapsus calami o alteraciones gráficas momentáneas producidas por estados emocionales, las cuales sirven para verificar si el autor estaba bajo presión o intentaba mentir al momento de firmar.</li>
            </ul>
          </>
        );
      
      case 'Grafoscopía':
        return (
          <>
            <p className="mb-4">
              La Grafoscopía se basa en el método Analítico, Descriptivo y Comparativo. No se limita a la observación de la forma (morfología), sino que profundiza en la cinemática del trazo.
            </p>
            <h4 className="font-bold text-slate-900 mt-4 mb-2">Proceso Técnico:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Análisis Extrínseco (General):</strong> Se estudian los elementos estructurales visibles a simple vista o con baja magnificación: alineamiento, inclinación, presión aparente, velocidad, tamaño y proporcionalidad.</li>
              <li><strong>Análisis Intrínseco (Particular):</strong> Se examinan los "gestos gráficos" o automatismos. Incluye el estudio de los puntos de ataque (inicios), enlaces (conexiones entre letras), finales (remates) y signos de puntuación, los cuales escapan al control consciente del autor.</li>
            </ul>
          </>
        );

      case 'Documentoscopía':
        return (
          <>
            <p className="mb-4">
              La metodología en Documentoscopía es fundamentalmente físico-comparativa e instrumental. Se centra en la materialidad del documento para verificar su integridad y autenticidad.
            </p>
            <h4 className="font-bold text-slate-900 mt-4 mb-2">Técnicas Instrumentales:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Examen Físico no Destructivo:</strong> Utilización de radiación lumínica en distintos espectros (Ultravioleta, Infrarrojo, Luz Transmitida y Luz Rasante) para detectar alteraciones, borrados, añadidos o raspaduras sin dañar el documento.</li>
              <li><strong>Análisis de Tintas y Soportes:</strong> Diferenciación de tintas mediante su comportamiento óptico ante filtros de excitación (lumiscencia) para determinar si un documento fue confeccionado en un solo acto o si existen agregados posteriores (interpolaciones).</li>
            </ul>
          </>
        );

      case 'Grafometría':
        return (
          <>
            <p className="mb-4">
              La Grafometría es la aplicación de mediciones métricas y estadísticas a la escritura manuscrita para objetivizar las observaciones grafoscópicas.
            </p>
            <ul className="list-disc pl-6 space-y-2">
               <li><strong>Índices Métricos:</strong> Se establecen relaciones numéricas entre la altura de las letras mayúsculas y minúsculas (caja de escritura), la extensión horizontal de la firma y los espacios intergramaticales.</li>
               <li><strong>Medición Angular:</strong> Se utilizan plantillas de medición de grados para determinar con precisión matemática la inclinación axial de los caracteres y la dirección de la caja de renglón, eliminando la subjetividad visual.</li>
            </ul>
          </>
        );

      case 'Dactiloscopia':
        return (
          <>
            <p className="mb-4">
              Se define como la disciplina de la criminalística que aplica métodos y técnicas al estudio físico y comparativo de las impresiones digitales para lograr la identificación física indubitable, categórica y fehaciente de una persona. A diferencia de la grafoscopía, que estudia la mutabilidad del gesto humano, la dactiloscopía se basa en la inalterabilidad, perennidad e inmutabilidad de los dibujos papilares, los cuales se fijan desde el sexto mes de vida intrauterina y permanecen hasta la putrefacción cadavérica.
            </p>

            <h4 className="font-bold text-slate-900 mt-6 mb-2">1. Fundamentos del Análisis Dactiloscópico</h4>
            <p className="mb-2">El análisis se sustenta en el estudio de los dactilogramas, que son los dibujos formados por las crestas papilares (bordes sobresalientes en la epidermis) y los surcos interpapilares (espacios hundidos).</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Identidad Matemática:</strong> Mientras que en la firma se busca la equivalencia dinámica, en dactiloscopía se busca la concordancia de puntos característicos en cuanto a su forma, situación y dirección.</li>
              <li><strong>Naturaleza Biométrica:</strong> Se considera un rasgo fisiológico o estático que, a diferencia de la conducta de escribir, no cambia con la edad, la enfermedad o los triunfos sociales del sujeto.</li>
            </ul>

            <h4 className="font-bold text-slate-900 mt-6 mb-2">2. Metodología de Clasificación y Análisis Estructural</h4>
            <p className="mb-2">Para determinar la autoría de una impresión, el dactiloscopista divide el dibujo en tres sistemas crestales fundamentales:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Sistema Marginal:</strong> Ubicado en la parte superior y lateral del dactilograma; sus crestas se dirigen hacia la uña y rodean el centro.</li>
              <li><strong>Sistema Nuclear:</strong> Formado por las crestas que se encuentran en el centro del dibujo, pudiendo adoptar formas de gasas, círculos, espirales u ovoides.</li>
              <li><strong>Sistema Basilar:</strong> Compuesto por las crestas en la base de la yema del dedo que se elevan desde el pliegue de flexión.</li>
            </ul>
            <p className="mb-4">Un elemento crucial para la clasificación de estos sistemas son los deltas, espacios triangulares blancos que se forman en el punto donde se aproximan o unen las crestas de los tres sistemas mencionados.</p>

            <h4 className="font-bold text-slate-900 mt-6 mb-2">3. El Método Comparativo de Autoría</h4>
            <p className="mb-2">Para establecer que una huella en un documento pertenece a una persona específica, se sigue un protocolo de cotejo sistemático:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Análisis de Minucias:</strong> Se buscan "puntos característicos" que son únicos en cada individuo. En la grafoscopía, las pequeñas particularidades de detalle (idiotismos) se consideran equivalentes a estos puntos dactiloscópicos por su alto valor identificatorio.</li>
              <li><strong>Líneas Blancas (Rallas Albo-dactiloscópicas):</strong> Son rayas que no son surcos ni puntos característicos; aunque no son inmutables, su presencia puede ayudar en el análisis de impresiones de personas de edad avanzada o con ciertos desgastes.</li>
              <li><strong>Crestas Subsidiarias:</strong> Son crestas delgadas situadas entre los surcos que dependen de la presión ejercida al imprimir el dedo; su presencia ayuda a evaluar la calidad de la impresión.</li>
            </ul>

            <h4 className="font-bold text-slate-900 mt-6 mb-2">4. Aplicación en Documentoscopía y Grafoscopía</h4>
            <p className="mb-2">La dactiloscopía se utiliza como método secundario o complementario en el análisis de documentos cuando:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>La persona no sabe o no puede firmar:</strong> En estos casos, la ley exige estampar la huella dactilar, de lo cual se deja testimonio escrito indicando qué dedo se utilizó.</li>
              <li><strong>Identificación de Anónimos:</strong> Antes de iniciar un estudio de grafoscopía en un documento anónimo, el perito debe cerciorarse de que se haya culminado la búsqueda dactiloscópica, ya que la manipulación del papel deja rastros de aminoácidos de las huellas latentes que pueden ser revelados mediante ácido yodhídrico o ninhidrina.</li>
              <li><strong>Detección de Fraude:</strong> Los expertos advierten que las huellas dactilares pueden ser trasplantadas o forjadas mediante sellos de látex o tecnología láser, por lo que su presencia en un contrato no siempre garantiza el consentimiento absoluto si no hay una firma manuscrita que la acompañe.</li>
            </ul>
          </>
        );

      case 'Caligrafía':
        return (
          <>
            <p className="mb-4">
               El método caligráfico se centra en el aspecto estético y la ejecución formal de la escritura con respecto a un modelo escolar o artístico preestablecido.
            </p>
             <ul className="list-disc pl-6 space-y-2">
               <li><strong>Cotejo de Estilos:</strong> Comparación de la escritura cuestionada con los modelos caligráficos estándar (Palmer, Spencerian, Script, etc.) para determinar el nivel de habilidad gráfica y la escuela de aprendizaje del autor.</li>
               <li><strong>Análisis de Trazos Magistrales:</strong> Estudio de la calidad, limpieza y ornamentación de los trazos principales en contraposición a los trazos involuntarios.</li>
            </ul>
          </>
        );

      case 'Fotografía Forense':
        return (
          <>
            <p className="mb-4">
              La Fotografía Forense no es meramente ilustrativa; es un método de fijación y demostración probatoria. Su función es perpetuar el indicio y revelar detalles invisibles al ojo humano mediante técnicas de macrofotografía y microfotografía.
            </p>
            <p className="mb-4">
              En este dictamen, la fotografía actúa como el "testigo objetivo" que permite al Juzgador visualizar lo que el perito observó a través del microscopio. Se emplean técnicas de iluminación especial (rasante, transmitida, IR, Ultravioleta) para evidenciar características como la presión efectiva y la estructura de la línea.
            </p>
          </>
        );

      default:
        return <p className="italic text-slate-500">Se aplicaron los métodos estándar correspondientes a la materia {subject}.</p>;
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full p-8 space-y-8 bg-white shadow-sm min-h-full">
        
        {/* Header Section */}
        <header className="border-b-2 border-slate-800 pb-4">
          <h2 className="text-3xl font-serif font-bold text-slate-900 uppercase">
            6. MÉTODO Y TÉCNICAS APLICADAS
          </h2>
        </header>

        {/* Intro Text */}
        <section className="prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed font-serif text-lg">
          <p>
            Atendiendo a la naturaleza de las materias seleccionadas para el presente dictamen, se describen a continuación los métodos específicos y técnicas científicas aplicadas en cada disciplina para el esclarecimiento de la verdad histórica de los hechos.
          </p>
        </section>

        {/* Dynamic Content Generation */}
        <div className="space-y-8 mt-8">
          {selectedSubjects.length > 0 ? (
            selectedSubjects.map((subject, index) => (
              <section key={subject} className="bg-white border-l-4 border-slate-900 pl-6 py-2">
                <h3 className="text-xl font-bold text-slate-900 uppercase mb-4 flex items-center">
                  <span className="mr-2">Ø</span> {subject}.
                </h3>
                <div className="prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed font-serif text-lg">
                  {getContentForSubject(subject)}
                </div>
              </section>
            ))
          ) : (
            <div className="p-4 bg-yellow-50 text-yellow-800 border border-yellow-200 rounded">
              No ha seleccionado ninguna materia en el Capítulo 2. Por favor regrese y seleccione las materias aplicables (Grafoscopía, Grafología, etc.) para ver la metodología específica.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default MethodsView;