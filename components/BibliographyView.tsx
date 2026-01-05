import React from 'react';

const BibliographyView: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full p-8 space-y-8 bg-white shadow-sm min-h-full">
        
        {/* Header Section */}
        <header className="border-b-2 border-slate-800 pb-4">
          <h2 className="text-3xl font-serif font-bold text-slate-900 uppercase">
            18. BIBLIOGRAFÍA TÉCNICA Y FORENSE
          </h2>
        </header>

        {/* Intro Text */}
        <section className="prose prose-slate max-w-none text-justify text-slate-800 leading-relaxed">
          <p>
            A continuación, se presentan las fichas técnicas de la bibliografía especializada que integra las fuentes consultadas para este dictamen. El propósito de incluir esta bibliografía en su dictamen demuestra que es un estudio sustentado en la doctrina científica y técnica más actualizada y reconocida internacionalmente en materia de Grafoscopía y Documentoscopía.
          </p>
        </section>

        <hr className="border-slate-300" />

        {/* Bibliography List */}
        <section className="space-y-6">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-slate-900">Falsedad Documental y Laboratorio Forense</h3>
            <ul className="text-slate-700 mt-2 space-y-1 text-sm">
              <li><strong>Autor:</strong> Velásquez Posada, Luis Gonzalo.</li>
              <li><strong>Editorial:</strong> Ediciones La Rocca.</li>
              <li><strong>País/Ciudad:</strong> Buenos Aires, Argentina.</li>
              <li><strong>Año:</strong> 2004.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-slate-900">La Prueba Pericial en Documentos Cuestionados: Proceso Escrito y Proceso Oral</h3>
            <ul className="text-slate-700 mt-2 space-y-1 text-sm">
              <li><strong>Autor:</strong> Arriaga González, Mónica Guadalupe.</li>
              <li><strong>Editorial:</strong> Editorial Flores.</li>
              <li><strong>País/Ciudad:</strong> México, D.F.</li>
              <li><strong>Año:</strong> 2015.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-slate-900">Firmas Auténticas y Detección de Firmas Falsas</h3>
            <ul className="text-slate-700 mt-2 space-y-1 text-sm">
              <li><strong>Autor:</strong> Balbuena Balmaceda, José Luis.</li>
              <li><strong>Editorial:</strong> C&S International / Textes & Prétextes.</li>
              <li><strong>Edición:</strong> Segunda Edición.</li>
              <li><strong>Año:</strong> 2003.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-slate-900">Análisis de textos manuscritos, firmas y alteraciones documentales</h3>
            <ul className="text-slate-700 mt-2 space-y-1 text-sm">
              <li><strong>Autor:</strong> Antón Barberá, Francisco y Méndez Baquero, Francisco.</li>
              <li><strong>Editorial:</strong> Editorial Tirant lo Blanch.</li>
              <li><strong>Edición:</strong> Segunda Edición.</li>
              <li><strong>País/Ciudad:</strong> Valencia, España.</li>
              <li><strong>Año:</strong> 1998 / 2005.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-slate-900">La escritura y la firma manuscrita como elementos coadyuvantes de la seguridad documental (Tesis Doctoral)</h3>
            <ul className="text-slate-700 mt-2 space-y-1 text-sm">
              <li><strong>Autor:</strong> Robles Llorente, Miguel Ángel.</li>
              <li><strong>Institución:</strong> Universidad Autónoma de Barcelona, Departamento de Derecho Público.</li>
              <li><strong>País/Ciudad:</strong> Barcelona, España.</li>
              <li><strong>Año:</strong> 2015.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-slate-900">Manual Práctico de Grafoscopía y Documentoscopía</h3>
            <ul className="text-slate-700 mt-2 space-y-1 text-sm">
              <li><strong>Autor:</strong> Mendoza Hernández, Natalio.</li>
              <li><strong>Editorial:</strong> Forza Corporativa.</li>
              <li><strong>Año:</strong> 2018.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-slate-900">La pericia caligráfica en la era de la digitalización</h3>
            <ul className="text-slate-700 mt-2 space-y-1 text-sm">
              <li><strong>Autor:</strong> Orellana de Castro, Rafael y Orellana de Castro, Juan Francisco.</li>
              <li><strong>Editorial:</strong> Ediciones Universidad de Salamanca / SIPDO.</li>
              <li><strong>Año:</strong> 2018.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-slate-900">Manual de Documentos Cuestionados</h3>
            <ul className="text-slate-700 mt-2 space-y-1 text-sm">
              <li><strong>Autor:</strong> González Emigdio, Anatolio.</li>
              <li><strong>Editorial:</strong> Editorial INADEJ (Instituto Nacional de Desarrollo Jurídico).</li>
              <li><strong>Edición:</strong> Tercera Edición.</li>
              <li><strong>País/Ciudad:</strong> México, D.F.</li>
              <li><strong>Año:</strong> 2013.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-slate-900">Normativa Técnica: UNE 197001:2019</h3>
            <ul className="text-slate-700 mt-2 space-y-1 text-sm">
              <li><strong>Título:</strong> Criterios generales para la elaboración de informes y dictámenes periciales.</li>
              <li><strong>Organismo:</strong> Asociación Española de Normalización (UNE).</li>
              <li><strong>Año:</strong> 2019.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-slate-900">Apuntes de Falsedad Documental</h3>
            <ul className="text-slate-700 mt-2 space-y-1 text-sm">
              <li><strong>Autor:</strong> Dirección General de la Policía (España).</li>
              <li><strong>Organismo:</strong> División de Formación y Perfeccionamiento.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-slate-900">Grafoanálisis aplicado a la tipografía</h3>
            <ul className="text-slate-700 mt-2 space-y-1 text-sm">
              <li><strong>Autor:</strong> Barón Catalán, Mª Cruz.</li>
              <li><strong>Año:</strong> 2012.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-slate-900">Grafocritica estudio de la escritura</h3>
            <ul className="text-slate-700 mt-2 space-y-1 text-sm">
              <li><strong>Autor:</strong> Félix del Val Latierro.</li>
              <li><strong>Editorial:</strong> Editorial Tecnos S.A.</li>
              <li><strong>Año:</strong> 1963.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-slate-900">Verificación de Firmas</h3>
            <ul className="text-slate-700 mt-2 space-y-1 text-sm">
              <li><strong>Autor:</strong> Reimundo Urcia Bernabé.</li>
              <li><strong>Editorial:</strong> La Rocca.</li>
              <li><strong>Año:</strong> 2009 (Primera Edición).</li>
              <li><strong>País/Ciudad:</strong> Argentina, Buenos Aires.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-slate-900">Tratado de Documentoscopía. La Falsedad Documental</h3>
            <ul className="text-slate-700 mt-2 space-y-1 text-sm">
              <li><strong>Autor:</strong> José del Picchia (h) Celso M.R. Del Picchia y Ana Laura Maura G. del Picchia.</li>
              <li><strong>Editorial:</strong> La Rocca.</li>
              <li><strong>Año:</strong> 2006 (Segunda Edición).</li>
              <li><strong>País/Ciudad:</strong> Argentina, Buenos Aires.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-slate-900">La práctica de la prueba pericial</h3>
            <ul className="text-slate-700 mt-2 space-y-1 text-sm">
              <li><strong>Autor:</strong> Víctor de Santo.</li>
              <li><strong>Editorial:</strong> DyD.</li>
              <li><strong>Año:</strong> 2025.</li>
              <li><strong>País/Ciudad:</strong> Argentina, Buenos Aires.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-slate-900">Análisis Forense de Documentos, Instrumentos de escritura Manual y sus tintas</h3>
            <ul className="text-slate-700 mt-2 space-y-1 text-sm">
              <li><strong>Autor:</strong> Magdalena Ezcurra Gondra, Goyo R. Grávalos.</li>
              <li><strong>Editorial:</strong> La Rocca.</li>
              <li><strong>Año:</strong> 2010.</li>
              <li><strong>País/Ciudad:</strong> Argentina, Buenos Aires.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-slate-900">Análisis Forense de Documentos: Sistemas de impresión y sus tintas</h3>
            <ul className="text-slate-700 mt-2 space-y-1 text-sm">
              <li><strong>Autor:</strong> Magdalena Ezcurra Gondra, Goyo R. Grávalos.</li>
              <li><strong>Editorial:</strong> La Rocca.</li>
              <li><strong>Año:</strong> 2012.</li>
              <li><strong>País/Ciudad:</strong> Argentina, Buenos Aires.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-slate-900">Sistema Grafoscopio</h3>
            <ul className="text-slate-700 mt-2 space-y-1 text-sm">
              <li><strong>Autor:</strong> Evelyn I. Aguilera Arce, Directora del Instituto de Técnicas Neuroescriturales.</li>
              <li><strong>País/Ciudad:</strong> INGPEC. Chile, Santiago.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-slate-900">Grafoscopia</h3>
            <ul className="text-slate-700 mt-2 space-y-1 text-sm">
              <li><strong>Autor:</strong> Evelyn I. Aguilera Arce, Directora del Instituto de Técnicas Neuroescriturales.</li>
              <li><strong>País/Ciudad:</strong> INGPEC. Chile, Santiago.</li>
            </ul>
          </div>

        </section>
      </div>
    </div>
  );
};

export default BibliographyView;