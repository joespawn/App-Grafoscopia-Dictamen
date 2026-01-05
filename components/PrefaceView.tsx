import React from 'react';
import { ReportData } from '../types';

interface PrefaceViewProps {
  data: ReportData;
}

const PrefaceView: React.FC<PrefaceViewProps> = ({ data }) => {
  // Helpers
  const court = data.court || "[Juzgado]";
  const plaintiff = data.plaintiff || "[ACTOR]";
  const defendant = data.defendantName || "[DEMANDADO]";
  const trialType = data.trialType || "[TIPO DE JUICIO]";
  const fileNumber = data.fileNumber || "[EXPEDIENTE]";
  const expertName = data.expertName || "[PERITO]";

  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full p-12 space-y-8 bg-white shadow-sm min-h-full font-serif text-slate-900 leading-loose">
        
        {/* Header / Rubro */}
        <section className="text-right mb-12 uppercase font-bold text-sm tracking-wide border-b-4 border-double border-slate-800 pb-4">
          <p>C. {court}.</p>
          <p>P r e s e n t e.-</p>
          <div className="mt-4 space-y-1 text-slate-800">
            <p>{plaintiff}</p>
            <p className="text-xs text-slate-500">VS</p>
            <p>{defendant}</p>
            <p>{trialType}</p>
            <p>EXPEDIENTE.- {fileNumber}</p>
            <p className="mt-2 text-blue-900">PETITORIO. - DICTAMEN PERICIAL.</p>
          </div>
        </section>

        {/* Body 1: Presentation */}
        <section className="text-justify indent-12">
          <p>
            <strong>{expertName}</strong>, mexicano, mayor de edad, Licenciado en Derecho, Perito Técnico en Criminalística, Perito Técnico en Grafoscopía, Documentoscopía y Dactiloscopia, Diplomado por el Instituto Nacional Jurídico Pericial A.C. con Registro ante la Secretaria del Trabajo y Previsión Social No. INJ10033009AR9, y numero Interno MONCLCRIMI023, además por la Sociedad Internacional de Peritos en Documentoscopía A.C. También Curso Especializado en Grafoscopía Científica con enfoque desde la Neurofisiología por el Centro de Estudios Experimentales, con Registro ante la Secretaria del Trabajo y Previsión Social No. CEE2011041N4, y señalando como domicilio para oír y recibir notificaciones, el ubicado en calle Novena No. 1500 de la Colonia Cd. Deportiva de la ciudad de Monclova, Coahuila; Ante ustedes con el debido respeto comparezco y expongo:
          </p>
        </section>

        {/* Body 2: Content */}
        <section className="text-justify indent-12">
          <p>
            Que una vez que aceptado y protestado el fiel desempeño, revise minuciosamente el expediente principal radicado bajo la estadística No. <strong>{fileNumber}</strong>, formado por motivo del Juicio <strong>{trialType}</strong>, promovido por <strong>{plaintiff}</strong>, en contra de <strong>{defendant}</strong>, en especial el documento cuestionado, la firma y/o rubrica contenida en el mismo considerado como firma dubitable; y las firmas y/o rubricas consideradas como indubitables, las cuales se encuentra en las Instalaciones de este H. <strong>{court}</strong>; lugar en donde los tuve a la vista para su revisión, análisis, estudio, de toma de muestras fotográficas y microfotografías, mismas que se ilustran en el presente dictamen.
          </p>
        </section>
        
        <div className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-400 italic text-sm">
           (Fin del apartado de presentación)
        </div>

      </div>
    </div>
  );
};

export default PrefaceView;