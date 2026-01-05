import React from 'react';
import { ReportData } from '../types';

interface IntegralAnalysisViewProps {
  data: ReportData;
}

const IntegralAnalysisView: React.FC<IntegralAnalysisViewProps> = ({ data }) => {
  const defendantName = data.defendantName || "[DEMANDADO]";

  const getConclusionText = () => {
    switch (data.hypothesis) {
      case 'A':
        return (
          <div className="mt-8 glass-card bg-green-50/50 p-6 rounded-2xl border-green-200/50">
            <h4 className="font-bold text-green-900 uppercase mb-2 border-b border-green-300/50 pb-1">
              CONCLUSIÓN
            </h4>
            <p className="font-bold text-green-800 text-sm mb-2">Opción 1: Correspondencia de Autoría (Firma Auténtica)</p>
            <p className="text-justify text-green-900 leading-relaxed font-medium">
              Como resultado del Análisis Técnico Integral y Valoración de la Personalidad Escritural, se ha determinado una correspondencia absoluta y constante entre los automatismos, gestos-tipo y la melodía cinética identificados en la firma cuestionada respecto al material indubitado de cotejo. La morfología detectada, en conjunción con la presión efectiva y el dinamismo grafocinético observado, se sitúa plenamente dentro del Patrón de Variaciones Posibles (PVP) del titular. Por lo tanto, se concluye técnicamente que el grafismo en estudio <strong>SÍ PROCEDE DEL PUÑO Y LETRA</strong> de la persona a quien se le atribuye <strong>{defendantName}</strong>.
            </p>
          </div>
        );
      case 'B':
        return (
          <div className="mt-8 glass-card bg-red-50/50 p-6 rounded-2xl border-red-200/50">
             <h4 className="font-bold text-red-900 uppercase mb-2 border-b border-red-300/50 pb-1">
               CONCLUSIÓN
             </h4>
             <p className="font-bold text-red-800 text-sm mb-2">Opción 2: Discrepancia de Autoría (Firma Falsa)</p>
             <p className="text-justify text-red-900 leading-relaxed font-medium">
              Derivado del Análisis Técnico Integral y Valoración de la Personalidad Escritural, se han identificado divergencias significativas e insalvables en la génesis gráfica y los puntos de referencia intrínsecos del grafismo dubitado en comparación con las constantes identificadas en las muestras de cotejo. La ausencia de los automatismos habituales del titular, sumada a una presión uniforme y falta de espontaneidad, demuestra una ejecución ajena a su sistema neuromuscular. En consecuencia, se establece que la firma analizada <strong>NO PROCEDE DEL PUÑO Y LETRA</strong> de la persona a quien se le atribuye <strong>{defendantName}</strong>.
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
              Tras agotar los métodos del Análisis Técnico Integral y Valoración de la Personalidad Escritural, se manifiesta una <strong>IMPOSIBILIDAD TÉCNICA</strong> para emitir un juicio categórico de autoría. Las limitaciones materiales identificadas (como la falta de idoneidad, escasez o falta de coetaneidad en los elementos de cotejo) impiden establecer de manera objetiva el conjunto de constantes escriturales necesarias para realizar un estudio comparativo fiable. Por lo anterior, este perito se encuentra impedido para determinar si el grafismo cuestionado procede o no del puño y letra de la persona que se atribuye <strong>{defendantName}</strong>.
            </p>
          </div>
        );
      default:
        return (
          <div className="mt-8 glass-card bg-slate-100/50 p-6 rounded-2xl border-slate-300/50 text-slate-500 italic text-center">
            Para visualizar la conclusión automática, seleccione una "Determinación Pericial" en el apartado <strong>0. Datos Generales</strong>.
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="max-w-6xl mx-auto w-full p-4 md:p-8 space-y-8 min-h-full">
        
        {/* Header Section */}
        <div className="glass-panel p-8 rounded-3xl">
          <header className="border-b border-slate-400/30 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 uppercase drop-shadow-sm">
              16. ANÁLISIS TÉCNICO INTEGRAL Y VALORACIÓN DE LA PERSONALIDAD ESCRITURAL
            </h2>
          </header>

          <div className="mt-8">
            {/* Fixed Technical Text */}
            <div className="p-4 md:p-8 prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed font-serif text-base md:text-lg border-b border-slate-200/50">
              <p>
                Este apartado constituye el estudio medular del dictamen pericial, siendo el eje técnico-científico que soporta las conclusiones finales. La determinación del origen gráfico no se basa en un solo rasgo, sino en la conjunción sistematizada y racional de diversos elementos que, en su conjunto, individualizan al autor de manera inequívoca.
              </p>
              <p>
                La determinación científica de la autoría se fundamenta en el Principio de Correspondencia de Características. Científicamente, "nadie es capaz de fingir simultáneamente todos los elementos de su grafía" (Principio de Saudek); por lo tanto, aunque un falsificador logre emular la morfología (forma), no podrá replicar la presión efectiva, el dinamismo grafocinético ni los gestos gráficos subconscientes de manera coordinada.
              </p>
              <p>
                La integración de estos análisis permite establecer el Patrón de Variaciones Posibles (PVP) del titular. Si en la firma cuestionada coinciden tanto las características generales como las particularidades invisibles y los automatismos detectados, se puede afirmar con certeza técnica que ambos grafismos proceden del mismo origen gráfico y sistema neuromuscular.
              </p>
            </div>

            {/* Dynamic Conclusion Section */}
            <div className="p-4 md:p-8">
                 {getConclusionText()}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default IntegralAnalysisView;