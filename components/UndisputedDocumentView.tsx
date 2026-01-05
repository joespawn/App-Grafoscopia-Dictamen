import React from 'react';
import { ReportData } from '../types';

interface UndisputedDocumentViewProps {
  data: ReportData;
}

const UndisputedDocumentView: React.FC<UndisputedDocumentViewProps> = ({ data }) => {
  const defendantName = data.defendantName || "[DEMANDADO]";
  const court = data.court || "[JUZGADO]";
  const courtAddress = data.courtAddress || "[DOMICILIO DEL JUZGADO]";
  const folio = data.undisputedDocFolio || "[FOJA]";

  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full p-8 space-y-8 bg-white shadow-sm min-h-full">
        
        {/* Header Section */}
        <header className="border-b-2 border-slate-800 pb-4">
          <h2 className="text-3xl font-serif font-bold text-slate-900 uppercase">
            11. DOCUMENTO INDUBITABLE
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Descripción técnica de las muestras de cotejo.
          </p>
        </header>

        {/* Content Section */}
        <section className="prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed font-serif text-lg">
          <p>
            Consistentes en las Muestras de Firmas y/o Rubricas que suscribió <strong>{defendantName}</strong>, en la muestra de Firmas y escritura, ante la presencia del Secretario Abogado de Acuerdo y Tramite de este H. <strong>{court}</strong>, con domicilio <strong>{courtAddress}</strong>, y que obran dentro del presente expediente a foja <strong>{folio}</strong>, dicho documento está impreso sobre una hoja de papel de color blanco, comúnmente llamada “hoja de maquina” de tamaño oficio<sup>[1]</sup>, en la que se localiza las impresiones de las firmas y/o rubricas de la parte Demandada <strong>{defendantName}</strong>, mismo que se realiza con un útil inscriptor bolígrafo de tinta viscosa con pigmentos en color Azul; esta muestra es señalada como documento indubitable o firmas y/o rubricas.
          </p>
        </section>

        {/* Footnotes */}
        <footer className="mt-16 pt-8 border-t border-slate-300 text-sm text-slate-600 font-serif">
          <p>[1] Tamaño oficio, medidas 220 mm × 340 mm.</p>
        </footer>

      </div>
    </div>
  );
};

export default UndisputedDocumentView;