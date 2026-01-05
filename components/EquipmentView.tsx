import React from 'react';

const EquipmentView: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full p-8 space-y-8 bg-white shadow-sm min-h-full">
        
        {/* Header Section */}
        <header className="border-b-2 border-slate-800 pb-4">
          <h2 className="text-3xl font-serif font-bold text-slate-900 uppercase">
            4. INSTRUMENTAL Y EQUIPO
          </h2>
        </header>

        {/* Content Section */}
        <section className="space-y-8">
          
          {/* Group 1 */}
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-xl text-slate-900 mb-4 border-b border-slate-300 pb-2">
              Fuentes de Iluminación y Equipo Especial de Observación
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Lámpara de Luz Marca Sirchie Infrarroja Megamaxx 625 NM.</li>
              <li>Lámpara de Luz Infrarroja de Longitud de Onda de 950 NM.</li>
              <li>Lámpara de Luz Infrarroja de Longitud de Onda de 940 NM.</li>
              <li>Lámpara de Luz Infrarroja de Longitud de Onda de 850 NM.</li>
              <li>Lámpara de Luz UV con Longitud de Onda de 395 NM.</li>
              <li>Lámpara de Luz UV con Longitud de Onda de 420 NM.</li>
              <li>Dos Lámparas de Luz Blanca, Dos Lámparas de Luz Alógena.</li>
            </ul>
          </div>

          {/* Group 2 */}
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-xl text-slate-900 mb-4 border-b border-slate-300 pb-2">
              Equipo Fotográfico e Informático
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Escaner Marca Canon, Modelo CanoScan N670U.</li>
              <li>Cámara Digital Semi-Profesional, Sony Ciber-Shot, DSC-F282, de 8 MegaPixeles, con objetivo Carl Zeiss de 58mm. Con sensibilidad a la luz infrarroja.</li>
              <li>Cámara Digital, Sony, HandyCam; HD AVCHD, de 10.2 Megapíxeles, con objetivo Carl Zeiss, Vario Sonnar T. Con sensibilidad a la luz infrarroja.</li>
              <li>Computadora Laptop Acer Aspire One, Modelo ZG8.</li>
              <li>Impresora Marca Hp Color Laser Jet Pro MFP M176n.</li>
            </ul>
          </div>

          {/* Group 3 */}
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-xl text-slate-900 mb-4 border-b border-slate-300 pb-2">
              Equipo Instrumental Gráfico
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Plantillas de Medición, Testigo métrico, Reglas graduadas milimétricas.</li>
            </ul>
          </div>

        </section>
      </div>
    </div>
  );
};

export default EquipmentView;