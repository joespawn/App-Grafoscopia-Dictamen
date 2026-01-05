import React from 'react';
import { ReportData } from '../types';

interface MethodologyViewProps {
  data: ReportData;
}

const MethodologyView: React.FC<MethodologyViewProps> = ({ data }) => {
  const defendant = data.defendantName || "[DEMANDADO]";

  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full p-8 space-y-8 bg-white shadow-sm min-h-full">
        
        {/* Header Section */}
        <header className="border-b-2 border-slate-800 pb-4">
          <h2 className="text-3xl font-serif font-bold text-slate-900 uppercase">
            5. METODOLOGÍA
          </h2>
        </header>

        {/* Content Section */}
        <section className="prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed font-serif text-lg">
          
          <p>
            Consiste en el estudio del Método, el cual a su vez es el camino o forma ordenada de realizar una obra o investigación, es un conjunto de procedimientos y técnicas utilizadas para llegar a un fin[1].
          </p>

          <p>
            El rigor científico exige que el perito no solo emita una opinión, sino que explique el camino racional utilizado para llegar a ella. La metodología empleada en este dictamen se basa en el Método Científico Experimental, adaptado a las necesidades de la criminalística documental.
          </p>

          {/* 5.1 Fundamento Epistemológico */}
          <div className="mt-8">
            <h3 className="font-bold text-xl uppercase mb-3">5.1. Fundamento Epistemológico</h3>
            <p>
              Se parte de la premisa de que la grafoscopía no es un arte adivinatorio, sino una ciencia observacional basada en principios Neurofisiológicos y psicológicos verificables. Se adopta un enfoque falsacionista (Popperiano): la hipótesis de que la firma es auténtica se somete a pruebas rigurosas buscando evidencia que la refute (diferencias fundamentales). Si la hipótesis resiste todas las pruebas de refutación, se considera válida.
            </p>
          </div>

          {/* 5.2 Etapas del Proceso */}
          <div className="mt-8">
            <h3 className="font-bold text-xl uppercase mb-3">5.2. Etapas del Proceso Metodológico</h3>
            <p className="mb-4">El dictamen se desarrolló siguiendo una secuencia lógica ordenada:</p>
            
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Observación Sistemática:</strong> Examen sensorial minucioso de los documentos. Primero se analiza el documento dubitado de forma aislada para entender su estructura interna, y posteriormente se analizan los indubitados para establecer el "patrón gráfico" del autor.
              </li>
              
              <li>
                <strong>Planteamiento de Hipótesis:</strong> Se establecen dos hipótesis de trabajo mutuamente excluyentes:
                <ul className="list-none pl-6 mt-2 space-y-2 border-l-4 border-blue-200">
                  <li className="bg-slate-50 p-2 rounded">
                    <strong>H0 (Hipótesis Nula):</strong> La firma cuestionada NO proviene del puño y letra de <strong>{defendant}</strong>.
                  </li>
                  <li className="bg-slate-50 p-2 rounded">
                    <strong>H1 (Hipótesis Alternativa):</strong> La firma cuestionada SÍ proviene del puño y letra de <strong>{defendant}</strong>.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Experimentación y Análisis:</strong> Aplicación de los métodos analítico, descriptivo y comparativo (detallados en el Capítulo correspondiente de Método y técnicas utilizado). Se utilizan los instrumentos ópticos para medir, cuantificar y cualificar los rasgos gráficos.
              </li>

              <li>
                <strong>Verificación y Contrastación:</strong> Se comparan los resultados obtenidos. Se evalúa si las diferencias encontradas son producto de variaciones naturales (intrasujetales) o si constituyen divergencias fundamentales (intersujetales) que implican autores distintos.
              </li>

              <li>
                <strong>Síntesis y Conclusión:</strong> Integración de los hallazgos en un juicio de valor técnico que confirma o descarta la identidad gráfica.
              </li>
            </ol>
          </div>

          {/* 5.3 Criterios de Validación */}
          <div className="mt-8">
            <h3 className="font-bold text-xl uppercase mb-3">5.3. Criterios de Validación</h3>
            <p className="mb-4">
              Para que la comparación sea válida, se verificó el cumplimiento de los principios rectores del cotejo de firmas:
            </p>
            
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Originalidad:</strong> Se trabajó sobre documentos originales para poder apreciar la presión y calidad del trazo.
              </li>
              <li>
                <strong>Suficiencia:</strong> Se contó con un número adecuado de firmas indubitables para establecer la "gama de variabilidad" del autor. Una sola firma de cotejo es insuficiente, pues la escritura humana no es estática.
              </li>
              <li>
                <strong>Homología:</strong> Se compararon firmas con firmas (no firmas con textos manuscritos extensos) y del mismo tipo (e.g., firmas completas vs. firmas completas, no rúbricas simplificadas).
              </li>
              <li>
                <strong>Coetaneidad:</strong> Se seleccionaron muestras de fechas cercanas a la del documento cuestionado para evitar errores derivados de la evolución gráfica natural por la edad o enfermedades.
              </li>
            </ul>
          </div>

        </section>
      </div>
    </div>
  );
};

export default MethodologyView;