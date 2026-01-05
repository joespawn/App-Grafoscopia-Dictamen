import React from 'react';
import { ReportData } from '../types';

interface IntegralAnalysisViewProps {
  data: ReportData;
}

const IntegralAnalysisView: React.FC<IntegralAnalysisViewProps> = ({ data }) => {
  const defendantName = data.defendantName || "[DEMANDADO NO ESPECIFICADO]";

  const getConclusionText = () => {
    switch (data.hypothesis) {
      case 'A':
        return (
          <>
            <strong className="block text-lg mb-2">Opción 1: Correspondencia de Autoría (Firma Auténtica)</strong>
            Como resultado del Análisis Técnico Integral y Valoración de la Personalidad Escritural, se ha determinado una correspondencia absoluta y constante entre los automatismos, gestos-tipo y la melodía cinética identificados en la firma cuestionada respecto al material indubitado de cotejo. La morfología detectada, en conjunción con la presión efectiva y el dinamismo grafocinético observado, se sitúa plenamente dentro del Patrón de Variaciones Posibles (PVP) del titular. Por lo tanto, se concluye técnicamente que el grafismo en estudio <strong>SÍ PROCEDE DEL PUÑO Y LETRA</strong> de la persona a quien se le atribuye <strong>{defendantName}</strong>.
          </>
        );
      case 'B':
        return (
          <>
            <strong className="block text-lg mb-2">Opción 2: Discrepancia de Autoría (Firma Falsa)</strong>
            Derivado del Análisis Técnico Integral y Valoración de la Personalidad Escritural, se han identificado divergencias significativas e insalvables en la génesis gráfica y los puntos de referencia intrínsecos del grafismo dubitado en comparación con las constantes identificadas en las muestras de cotejo. La ausencia de los automatismos habituales del titular, sumada a una presión uniforme y falta de espontaneidad, demuestra una ejecución ajena a su sistema neuromuscular. En consecuencia, se establece que la firma analizada <strong>NO PROCEDE DEL PUÑO Y LETRA</strong> de la persona a quien se le atribuye <strong>{defendantName}</strong>.
          </>
        );
      case 'C':
        return (
          <>
            <strong className="block text-lg mb-2">Opción 3: Imposibilidad Técnica o Material</strong>
            Tras agotar los métodos del Análisis Técnico Integral y Valoración de la Personalidad Escritural, se manifiesta una <strong>IMPOSIBILIDAD TÉCNICA</strong> para emitir un juicio categórico de autoría. Las limitaciones materiales identificadas (como la falta de idoneidad, escasez o falta de coetaneidad en los elementos de cotejo) impiden establecer de manera objetiva el conjunto de constantes escriturales necesarias para realizar un estudio comparativo fiable. Por lo anterior, este perito se encuentra impedido para determinar si el grafismo cuestionado procede o no del puño y letra de la persona que se atribuye <strong>{defendantName}</strong>.
          </>
        );
      default:
        return (
          <span className="text-slate-400 italic">
            Por favor, seleccione una hipótesis en el apartado "0. Datos Generales" para generar la conclusión.
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
            16. ANÁLISIS TÉCNICO INTEGRAL Y VALORACIÓN DE LA PERSONALIDAD ESCRITURAL
          </h2>
        </header>

        {/* Fixed Technical Text */}
        <section className="prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed space-y-4">
          <p>
            Este apartado constituye el estudio medular del dictamen pericial, siendo el eje técnico-científico que soporta las conclusiones finales. La determinación del origen gráfico no se basa en un solo rasgo, sino en la conjunción sistematizada y racional de diversos elementos que, en su conjunto, individualizan al autor de manera inequívoca.
          </p>
          <p>
            La determinación científica de la autoría se fundamenta en el Principio de Correspondencia de Características. Científicamente, "nadie es capaz de fingir simultáneamente todos los elementos de su grafía" (Principio de Saudek); por lo tanto, aunque un falsificador logre emular la morfología (forma), no podrá replicar la presión efectiva, el dinamismo grafocinético ni los gestos gráficos subconscientes de manera coordinada.
          </p>
          <p>
            La integración de estos análisis permite establecer el Patrón de Variaciones Posibles (PVP) del titular. Si en la firma cuestionada coinciden tanto las características generales como las particularidades invisibles y los automatismos detectados, se puede afirmar con certeza técnica que ambos grafismos proceden del mismo origen gráfico y sistema neuromuscular.
          </p>
        </section>

        <hr className="border-slate-300" />

        {/* Dynamic Conclusion Section */}
        <section className="bg-slate-50 p-8 rounded-lg border-2 border-slate-200">
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

export default IntegralAnalysisView;