import React from 'react';
import { ReportData } from '../types';

interface ProblemStatementViewProps {
  data: ReportData;
}

const ProblemStatementView: React.FC<ProblemStatementViewProps> = ({ data }) => {
  // Helpers para mostrar texto por defecto si no se ha llenado el dato
  const docDescription = data.docDescription || "[TIPO DE DOCUMENTO]";
  const fileNumber = data.fileNumber || "[EXPEDIENTE]";
  const defendantName = data.defendantName || "[DEMANDADO]";
  const court = data.court || "[JUZGADO]";
  const sampleDate = data.sampleDate || "[FECHA DE TOMA DE MUESTRA]";
  
  // Logic for singular/plural
  const isPlural = (data.questionedDocCount || 1) > 1;
  const docRef = isPlural ? "los documentos" : "el documento";
  const docRefType = isPlural ? `${docDescription}s` : docDescription; // Crude pluralization
  const dateText = data.questionedDocDate ? `de fecha ${data.questionedDocDate}` : "[FECHA]";
  const signatureRef = isPlural ? "las firmas y/o rubricas" : "la firma y/o rubrica";

  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full p-8 space-y-8 bg-white shadow-sm min-h-full">
        
        {/* Header Section */}
        <header className="border-b-2 border-slate-800 pb-4">
          <h2 className="text-3xl font-serif font-bold text-slate-900 uppercase">
            3. PLANTEAMIENTO DEL PROBLEMA
          </h2>
        </header>

        {/* Fixed Legal Text Content */}
        <section className="prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed font-serif text-lg">
          
          <p>
            El planteamiento del problema: constituye la piedra angular de la investigación pericial, pues delimita el objeto de estudio y define las interrogantes que el experto debe resolver mediante la aplicación del método científico.
          </p>

          <h3 className="text-xl font-bold uppercase mt-6 mb-4">1.1. Objeto de la Pericia</h3>

          <p>
            La razón primordial del presente dictamen lo es determinar mediante el estudio técnico si {signatureRef} que obran en {docRef} Tipo <strong>{docRefType}</strong> {dateText}, señalado así por la parte Actora Oferente de la prueba documental, {docRef} que se localizan en el presente expediente <strong>{fileNumber}</strong>, exhibido como prueba documental en Original por la parte actora y la misma fue debidamente admitida como prueba, si por su ejecución corresponde o no a la persona que se atribuye, así como por su origen gráfico, y análisis <strong>{defendantName}</strong>, así como si corresponden o no con respecto a los elementos gráficos indubitables proporcionados como base de cotejo.
          </p>

          <p>
            Para tal efecto, y a fin de que poder realizar un estudio integral y veras, y una vez que el suscrito Acepte y Proteste el cargo conferido, se me proporciona el expediente en donde obran los documentos base de estudio y en donde se aprecian {signatureRef} cuestionada{isPlural ? 's' : ''} o dubitable{isPlural ? 's' : ''}; así como el conjunto de firmas y/o rubricas consideradas indubitables que obra dentro del expediente multicitado señalados al rubro del presente dictamen, que fueron estampadas del puño y letra <strong>{defendantName}</strong>, mediante comparecencia a este H. <strong>{court}</strong> de esta ciudad ante la presencia de la autoridad debida, firmas y/o rubricas que se consideran como indubitables para realizar el presente dictamen.
          </p>

          <p>
            En función de mi cometido, a fin de recolectar todos los elementos necesarios e idóneos para análisis y cotejo requerido me constituí en las siguientes fechas <strong>{sampleDate}</strong>, en este H. <strong>{court}</strong>; a fin de poder tener a la vista los documentos antes descritos, y procediendo a practicar un estudio minucioso a fin de constatar sus características generales y morfológicas.
          </p>

          <p>
            Procediendo a tomar muestras Fotográficas, Microscópicas, con diferentes tipos de iluminantes, y aparatos de medición y tomar las muestras pertinentes para así estar en aptitud de emitir una opinión técnica debidamente.
          </p>

        </section>
      </div>
    </div>
  );
};

export default ProblemStatementView;