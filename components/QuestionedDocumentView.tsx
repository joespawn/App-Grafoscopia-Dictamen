import React from 'react';
import { ReportData } from '../types';

interface QuestionedDocumentViewProps {
  data: ReportData;
}

const QuestionedDocumentView: React.FC<QuestionedDocumentViewProps> = ({ data }) => {
  const docType = data.docDescription || "Impresión Offset"; // Default or value from General Data
  const plaintiff = data.plaintiff || "[PARTE ACTORA]";

  const getSubstrateAnalysis = () => {
    switch (docType) {
      case 'Impresión Offset':
        return (
          <>
            <p><strong>(Opción 1. Impresión Offset.)</strong></p>
            <p>
              El formato "esqueleto" del pagaré se imprime mediante procesos industriales utilizando Impresión Offset, el cual se clasifica como un sistema de impresión indirecto y planográfico (sin relieve), lo que significa que la matriz no toca directamente el papel, sino que la imagen se transfiere a través de una superficie intermedia. El proceso se basa en el principio de repulsión entre el agua y las sustancias grasas. Consiste en una plancha delgada de zinc o aluminio que se fija a un cilindro. Esta plancha es obtenida mediante procesos fotoquímicos (fotocomposición), donde las zonas que deben imprimir retienen la tinta grasa y las zonas que no deben imprimir retienen una capa de agua para rechazar la tinta. El Mecanismo de Tres Cilindros: El proceso es indirecto porque utiliza un sistema de transferencia en cadena:
            </p>
            <ol className="list-decimal pl-6 mt-2 mb-4 space-y-1">
              <li>Cilindro de plancha (Matriz): Contiene la imagen entintada.</li>
              <li>Cilindro de mantilla (Intermedio): Está cubierto por una mantilla de caucho que recibe la imagen desde la plancha.</li>
              <li>Cilindro de impresión (Presión): Es el que finalmente transmite la imagen desde la mantilla de caucho al papel.</li>
            </ol>
            <p>
              Produce impresos finos con coloración homogénea y tonalidades suaves. Los contornos de las letras y figuras son siempre netos y precisos. La capa de pigmento depositada es delgada o fina. Al utilizar una mantilla de caucho (que es flexible), permite imprimir sobre una gran variedad de superficies, incluso aquellas que no son perfectamente lisas. Este sistema de impresión se utiliza para el tramado verde y los recuadros. Se caracteriza por un entintado plano y sin relieve, con bordes netos y precisos bajo el microscopio. El "tramado" verde no es solo estético; contiene dispositivos extrínsecos para prevenir la falsificación, entre los que destaca:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Fondos de Seguridad.</strong> Dibujos complejos formados por líneas curvas entrelazadas que son difíciles de reproducir mediante escaneo o fotocopiado sin que se pixelen o pierdan nitidez.</li>
              <li><strong>Microtextos y Microletras.</strong> Leyendas de dimensiones muy reducidas, a menudo camufladas en las líneas de pauta o bordes, que solo pueden visualizarse con aumento (lupa o microscopio) y que se pierden en copias de baja calidad.</li>
              <li><strong>Fibras y Tintas de Seguridad.</strong> El papel puede contener fibras ópticas invisibles que reaccionan (fluorescencia) bajo la luz ultravioleta. Asimismo, las tintas del tramado pueden ser sensibles a reactivos.</li>
            </ul>
          </>
        );
      case 'Impresión Láser':
        return (
          <>
            <p><strong>(Opción 2. Impresión Laser.)</strong></p>
            <p>
              El formato "esqueleto" del pagaré se imprime mediante procesos industriales utilizando Impresión láser es un sistema perteneciente a la categoría de las impresoras electrográficas, caracterizado por ser un equipo altamente automatizado y autónomo que utiliza un rayo láser concentrado para fijar imágenes sobre un soporte. El proceso es complejo y se coordina a través de un componente interno llamado formater (considerado el cerebro de la impresora), siguiendo estos pasos principales; El formater recibe la orden de impresión y convierte el archivo original a un lenguaje raster, el cual contiene la información detallada de los puntos, líneas y colores que deben plasmarse. La impresora cuenta con un cilindro sensible, generalmente construido en aluminio y recubierto con una capa de óxido de zinc o selenio. El rayo láser incide sobre el cilindro a través de un espejo giratorio. Esta radiación provoca que se genere una imagen latente en forma de una carga electrostática que atrae y retiene el tóner. El tóner, que posee una carga eléctrica negativa, se adhiere únicamente a los lugares donde existe una carga positiva en el tambor, formando así la imagen física. Para la Transferencia al Soporte, se coloca una hoja de papel cargada electrostáticamente sobre el tambor para que el tóner depositado se transfiera a la superficie del papel. Finalmente, el papel se calienta a una temperatura de entre 160 y 200 grados centígrados, lo que funde el tóner y lo fija permanentemente al sustrato.
            </p>
            <p className="mt-4">
              La impresora láser produce puntos perfectamente alineados. Al realizar un examen gramográfico con aumentos discretos, se observa una estructura muy diferente al punteado disperso de otros sistemas. Al ser un sistema sin impacto, el trazo carece de la profundidad o surco, estas impresoras alinean el texto de forma automatizada, es capaz de lograr imágenes de alta definición y pueden representar hasta 64 niveles de grises mediante procesos de interpolación. El material utilizado no es tinta líquida, sino un polvillo finísimo (tóner) compuesto por una combinación de resina termoplástica y grafito.
            </p>
          </>
        );
      case 'Inyección de Tinta':
        return (
          <>
            <p><strong>(Opción 3. Impresión Inyección de Tinta.)</strong></p>
            <p>
              El formato "esqueleto" del pagaré se imprime mediante procesos industriales utilizando impresión por inyección de tinta (también conocida como chorro de tinta) es un sistema de impresión sin impacto que utiliza minúsculos aspersores o boquillas para proyectar gotas de tinta líquida sobre un soporte; se caracteriza por formar las estructuras gráficas mediante una serie de puntos. El proceso comienza cuando el software del equipo (driver) recibe la información y la dirige al mecanismo de los inyectores, los cuales se encargan de disparar la tinta en forma de gotas para formar los colores deseados. Al examen microscópico, se aprecia que la impresión presenta un punteado disperso. Si se imprime a color, se observa una acumulación de puntos policromáticos (cian, magenta, amarillo y negro); Al ser un sistema sin impacto mecánico, se Utiliza generalmente tinta líquida (acuosa o con solventes orgánicos), las impresoras de inyección alinean el texto de forma automatizada, por lo que no presentan desalineamientos verticales apreciables.
            </p>
          </>
        );
      default:
        return (
          <p className="text-red-500 italic p-4 border border-red-200 bg-red-50 rounded">
            Error: Sistema de impresión no reconocido. Por favor seleccione uno válido en "0. Datos Generales".
          </p>
        );
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full p-8 space-y-8 bg-white shadow-sm min-h-full">
        
        {/* Header Section */}
        <header className="border-b-2 border-slate-800 pb-4">
          <h2 className="text-3xl font-serif font-bold text-slate-900 uppercase">
            10. DOCUMENTO CUESTIONADO
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Análisis técnico del soporte, sistema de impresión y elementos de seguridad.
          </p>
        </header>

        {/* Fixed Introduction */}
        <section className="prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed font-serif text-lg">
          <p>
            El mismo se tratan de un documento, en una hoja señalado como Tipo “<strong>{docType}</strong>”, localizado en el secreto del Juzgado y su copia en el expediente indicado, señalado así por la parte actora <strong>{plaintiff}</strong>, quien es la oferente de dicha prueba documental, el cual es un conjunto sistémico de elementos de seguridad y artes gráficas diseñado para garantizar su integridad y autenticidad, El mismo está constituido por papel bond de alta calidad, fabricado con pastas de fibras de celulosa, la cual es susceptible de decoloración o manchas de reacción si ha sido sometida a un lavado químico con solventes para borrar montos o fechas.
          </p>
        </section>

        {/* Dynamic Analysis of Substrate */}
        <section className="prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed font-serif text-lg">
          <h3 className="text-xl font-bold uppercase mt-6 mb-4 border-b border-slate-300 pb-2">
            ANÁLISIS DEL SUSTRATO
          </h3>
          {getSubstrateAnalysis()}
        </section>

        {/* Fixed Conclusion (Handwritten Filling) */}
        <section className="prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed font-serif text-lg">
          <h3 className="text-xl font-bold uppercase mt-6 mb-4 border-b border-slate-300 pb-2">
            LLENADO MANUSCRITO Y FIRMA
          </h3>
          <p>
            En el llenado y firma del pagaré se analiza la interacción de la tinta con el papel, Características Microscópicas: La tinta de bolígrafo es pastosa y no penetra las fibras del papel, sino que se deposita sobre su relieve. Presenta estrías longitudinales y acumulaciones de tinta (pastosidades) en los cambios de dirección.
          </p>
          <p>
            La tinta de bolígrafo, contenida en el documento base de la acción, se define como un compuesto de consistencia pastosa y secado rápido, diseñada para ser transferida al papel mediante el giro de una esfera metálica (bola) situada en la punta del útil. En el contexto de un documento comercial como un pagaré, su análisis es crítico para determinar la autenticidad de firmas y la existencia de alteraciones. La tinta de bolígrafo no penetra en las fibras del papel, sino que se deposita sobre su relieve, lo que permite observar la trama del sustrato bajo el trazo, además de que se permiten ver <strong>Estrías Longitudinales</strong>, las cuales son líneas blancas o vacíos de tinta dentro del trazo, causados por defectos de fabricación o desgaste en la esfera, lo que sirve como una "huella digital" del útil utilizado, además de que se aprecian <strong>Pastosidades y Descargas</strong>, estos consisten en los cambios de dirección (como en las curvas de una firma), el bolígrafo suele dejar acumulaciones de tinta pastosa. Si la tinta es muy viscosa o el útil está defectuoso, estas descargas son más evidentes. Y finalmente se aprecia el <strong>Surco Tridimensional (Presión Efectiva)</strong>, Debido a la fuerza necesaria para que la bola ruede, el bolígrafo produce un surco o hendidura profunda en el anverso y un alto relieve en el reverso del pagaré. Este relieve es vital para distinguir una firma auténtica de un calco plano.
          </p>
        </section>

      </div>
    </div>
  );
};

export default QuestionedDocumentView;