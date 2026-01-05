import React from 'react';

const ApplicableTechniquesView: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full p-8 space-y-8 bg-white shadow-sm min-h-full">
        
        {/* Header Section */}
        <header className="border-b-2 border-slate-800 pb-4">
          <h2 className="text-3xl font-serif font-bold text-slate-900 uppercase">
            7. TÉCNICAS APLICABLES AL CASO
          </h2>
        </header>

        {/* Content Section */}
        <section className="prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed font-serif text-lg">
          
          <p>
            Las técnicas en las ciencias del grafismo y la documentoscopía se definen como las herramientas procedimentales y recursos tecnológicos mediante los cuales se ejecutan los métodos de análisis. A continuación, se describen de forma pormenorizada las técnicas aplicables según lo establecido en los textos:
          </p>

          {/* 1. Técnicas de Señalamiento y Registro */}
          <div className="mt-8">
            <h3 className="font-bold text-xl uppercase mb-3">1. Técnicas de Señalamiento y Registro (Procedimentales)</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Técnica Sinaléctica:</strong> Consiste en el uso de indicadores numéricos, flechas y círculos sobre los anexos fotográficos para destacar y correlacionar de manera clara las coincidencias o divergencias encontradas durante el estudio técnico.
              </li>
              <li>
                <strong>Técnica de Investigación de Campo:</strong> Se define como el procedimiento en el que el objeto de estudio (el documento original) sirve como fuente directa de información; implica el traslado del perito a archivos públicos, juzgados o notarías para el examen in vivo y la captura de muestras fotográficas.
              </li>
              <li>
                <strong>Técnica de Capas:</strong> Utilizada para la reconstrucción de sellos o textos ilegibles. Se basa en fotografiar el documento bajo distintas radiaciones y usar programas informáticos para "levantar" capas de tinta que obstruyen la lectura de los trazos inferiores.
              </li>
            </ul>
          </div>

          {/* 2. Técnicas de Examen Óptico e Instrumental */}
          <div className="mt-8">
            <h3 className="font-bold text-xl uppercase mb-3">2. Técnicas de Examen Óptico e Instrumental</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Examen Microscópico y Estereoscópico:</strong> Se utiliza para observar con aumentos el relieve de los trazos, el erizamiento de las fibras del papel, la distribución de la tinta (rebabas, surcos) y detectar alteraciones físicas como raspados.
              </li>
              <li>
                <strong>Técnicas de Iluminación Especial:</strong>
                <ul className="list-circle pl-6 mt-2 space-y-2">
                  <li><strong>Luz Rasante o Tangencial:</strong> Se proyecta en ángulos muy agudos para resaltar el relieve de los surcos, detectar escrituras latentes (indentaciones) o huellas de borrado mecánico.</li>
                  <li><strong>Luz Transmitida:</strong> Iluminación por el reverso para verificar marcas de agua o detectar el adelgazamiento del papel por abrasión.</li>
                  <li><strong>Luz Ultravioleta:</strong> Técnica esencial para detectar lavados químicos, reactivos erradicadores, tintas invisibles y medidas de seguridad como fibras ópticas.</li>
                  <li><strong>Radiación Infrarroja (IR):</strong> Permite diferenciar tintas de distinta composición química que parecen iguales a simple vista, leer textos tachados y detectar añadidos.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* 3. Técnicas de Análisis de la Presión y el Trazo */}
          <div className="mt-8">
            <h3 className="font-bold text-xl uppercase mb-3">3. Técnicas de Análisis de la Presión y el Trazo</h3>
            <p className="mb-2"><strong>Procesos de Puesta en Evidencia de la Presión:</strong> Las fuentes describen tres procesos técnicos específicos:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Eliminación de pigmentos con IR:</strong> Para ver el surco sin la distracción del color de la tinta.</li>
              <li><strong>Observación del reverso:</strong> Examinar el relieve en la cara posterior del papel y usar el "efecto espejo" digital para verlo en sentido original.</li>
              <li><strong>Filtrado en bajo relieve:</strong> Uso de funciones digitales (como el filtro sensible a la radiación infrarroja IR").</li>
            </ul>
          </div>

          {/* 4. Técnica de Análisis Geométrico-Estructural */}
          <div className="mt-8">
            <h3 className="font-bold text-xl uppercase mb-3">4. Técnica de Análisis Geométrico-Estructural</h3>
            <p className="mb-2">Se trazan líneas imaginarias o reales sobre las firmas para medir:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Caja de Escritura:</strong> Líneas tangentes a las partes superiores e inferiores de las letras medias.</li>
              <li><strong>Ejes de Inclinación:</strong> Medición de los ángulos de las letras respecto a la línea base.</li>
              <li><strong>Curvatura:</strong> Análisis de los radios de giro en óvalos y bucles.</li>
            </ul>
            <p className="mt-3 bg-slate-50 p-3 rounded italic border-l-4 border-slate-300">
              Esta técnica objetiviza el dictamen, transformando impresiones visuales en datos geométricos verificables.
            </p>
          </div>

          {/* 5. Técnicas de Registro Fotográfico y Digital */}
          <div className="mt-8">
            <h3 className="font-bold text-xl uppercase mb-3">5. Técnicas de Registro Fotográfico y Digital</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Macrofotografía y Fotomicrografía:</strong> Captura de imágenes aumentadas para ilustrar los hallazgos del microscopio en el dictamen.
              </li>
              <li>
                <strong>Estereofotografía:</strong> Toma de dos fotografías desde ángulos ligeramente diferentes (distancia interpupilar) para registrar la sensación de relieve y profundidad.
              </li>
              <li>
                <strong>Digitalización y Tratamiento de Imágenes:</strong> Uso de escáneres y software especializado para procesar imágenes, mejorar contrastes en escritos decolorados e ilustrar comparaciones por superposición.
              </li>
            </ul>
          </div>

        </section>
      </div>
    </div>
  );
};

export default ApplicableTechniquesView;