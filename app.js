/* =========================================================
   Persistencia de expediente (Ruta A)
   - Auto-guardado en localStorage (best-effort)
   - Exportar / Importar expediente en JSON
   ========================================================= */

const FIXED_BIBLIO18_TEXT = "BIBLIOGRAFÍA TÉCNICA Y FORENSE\n\nA continuación, se presentan las fichas técnicas de la bibliografía especializada que integra las fuentes consultadas para este dictamen. El propósito de incluir esta bibliografía en su dictamen demuestra un estudio sustentado en la doctrina científica y técnica más actualizada y reconocida internacionalmente en materia de Grafoscopía y Documentoscopía.\n\nTítulo: Falsedad Documental y Laboratorio Forense.\nAutor: Velásquez Posada, Luis Gonzalo.\nEditorial: Ediciones La Rocca.\nPaís/Ciudad: Buenos Aires, Argentina.\nAño: 2004.\n\nAutor: Arriaga González, Mónica Guadalupe.\nTítulo: La Prueba Pericial en Documentos Cuestionados: Proceso Escrito y Proceso Oral.\nEditorial: Editorial Flores.\nPaís/Ciudad: México, D.F.\nAño: 2015.\n\nAutor: Balbuena Balmaceda, José Luis.\nTítulo: Firmas Auténticas y Detección de Firmas Falsas.\nEditorial: C&S International / Textes & Prétextes.\nEdición: Segunda Edición.\nAño: 2003.\n\nAutor: Antón Barberá, Francisco y Méndez Baquero, Francisco.\nTítulo: Análisis de textos manuscritos, firmas y alteraciones documentales.\nEditorial: Tirant lo Blanch.\nPaís/Ciudad: Valencia, España.\nAño: 1998 / 2005.\n\nAutor: Robles Llorente, Miguel Ángel.\nTítulo: La escritura y la firma manuscrita como elementos coadyuvantes de la seguridad documental (Tesis Doctoral).\nInstitución: Universidad Autónoma de Barcelona.\nAño: 2015.\n\nAutor: Mendoza Hernández, Natalio.\nTítulo: Manual Práctico de Grafoscopía y Documentoscopía.\nEditorial: Forza Corporativa.\nAño: 2018.\n\nAutor: Orellana de Castro, Rafael y Orellana de Castro, Juan Francisco.\nTítulo: La pericia caligráfica en la era de la digitalización.\nEditorial: Universidad de Salamanca / SIPDO.\nAño: 2018.\n\nAutor: González Emigdio, Anatolio.\nTítulo: Manual de Documentos Cuestionados.\nEditorial: INADEJ.\nAño: 2013.\n\nNormativa Técnica: UNE 197001:2019.\nTítulo: Criterios generales para la elaboración de informes y dictámenes periciales.\nOrganismo: Asociación Española de Normalización.\nAño: 2019.\n\nAutor: Dirección General de la Policía (España).\nTítulo: Apuntes de Falsedad Documental.\n\nAutor: Barón Catalán, Mª Cruz.\nTítulo: Grafoanálisis aplicado a la tipografía.\nAño: 2012.\n\nAutor: Félix del Val Latierro.\nTítulo: Grafocrítica: estudio de la escritura.\nEditorial: Tecnos.\nAño: 1963.\n\nAutor: Reimundo Urcia Bernabé.\nTítulo: Verificación de Firmas.\nEditorial: La Rocca.\nAño: 2009.\n\nAutor: José del Picchia (h), Celso M. R. del Picchia y Ana Laura Maura G. del Picchia.\nTítulo: Tratado de Documentoscopía. La Falsedad Documental.\nEditorial: La Rocca.\nAño: 2006.\n\nAutor: Víctor de Santo.\nTítulo: La práctica de la prueba pericial.\nEditorial: DyD.\nAño: 2025.\n\nAutor: Magdalena Ezcurra Gondra y Goyo R. Grávalos.\nTítulo: Análisis Forense de Documentos, Instrumentos de escritura Manual y sus tintas.\nEditorial: La Rocca.\nAño: 2010.\n\nAutor: Magdalena Ezcurra Gondra y Goyo R. Grávalos.\nTítulo: Análisis Forense de Documentos: Sistemas de impresión y sus tintas.\nEditorial: La Rocca.\nAño: 2012.\n\nAutor: Evelyn I. Aguilera Arce.\nTítulo: Sistema Grafoscopio.\nInstitución: INGPEC, Chile.\n\nAutor: Evelyn I. Aguilera Arce.\nTítulo: Grafoscopía.\nInstitución: INGPEC, Chile.\n";

const STORAGE_KEY = "consola_dictamen_pericial_state_v1";



const FIXED_DOC17_TEXT = "ANÁLISIS DOCUMENTOSCOPIA

	La Documentoscopía es la disciplina auxiliar de la criminalística que se encarga del estudio integral de los documentos para determinar su autenticidad o falsedad, así como para identificar posibles alteraciones o modificaciones. Etimológicamente, proviene de las raíces latinas doceo-docui-ductum, que significan \"enseñar, informar o probar\", definiéndose técnicamente como el estudio de cualquier cuerpo físico capaz de ser alterado o manipulado.

1. Elementos Constitutivos del Documento
Para que el perito analice un documento, debe considerar cuatro elementos fundamentales:
•	El Soporte: Generalmente papel, compuesto por fibras de celulosa.
•	Elementos Anexos: Medidas de seguridad como fibras ópticas, marcas de agua, hilos de seguridad y tintas especiales.
•	El Texto: Manuscrito, mecanografiado o impreso.
•	La Firma: El elemento que vincula el contenido con el autor.

2. La Técnica: ¿Cómo se analizan las alteraciones?
La técnica documentoscópica se divide en dos fases principales: la inspección preliminar (organoléptica) y el examen sistemático instrumental.
•	Detección de Supresiones (Borrados y Lavados): El falsificador intenta eliminar texto mediante métodos mecánicos (raspado) o químicos (lavado). El perito utiliza luz ultravioleta, para revelar manchas de reacción química invisibles a luz normal y luz rasante para detectar el erizamiento de las fibras del papel causado por la abrasión.
•	Detección de Adiciones (Retoques e Interpolaciones): Se busca texto agregado posteriormente. Aquí se emplea el Análisis Multiespectral (VSC); al aplicar radiación infrarroja (IR), se pueden diferenciar tintas que a simple vista parecen iguales pero tienen distinta composición química, haciendo que una sea transparente y la otra permanezca visible.
•	Examen de Indentaciones: Para leer lo que se escribió en hojas superiores (escritura latente), se utiliza el ESDA (Aparato de Detección Electrostática), que revela surcos invisibles mediante carga eléctrica y polvos reveladores.

	El documento no solo debe contener un pensamiento, sino tener relevancia jurídica para ser objeto de este estudio.

•	Falsedad Material vs. Ideológica: La documentoscopía se centra en la falsedad material (alteración física del documento), mientras que la ideológica (contenido falso en documento auténtico) suele ser de difícil comprobación técnica salvo por el análisis de contradicciones en el texto.
•	Integridad del Soporte: Cualquier manipulación afecta el \"brillo\" y la \"opacidad\" del papel, elementos que el perito mide con precisión.
";
// Textos base (Grafocinética)
const GRAFOCINETICA_OPT_1 = "Como resultado del Análisis Grafocinético realizado, se determinó que la génesis gráfica y el dinamismo escritural (velocidad, presión y tensión de línea) de la firma cuestionada guardan una correspondencia cualitativa con los hábitos identificados en el material indubitable. Al verificarse que los automatismos y gestos-tipo analizados se sitúan plenamente dentro del Patrón de Variaciones Posibles (PVP) del titular, se concluye que el grafismo dubitado SÍ PROCEDE DEL PUÑO Y LETRA de la persona a quien se le atribuye, tratándose de una ejecución espontánea y habitual.";
const GRAFOCINETICA_OPT_2 = "Derivado del estudio de los movimientos generadores y el rastro del trayecto en el Análisis Grafocinético, se advierten divergencias morfo-estructurales y dinámicas significativas entre la firma cuestionada y las muestras de cotejo. La presencia de signos de ejecución lenta, tales como paradas inusuales, vacilaciones y una presión uniforme ajena al biorritmo del titular, denota una falta de espontaneidad propia de la imitación. En virtud de estos hallazgos, se determina que la firma dubitada NO PROCEDE DEL PUÑO Y LETRA de la persona a quien se le atribuye.";
const GRAFOCINETICA_OPT_3 = "Atendiendo a las limitaciones del material disponible (escasez de riqueza gráfica / falta de idoneidad en las muestras de cotejo), este perito manifiesta que no resulta técnicamente factible reconstruir la génesis gráfica ni evaluar con certeza el dinamismo del grafismo cuestionado. Al no contar con elementos de juicio suficientes para establecer una relación de uniprocedencia o exclusión bajo los estándares del método grafocinético, se declara una IMPOSIBILIDAD MATERIAL para determinar si el grafismo analizado procede o no del puño y letra de la persona en mención.";



/* =========================================================
   Conclusión automática para Grafocinética (Cap. 14)
   Depende de: state.metadata.hipotesis
   ========================================================= */
function getHipotesisKey() {
  const h = (state?.metadata?.hipotesis || "").toString().trim().toUpperCase();
  return h;
}
function getGrafocineticaConclusionText() {
  const h = getHipotesisKey();
  // Mapeo tolerante
  if (h.includes("CORRESPONDE")) return { title: "Opción 1: Correspondencia de Autoría (Firma Auténtica)", body: GRAFOCINETICA_OPT_1 };
  if (h.includes("NO CORRESPONDE") || h.includes("NOCORRESPONDE")) return { title: "Opción 2: Discrepancia de Autoría (Firma Falsa)", body: GRAFOCINETICA_OPT_2 };
  if (h.includes("IMPOSIBILIDAD") || h.includes("NO SE PUEDE") || h.includes("INDETERMIN")) return { title: "Opción 3: Imposibilidad Técnica o Material", body: GRAFOCINETICA_OPT_3 };
  // Sin hipótesis definida: muestra una leyenda
  return { title: "Conclusión", body: "Seleccione una “Hipótesis Pericial Preliminar” en 0. Datos Generales para generar automáticamente la conclusión." };
}

let __saveTimer = null;

function setStorageStatus(msg) {
  const el = document.getElementById("storage-status");
  if (el) el.textContent = msg || "";
}

function safeStringify(obj) {
  return JSON.stringify(obj, (k, v) => {
    // Evita ciclos por seguridad (no deberían existir)
    if (k === "__proto__") return undefined;
    return v;
  });
}

function saveStateNow() {
  try {
    const raw = safeStringify(state);
    localStorage.setItem(STORAGE_KEY, raw);
    setStorageStatus("Auto-guardado: OK");
  } catch (e) {
    // Suele ocurrir por cuota excedida (muchas fotos en DataURL)
    console.warn("No se pudo guardar en localStorage:", e);
    setStorageStatus("Auto-guardado: NO (cuota excedida o restringida). Use Exportar JSON.");
  }
}

function scheduleSaveState() {
  try {
    if (__saveTimer) clearTimeout(__saveTimer);
    __saveTimer = setTimeout(saveStateNow, 350);
  } catch (_) {}
}

function loadStateFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return false;
    state = parsed;
    setStorageStatus("Expediente recuperado desde localStorage.");
    return true;
  } catch (e) {
    console.warn("No se pudo leer localStorage:", e);
    setStorageStatus("No se pudo recuperar el expediente guardado.");
    return false;
  }
}

function downloadJSON(filename, obj) {
  const blob = new Blob([safeStringify(obj)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function wireExpedienteControls() {
  const btnExport = document.getElementById("btn-export-json");
  const btnImport = document.getElementById("btn-import-json");
  const btnReset  = document.getElementById("btn-reset-expediente");
  const input     = document.getElementById("import-json-input");

  if (btnExport) {
    btnExport.addEventListener("click", () => {
      const safeName = (state?.metadata?.expediente || "expediente").toString().replace(/[^\w\-]+/g, "_");
      downloadJSON(`expediente_${safeName}.json`, state);
      setStorageStatus("Expediente exportado (JSON).");
    });
  }

  if (btnImport && input) {
    btnImport.addEventListener("click", () => input.click());
    input.addEventListener("change", async (ev) => {
      const file = ev.target.files && ev.target.files[0];
      if (!file) return;

      try {
        const text = await file.text();
        const parsed = JSON.parse(text);
        if (!parsed || typeof parsed !== "object") throw new Error("JSON inválido");
        state = parsed;

        // Re-render
        try { renderNav(); } catch (_) {}
        try { loadChapter(activeChapter || "general"); } catch (_) {}
        saveStateNow();

        setStorageStatus("Expediente importado correctamente.");
      } catch (e) {
        console.error(e);
        alert("No se pudo importar el expediente. Verifique que el archivo sea un JSON válido generado por esta aplicación.");
        setStorageStatus("Error al importar expediente.");
      } finally {
        input.value = "";
      }
    });
  }

  if (btnReset) {
    btnReset.addEventListener("click", () => {
      const ok = confirm("¿Desea restablecer y crear un nuevo expediente? Esto reemplazará el expediente actual en pantalla.");
      if (!ok) return;

      // Restablece recargando la página sin storage (best-effort)
      try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
      location.reload();
    });
  }
}

// Guardado general por interacción (inputs/selects)
document.addEventListener("input", () => scheduleSaveState(), true);
document.addEventListener("change", () => scheduleSaveState(), true);

const apiKey = "";
        

function assertGeminiKey() {
  try {
    if (!apiKey || String(apiKey).trim().length < 10) {
      alert("No hay API Key configurada para el Consultor IA (Gemini). Configure apiKey en app.js o implemente un backend/proxy.");
      return false;
    }
    return true;
  } catch (_) { return false; }
}

const GEMINI_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent";

        // APP STATE
        let state = {
            metadata: {
                expediente: "1234/2024",
                juez: "H. Juzgado Primero Civil",
                actor: "Juan Antonio Estrada",
                demandado: "Inmobiliaria Monclova S.A.",
                juicio: "Ordinario Civil",
                fecha_toma_muestra: "15 de Enero de 2025",
                perito: "Lic. Perito Experto",
                doc_cantidad: "1",
                doc_tipo: "Pagaré", 
                doc_impresion: "Impresión Offset",
                doc_numero: "1/1",
                doc_fecha: "01 de Diciembre de 2023",
                indub_paginas: "5",
                indub_fecha: "20 de Enero de 2025",
                indub_domicilio: "Calle de la Justicia No. 100, Centro",
                indub_foja: "34 vuelta",
                hipotesis: "CORRESPONDE al demandado" 
            },
            materias: {
                "Grafoscopía": true,
                "Documentoscopía": true,
                "Fotografía Forense": false,
                "Grafometría": false,
                "Caligrafía": false,
                "Grafología": false,
                "Dactiloscopia": false
            },
            interrogatorio: { actora: [], demandada: [] },
            chapters: {
                cuestionamientos_respuestas: {}, // respuestas por pregunta

                estudio: "",
                conclusion: "",
                analisis_microscopico: "", // For Momentos Gráficos manual text
                analisis_inclinacion: "",  // For Inclinación manual text (NEW)
                desenv_cuestionado: "",    // Desenvolvimiento Escritural - Doc Cuestionado (NEW)
                desenv_indubitable: "",     // Desenvolvimiento Escritural - Doc Indubitable (NEW)
                grafocinetico_cuestionado: "", // Grafocinético - Doc Cuestionado (NEW)
                grafocinetico_indubitable: ""  // Grafocinético - Doc Indubitable (NEW)
            },
            cotejo: { 
                cuestionada: [5,5,5,5,5,5], 
                indubitable: [5,5,5,5,5,5], 
                veredicto: "no_definido" 
            },
            chartLabels: ['Velocidad', 'Presión', 'Angulosidad', 'Inclinación', 'Dimensión', 'Cohesión'],
            morphologyTable: [
                { id: 'dimension', label: 'Dimensión (Altura)', val_indub: '', val_dub: '', obs: '' },
                { id: 'direccion', label: 'Dirección de la línea', val_indub: '', val_dub: '', obs: '' },
                { id: 'inclinacion', label: 'Inclinación', val_indub: '', val_dub: '', obs: '' },
                { id: 'presion', label: 'Presión Efectiva', val_indub: '', val_dub: '', obs: '' },
                { id: 'velocidad', label: 'Velocidad de ejecución', val_indub: '', val_dub: '', obs: '' },
                { id: 'ataque', label: 'Punto de Ataque', val_indub: '', val_dub: '', obs: '' },
                { id: 'remates', label: 'Remates (Finales)', val_indub: '', val_dub: '', obs: '' },
                { id: 'enlaces', label: 'Enlaces (Coligamento)', val_indub: '', val_dub: '', obs: '' },
                { id: 'gesto', label: 'Gesto Gráfico (Idiotismo)', val_indub: '', val_dub: '', obs: '' }
            ],
            photos: {
                cuestionado: [],
                indubitable: [],
                micro_cuestionado: [],      // Momentos Graficos C
                micro_indubitable: [],      // Momentos Graficos I
                micro_inclinacion_c: [],    // Inclinacion C (NEW)
                micro_inclinacion_i: [],     // Inclinacion I (NEW)
                desenv_cuestionado: [],   // Desenvolvimiento - Doc Cuestionado (NEW)
                desenv_indubitable: [],   // Desenvolvimiento - Doc Indubitable (NEW)
                grafocinetico_cuestionado: [], // Grafocinético - Doc Cuestionado (NEW)
                grafocinetico_indubitable: []  // Grafocinético - Doc Indubitable (NEW)
            
            }
        };

        const navItems = [
            { id: 'general', title: '0. Datos Generales', icon: '📋' },
            { id: 'planteamiento', title: '1. Planteamiento', icon: '📍' },
            { id: 'materias', title: '2. Materias', icon: '⚖️' },
            { id: 'material', title: '3. Material', icon: '🔬' },
            { id: 'interrogatorio-cap', title: '4. Interrogatorio', icon: '❓' },
            { id: 'metodologia', title: '5. Metodología', icon: '⚙️' },
            { id: 'metodos', title: '6. Método', icon: '📝' },
            { id: 'tecnicas', title: '7. Técnicas', icon: '🔍' },
            { id: 'marco', title: '8. Marco Teórico', icon: '📚' },
            { id: 'estudio_realizado', title: '9. Estudio Técnico', icon: '📝' },
            { id: 'doc_cuestionado', title: '10. Documento Cuestionado', icon: '🧐' },
            { id: 'doc_indubitable', title: '11. Documento Indubitable', icon: '✅' }, 
            { id: 'analisis_morfologico', title: '12. Análisis Morfológico del Trazado', icon: '📊' }, 
            { id: 'analisis_microscopico', title: '13. Análisis Microscópicos', icon: '🔬' }, 
            { id: 'analisis_grafocinetico', title: '14. Análisis Grafocinético', icon: '🌀' }, 
            { id: 'analisis_estructural_orden_general', title: '15. ANÁLISIS ESTRUCTURAL DE ORDEN GENERAL', icon: '🧱' },
            { id: 'analisis_tecnico_integral', title: '16. ANÁLISIS TÉCNICO INTEGRAL Y VALORACIÓN DE LA PERSONALIDAD ESCRITURAL', icon: '🧠' },
            { id: 'analisis_documentoscopia', title: '17. ANÁLISIS DOCUMENTOSCOPIA', icon: '📄' },
            { id: 'bibliografia_tecnica_forense', title: '18. BIBLIOGRAFÍA TÉCNICA Y FORENSE', icon: '📚' }, 
            { id: 'cuestionamientos', title: '19. CUESTIONAMIENTOS PRESENTADOS POR LAS PARTES', icon: '❓' } 
        ];

        let radarChartInstance = null;
        let recognition = null;

        // --- HELPERS ---
        function updateMetadata(key, value) { state.metadata[key] = value; }
        
        function getMorphologyConclusionHTML(isForPDF = false) {
            const hipotesis = state.metadata.hipotesis;
            const demandado = state.metadata.demandado || "[Demandado]";
            const h = (t) => isForPDF ? `<strong>${t}</strong>` : `<span class="font-bold">${t}</span>`;
            let title, body, bgClass, borderClass, titleColor;

            if (hipotesis === 'CORRESPONDE al demandado') {
                title = "Opción A: Conclusión de Correspondencia (Positiva)";
                bgClass = isForPDF ? "#ecfdf5" : "bg-emerald-50"; 
                borderClass = isForPDF ? "2px solid #059669" : "border-emerald-500";
                titleColor = "#047857";
                body = `CONCLUSIÓN DEL ANÁLISIS MORFOLÓGICO: Como resultado de un estudio profundo, minucioso y con el rigor especializado que la materia exige, se concluye que la firma señalada como dubitada <strong>SÍ PROVIENE</strong> del puño y letra de la persona a quien se le atribuye ${h(demandado)}. Lo anterior se fundamenta en la identidad total observada durante el proceso de cotejo técnico, estableciendo una relación de procedencia directa y fehaciente entre la grafía cuestionada y el hábito gráfico del suscriptor.`;
            } else if (hipotesis === 'NO CORRESPONDE al demandado') {
                title = "Opción B: Conclusión de No Correspondencia (Negativa)";
                bgClass = isForPDF ? "#fef2f2" : "bg-red-50"; 
                borderClass = isForPDF ? "2px solid #dc2626" : "border-red-500";
                titleColor = "#b91c1c";
                body = `CONCLUSIÓN DEL ANÁLISIS MORFOLÓGICO: Como resultado de un estudio profundo, minucioso y con el rigor especializado que la materia exige, se concluye que la firma señalada como dubitada <strong>NO PROVIENE</strong> del puño y letra de la persona a quien se le atribuye ${h(demandado)}. Lo anterior se fundamenta en las discrepancias formales e insuperables detectadas durante el proceso de cotejo técnico, determinando que la grafía cuestionada corresponde a un origen gráfico distinto y es ajena a la ejecución del suscriptor.`;
            } else {
                title = "Opción C: Conclusión de Imposibilidad Técnica / Material";
                bgClass = isForPDF ? "#fffbeb" : "bg-amber-50"; 
                borderClass = isForPDF ? "2px solid #d97706" : "border-amber-500";
                titleColor = "#b45309"; 
                body = `CONCLUSIÓN DEL ANÁLISIS MORFOLÓGICO: Como resultado de un estudio profundo, minucioso y con el rigor especializado que la materia exige, se determina que existe una <strong>IMPOSIBILIDAD TÉCNICA</strong> para establecer si la firma señalada como dubitada PROVIENE O NO del puño y letra de la persona a quien se le atribuye. Esta determinación obedece a que el material sometido a dictamen no reúne los requisitos técnicos mínimos de idoneidad o suficiencia necesarios para realizar un cotejo fidedigno, lo que impide a este perito emitir un pronunciamiento categórico con la certeza científica que el presente análisis requiere.`;
            }

            if (isForPDF) {
                return `<div style="margin-top: 30px; border: ${borderClass}; background-color: ${bgClass}; padding: 15px;"><h4 style="color: ${titleColor}; font-weight: bold; text-transform: uppercase; margin-bottom: 10px;">${title}</h4><p style="text-align: justify; font-size: 10pt;">${body}</p></div>`;
            } else {
                return `<div class="mt-12 p-6 rounded-xl border-l-8 ${borderClass} ${bgClass} shadow-md transition-all duration-500"><h4 class="font-bold text-lg uppercase mb-4" style="color: ${titleColor}">${title}</h4><p class="text-justify text-slate-700 leading-relaxed font-serif">${body}</p></div>`;
            }
        }

        function getDesenvConclusionHTML(isForPDF = false) {
            const hipotesis = (state.metadata.hipotesis || "").toString().trim();
            const h = (t) => isForPDF ? `<strong>${t}</strong>` : `<span class="font-bold">${t}</span>`;

            const intro = `
                <p class="${isForPDF ? '' : 'text-slate-700'} mb-4">
                    Para la redacción de las conclusiones de su dictamen pericial ante el Juez, he estructurado tres opciones basadas en el análisis dEl Análisis Estructural Particular o del Gesto Gráfico es la fase más profunda y determinante de la grafoscopía forense. Mientras que el análisis general observa la "fachada" de la escritura, esta técnica se adentra en las "huellas digitales del grafismo": aquellos hábitos subconscientes, automáticos e invisibles para el ojo inexperto que individualizan a un autor de manera única.tomatismos y la génesis gráfica observada guardan una equivalencia cualitativa con el material de cotejo, situándose plenamente dentro de su Patrón de Variaciones Posibles (PVP). Por lo tanto, se concluye que el grafismo analizado <strong>SÍ PROCEDE DEL PUÑO Y LETRA</strong> de la persona a quien se le atribuye, tratándose de una ejecución espontánea y habitual.`;

            const opt2Title = "Opción 2: Conclusión de Discrepancia (Falsedad)";
            const opt2Body = `Derivado del estudio del desenvolvimiento escritural, se advierten discrepancias significativas en la génesis gráfica y la dinámica motriz de la firma cuestionada respecto a las constantes identificadas en las muestras indubitables. La presencia de signos de ejecución lenta, tales como paradas inusuales y vacilaciones en el rastro del trayecto, denota una falta de espontaneidad ajena al automatismo habitual del titular. En consecuencia, se determina que la firma dubitada <strong>NO PROCEDE DEL PUÑO Y LETRA</strong> de la persona a quien se le atribuye, siendo producto de una ejecución por imitación.`;

            const opt3Title = "Opción 3: Imposibilidad Técnica o Material";
            const opt3Body = `Atendiendo a las limitaciones materiales del espécimen analizado (como la escasez de riqueza gráfica o la falta de idoneidad en las muestras de cotejo), no resulta técnicamente factible reconstruir la génesis gráfica ni evaluar con certeza el dinamismo del desenvolvimiento escritural. Ante la carencia de elementos de juicio suficientes para establecer una relación de identidad o exclusión con el rigor científico necesario, se manifiesta una <strong>IMPOSIBILIDAD MATERIAL</strong> para determinar si el grafismo analizado procede o no del puño y letra de la persona en mención.`;

            let title = opt3Title, body = opt3Body;
            // Mapeo conforme al campo "Hipótesis Pericial Preliminar" (Capítulo 0)
            if (hipotesis === "CORRESPONDE al demandado") { title = opt1Title; body = opt1Body; }
            else if (hipotesis === "NO CORRESPONDE al demandado") { title = opt2Title; body = opt2Body; }
            else if (hipotesis === "IMPOSIBILIDAD TÉCNICA O MATERIAL") { title = opt3Title; body = opt3Body; }

            const boxStyle = isForPDF
                ? `style="background:#f8fafc;border:2px solid #0f172a;border-radius:14px;padding:16px;margin-top:18px;"`
                : `class="mt-6 bg-slate-50 border-2 border-slate-900/10 rounded-2xl p-6"`;

            return `
                <div ${boxStyle}>
                    <h4 class="${isForPDF ? '' : 'text-slate-900'} font-bold tracking-wide uppercase mb-3">CONCLUSIÓN</h4>
                    ${intro}
                    <div class="${isForPDF ? '' : 'bg-white'} rounded-xl ${isForPDF ? '' : 'border border-slate-200'} p-4">
                        <div class="font-bold mb-2">${title}</div>
                        <p class="${isForPDF ? '' : 'text-slate-800'} leading-relaxed">${body}</p>
                    </div>
                </div>
            `;
        }

        function getMicroscopicConclusionHTML(isForPDF = false) {
            const hipotesis = state.metadata.hipotesis;
            const demandado = state.metadata.demandado || "[Demandado]";
            const h = (t) => isForPDF ? `<strong>${t}</strong>` : `<span class="font-bold">${t}</span>`;
            let title, body, bgClass, borderClass, titleColor;

            if (hipotesis === 'CORRESPONDE al demandado') {
                title = "Opción 1: Conclusión Positiva (Autenticidad)";
                bgClass = isForPDF ? "#ecfdf5" : "bg-emerald-50"; 
                borderClass = isForPDF ? "2px solid #059669" : "border-emerald-500";
                titleColor = "#047857";
                body = `Tras el estudio técnico-comparativo, se determina que los momentos escriturales identificados en la firma cuestionada se encuentran plenamente representados y comprendidos dentro del Patrón de Variaciones Posibles (PVP) del titular, guardando una correspondencia cualitativa con las muestras indubitadas. Al existir una equivalencia gestual en los automatismos, puntos de ataque y nexos, se concluye que el grafismo dubitado <strong>SÍ PROCEDE DEL PUÑO Y LETRA</strong> de la persona a quien se le atribuye ${h(demandado)}, siendo una ejecución espontánea y genuina.`;
            } else if (hipotesis === 'NO CORRESPONDE al demandado') {
                title = "Opción 2: Conclusión Negativa (Falsedad)";
                bgClass = isForPDF ? "#fef2f2" : "bg-red-50"; 
                borderClass = isForPDF ? "2px solid #dc2626" : "border-red-500";
                titleColor = "#b91c1c";
                body = `Derivado del análisis gramográfico, se advierte que los momentos escriturales de la firma cuestionada presentan una fragmentación y morfología que exceden las variaciones naturales observadas en el material indubitable. Al detectarse gestos-tipo y hábitos de ejecución ajenos a la dinámica motora del titular, así como signos de falta de espontaneidad, se concluye que la firma dubitada <strong>NO CORRESPONDE AL PUÑO Y LETRA</strong> de la persona a quien se le atribuye ${h(demandado)}, tratándose de una ejecución por imitación.`;
            } else {
                title = "Opción 3: Imposibilidad Técnica o Material";
                bgClass = isForPDF ? "#fffbeb" : "bg-amber-50"; 
                borderClass = isForPDF ? "2px solid #d97706" : "border-amber-500";
                titleColor = "#b45309"; 
                body = `Debido a las limitaciones intrínsecas del material disponible (como la falta de idoneidad o insuficiencia de las muestras), no es posible establecer de manera fehaciente si los momentos escriturales y demás gestos-tipo se sitúan dentro del rango de variabilidad del autor. Por lo anterior, existe una <strong>IMPOSIBILIDAD TÉCNICA</strong> para determinar si la firma cuestionada corresponde o no al puño y letra de la persona en mención, debiendo prevalecer el criterio de reserva pericial ante la carencia de elementos de juicio suficientes.`;
            }

            if (isForPDF) {
                return `<div style="margin-top: 30px; border: ${borderClass}; background-color: ${bgClass}; padding: 15px;"><h4 style="color: ${titleColor}; font-weight: bold; text-transform: uppercase; margin-bottom: 10px;">${title}</h4><p style="text-align: justify; font-size: 10pt;">${body}</p></div>`;
            } else {
                return `<div class="mt-12 p-6 rounded-xl border-l-8 ${borderClass} ${bgClass} shadow-md transition-all duration-500"><h4 class="font-bold text-lg uppercase mb-4" style="color: ${titleColor}">${title}</h4><p class="text-justify text-slate-700 leading-relaxed font-serif">${body}</p></div>`;
            }
        }

        // --- NEW HELPER: INCLINACION CONCLUSION ---
        function getInclinacionConclusionHTML(isForPDF = false) {
            const hipotesis = state.metadata.hipotesis;
            const demandado = state.metadata.demandado || "[Demandado]";
            const h = (t) => isForPDF ? `<strong>${t}</strong>` : `<span class="font-bold">${t}</span>`;
            let title, body, bgClass, borderClass, titleColor;

            if (hipotesis === 'CORRESPONDE al demandado') {
                title = "Opción A: Conclusión de Correspondencia (Autenticidad)";
                bgClass = isForPDF ? "#ecfdf5" : "bg-emerald-50"; 
                borderClass = isForPDF ? "2px solid #059669" : "border-emerald-500";
                titleColor = "#047857";
                body = `Tras el análisis detallado de la inclinación o versión axial, se determinó que los ángulos de desviación de los trazos magistrales en la firma cuestionada guardan una correspondencia rítmica y constante con los hábitos identificados en el material indubitable. Al no exceder el Patrón de Variaciones Posibles (PVP) del titular y presentar un paralelismo grammático equivalente en la base de la caja de escritura, se concluye que el grafismo analizado <strong>SÍ PROCEDE DEL PUÑO Y LETRA</strong> de la persona a quien se le atribuye ${h(demandado)}, tratándose de una ejecución espontánea y habitual.`;
            } else if (hipotesis === 'NO CORRESPONDE al demandado') {
                title = "Opción B: Conclusión de Discrepancia (Falsedad)";
                bgClass = isForPDF ? "#fef2f2" : "bg-red-50"; 
                borderClass = isForPDF ? "2px solid #dc2626" : "border-red-500";
                titleColor = "#b91c1c";
                body = `Derivado de la compulsa técnica de la inclinación, se advierten divergencias morfo-estructurales significativas en los valores angulares de la firma cuestionada respecto a las constantes del material de cotejo. La ausencia de un paralelismo grammático coherente y la presencia de variaciones de inclinación erráticas en la limitante basilar denotan una ejecución lenta y precavida, ajena al automatismo motor del titular; por lo tanto, se determina que la firma dubitada <strong>NO PROCEDE DEL PUÑO Y LETRA</strong> de la persona a quien se le atribuye ${h(demandado)}.`;
            } else {
                title = "Opción C: Conclusión de Imposibilidad Técnica (Material insuficiente)";
                bgClass = isForPDF ? "#fffbeb" : "bg-amber-50"; 
                borderClass = isForPDF ? "2px solid #d97706" : "border-amber-500";
                titleColor = "#b45309"; 
                body = `Atendiendo a las limitaciones intrínsecas del material disponible para estudio (como la escasa riqueza gráfica o la falta de idoneidad de las muestras), no resulta técnicamente factible realizar una valoración fidedigna de la versión inclinación y el alineamiento básico de la firma cuestionada. En virtud de que no se cuenta con elementos suficientes para establecer una relación de identidad o exclusión, este perito manifiesta una <strong>IMPOSIBILIDAD MATERIAL</strong> para determinar si el grafismo analizado procede o no del puño y letra de la persona en mención.`;
            }

            if (isForPDF) {
                return `<div style="margin-top: 30px; border: ${borderClass}; background-color: ${bgClass}; padding: 15px;"><h4 style="color: ${titleColor}; font-weight: bold; text-transform: uppercase; margin-bottom: 10px;">${title}</h4><p style="text-align: justify; font-size: 10pt;">${body}</p></div>`;
            } else {
                return `<div class="mt-12 p-6 rounded-xl border-l-8 ${borderClass} ${bgClass} shadow-md transition-all duration-500"><h4 class="font-bold text-lg uppercase mb-4" style="color: ${titleColor}">${title}</h4><p class="text-justify text-slate-700 leading-relaxed font-serif">${body}</p></div>`;
            }
        }

        // --- Standard Helpers ---
        function startDictation(inputId, key) {
            if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) { alert("Tu navegador no soporta dictado por voz. Por favor usa Google Chrome."); return; }
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; const recognition = new SpeechRecognition(); recognition.lang = 'es-ES'; recognition.interimResults = false; recognition.maxAlternatives = 1; const btn = document.getElementById(`btn-mic-${key}`);
            recognition.onstart = () => { if(btn) btn.classList.add('recording-pulse'); };
            recognition.onresult = (event) => { const transcript = event.results[0][0].transcript; const finalValue = transcript.charAt(0).toUpperCase() + transcript.slice(1); const input = document.getElementById(inputId); if (input) { input.value = finalValue; updateMetadata(key, finalValue); } };
            recognition.onend = () => { if(btn) btn.classList.remove('recording-pulse'); }; recognition.onerror = (event) => { console.error("Error dictado", event.error); if(btn) btn.classList.remove('recording-pulse'); }; recognition.start();
        }
        function getDocRef(singular = "el documento cuestionado", plural = "los documentos cuestionados") { const n = parseInt(state.metadata.doc_cantidad) || 1; return n > 1 ? plural : singular; }
        function getFullDocDesc() { const m = state.metadata; const n = parseInt(m.doc_cantidad) || 1; const tipo = m.doc_tipo || "Documento"; const num = m.doc_numero || "--"; const fecha = m.doc_fecha || "--"; const docNoun = n > 1 ? "los documentos" : "el documento"; return `${docNoun} de tipo ${tipo}, identificados bajo el número ${num}, de fecha ${fecha}`; }
        function getMateriasSeleccionadas() { return Object.keys(state.materias).filter(key => state.materias[key]); }
        function renderNav() { const list = document.getElementById('nav-list'); list.innerHTML = navItems.map(item => `<li><button onclick="loadChapter('${item.id}')" id="btn-${item.id}" class="chapter-btn w-full text-left px-6 py-4 text-xs font-bold uppercase text-blue-200/70 hover:text-white transition flex items-center group"><span class="mr-4 text-lg opacity-70 group-hover:opacity-100 transition">${item.icon}</span> ${item.title}</button></li>`).join(''); }
        function loadChapter(id) { document.querySelectorAll('.chapter-btn').forEach(b => b.classList.remove('active')); document.getElementById(`btn-${id}`)?.classList.add('active'); document.getElementById('view-title').innerText = navItems.find(n => n.id === id).title.toUpperCase(); const container = document.getElementById('content-display'); container.style.opacity = '0'; setTimeout(() => { if (id === 'general') renderGeneral(container); else if (id === 'planteamiento') renderPlanteamiento(container); else if (id === 'materias') renderMaterias(container); else if (id === 'material') renderMaterial(container); else if (id === 'interrogatorio-cap') renderInterrogatorioCap(container); else if (id === 'metodologia') renderMetodologia(container); else if (id === 'metodos') renderMetodo(container); else if (id === 'tecnicas') renderTecnicas(container); else if (id === 'marco') renderMarco(container); else if (id === 'estudio_realizado') renderEstudioRealizado(container); else if (id === 'doc_cuestionado') renderDocCuestionado(container); else if (id === 'doc_indubitable') renderDocIndubitable(container); else if (id === 'analisis_morfologico') renderAnalisisMorfologico(container); else if (id === 'analisis_microscopico') renderAnalisisMicroscopico(container); else if (id === 'analisis_grafocinetico') renderAnalisisGrafocinetico(container); else if (id === 'analisis_estructural_orden_general') renderAnalisisEstructuralOrdenGeneral(container); else if (id === 'analisis_tecnico_integral') renderAnalisisTecnicoIntegral(container); else if (id === 'analisis_documentoscopia') renderAnalisisDocumentoscopia(container); else if (id === 'bibliografia_tecnica_forense') renderBibliografiaTecnicaForense(container); else if (id === 'cuestionamientos') renderCuestionamientos(container); else if (id === 'conclusion') renderConclusion(container); else renderTextEditor(container, id); container.style.opacity = '1'; container.style.transition = 'opacity 0.3s ease-in-out'; }, 150); }

        function renderGeneral(container) {
             const labels = { expediente: "Expediente", juez: "Juzgado", actor: "Actor", demandado: "Demandado", juicio: "Juicio", fecha_toma_muestra: "Fecha de Toma de Muestras", perito: "Perito" };
            const createInputWithMic = (key, label, value, colorClass = "blue", isNumber = false) => {
                let borderClass, textClass, micClass, bgClass;
                if (colorClass === "red") { borderClass = "border-red-200 focus:ring-red-500"; bgClass = "bg-red-50/30"; textClass = "text-red-400 group-hover:text-red-600"; micClass = "text-red-300 hover:text-red-600"; } 
                else if (colorClass === "blue") { borderClass = "border-blue-200 focus:ring-blue-500"; bgClass = "bg-blue-50/30"; textClass = "text-blue-500 group-hover:text-blue-700"; micClass = "text-blue-300 hover:text-blue-600"; }
                else if (colorClass === "purple") { borderClass = "border-purple-200 focus:ring-purple-500"; bgClass = "bg-purple-50/30"; textClass = "text-purple-500 group-hover:text-purple-700"; micClass = "text-purple-300 hover:text-purple-600"; }
                else { borderClass = "border-slate-200 focus:ring-blue-500"; bgClass = "bg-slate-50"; textClass = "text-blue-400 group-hover:text-blue-600"; micClass = "text-slate-400 hover:text-blue-600"; }
                return `<div class="relative group"><label class="block text-[10px] font-bold uppercase ${textClass} mb-1.5 transition">${label}</label><div class="relative"><input type="${isNumber ? 'text' : 'text'}" id="input-${key}" value="${value}" onchange="updateMetadata('${key}', this.value)" class="w-full p-3 pr-10 ${borderClass} ${bgClass} border rounded-xl text-sm outline-none focus:ring-2 transition text-slate-700 font-medium placeholder-slate-300"><button id="btn-mic-${key}" onclick="startDictation('input-${key}', '${key}')" class="absolute right-3 top-1/2 transform -translate-y-1/2 ${micClass} transition p-1 rounded-full hover:bg-slate-200" title="Dictar por voz"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg></button></div></div>`;
            };
            container.innerHTML = `<div class="max-w-5xl mx-auto space-y-8"><div class="material-card"><h3 class="font-bold text-blue-900 mb-8 border-b border-blue-100 pb-4 uppercase text-xs tracking-widest flex items-center"><span class="bg-blue-100 text-blue-600 p-1.5 rounded mr-3">📂</span> Sincronización Judicial</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6">${Object.keys(labels).map(key => createInputWithMic(key, labels[key], state.metadata[key])).join('')}</div></div><div class="material-card border-l-4 border-red-500"><h3 class="font-bold text-red-700 mb-8 border-b border-red-100 pb-4 uppercase text-xs tracking-widest flex items-center"><span class="bg-red-100 text-red-600 p-1.5 rounded mr-3">📄</span> Detalles del Documento Cuestionado (Dubitado)</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6">${createInputWithMic("doc_cantidad", "Cantidad de Documentos", state.metadata.doc_cantidad, "red", true)}${createInputWithMic("doc_tipo", "Tipo de Documento (Nombre)", state.metadata.doc_tipo, "red")}<div class="relative group"><label class="block text-[10px] font-bold uppercase text-red-400 group-hover:text-red-600 mb-1.5 transition">Sistema de Impresión</label><div class="relative"><select onchange="updateMetadata('doc_impresion', this.value)" class="w-full p-3 bg-red-50/30 border border-red-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-500 transition text-slate-700 font-bold appearance-none cursor-pointer"><option value="Impresión Offset" ${state.metadata.doc_impresion === 'Impresión Offset' ? 'selected' : ''}>Impresión Offset</option><option value="Láser" ${state.metadata.doc_impresion === 'Láser' ? 'selected' : ''}>Láser</option><option value="Inyección de Tinta" ${state.metadata.doc_impresion === 'Inyección de Tinta' ? 'selected' : ''}>Inyección de Tinta</option></select><div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-red-500"><svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg></div></div></div>${createInputWithMic("doc_numero", "Número / Folio / ID", state.metadata.doc_numero, "red")}${createInputWithMic("doc_fecha", "Fecha del Documento", state.metadata.doc_fecha, "red")}</div></div><div class="material-card border-l-4 border-blue-500"><h3 class="font-bold text-blue-700 mb-8 border-b border-blue-100 pb-4 uppercase text-xs tracking-widest flex items-center"><span class="bg-blue-100 text-blue-600 p-1.5 rounded mr-3">✅</span> Detalles del Documento Indubitable (Base de Cotejo)</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6">${createInputWithMic("indub_paginas", "Número de Páginas", state.metadata.indub_paginas, "blue", true)}${createInputWithMic("indub_fecha", "Fecha de Firmas Indubitables", state.metadata.indub_fecha, "blue")}${createInputWithMic("indub_domicilio", "Domicilio del Juzgado", state.metadata.indub_domicilio, "blue")}${createInputWithMic("indub_foja", "Número de Foja en Expediente", state.metadata.indub_foja, "blue")}</div></div><div class="material-card border-l-4 border-purple-500 shadow-xl"><h3 class="font-bold text-purple-700 mb-8 border-b border-purple-100 pb-4 uppercase text-xs tracking-widest flex items-center"><span class="bg-purple-100 text-purple-600 p-1.5 rounded mr-3">🔮</span> Hipótesis Pericial Preliminar</h3><div class="p-6 bg-purple-50 rounded-xl mb-4"><label class="block text-[11px] font-bold uppercase text-purple-600 mb-2">Conclusión sobre la Firma Indubitable [Hipótesis]</label><div class="relative"><select onchange="updateMetadata('hipotesis', this.value)" class="w-full p-4 bg-white border border-purple-300 rounded-xl text-sm font-bold text-purple-900 outline-none focus:ring-4 focus:ring-purple-200 transition appearance-none cursor-pointer shadow-sm"><option value="CORRESPONDE al demandado" ${state.metadata.hipotesis === 'CORRESPONDE al demandado' ? 'selected' : ''}>✅ La firma indubitable CORRESPONDE al demandado</option><option value="NO CORRESPONDE al demandado" ${state.metadata.hipotesis === 'NO CORRESPONDE al demandado' ? 'selected' : ''}>❌ La firma indubitable NO CORRESPONDE al demandado</option><option value="IMPOSIBILIDAD TÉCNICA O MATERIAL" ${state.metadata.hipotesis === 'IMPOSIBILIDAD TÉCNICA O MATERIAL' ? 'selected' : ''}>⚠️ Existe una IMPOSIBILIDAD TÉCNICA O MATERIAL</option></select><div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-purple-600"><svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg></div></div></div><p class="text-[10px] text-purple-400 italic text-center">Esta selección es una variable global. Define la Conclusión Morfológica del Capítulo 12.</p></div></div>`;
        }

        function renderPlanteamiento(c){c.innerHTML=`<div class="max-w-4xl mx-auto space-y-6">${generateExordioHTML()}<div class="material-card serif-text text-justify">${generatePlanteamientoHTML()}</div></div>`;}
        function renderMaterial(c){c.innerHTML=`<div class="max-w-5xl mx-auto"><div class="material-card serif-text text-justify">${generateMaterialHTML()}</div></div>`;}
        function renderMetodologia(c){c.innerHTML=`<div class="max-w-4xl mx-auto"><div class="material-card serif-text text-justify">${generateMetodologiaHTML()}</div></div>`;}
        function renderMetodo(c){c.innerHTML=`<div class="max-w-4xl mx-auto"><div class="material-card serif-text text-justify">${generateMetodoHTML()}</div></div>`;}
        function renderTecnicas(c){c.innerHTML=`<div class="max-w-4xl mx-auto"><div class="material-card serif-text text-justify">${generateTecnicasHTML()}</div></div>`;}
        function renderMarco(c){c.innerHTML=`<div class="max-w-4xl mx-auto"><div class="material-card serif-text text-justify">${generateMarcoHTML()}</div></div>`;}
        function renderEstudioRealizado(c){c.innerHTML=`<div class="max-w-4xl mx-auto"><div class="material-card serif-text text-justify">${generateEstudioRealizadoHTML()}</div></div>`;}
        function renderDocCuestionado(c){c.innerHTML=`<div class="max-w-4xl mx-auto"><div class="material-card serif-text text-justify">${generateDocCuestionadoHTML()}</div></div>`;}
        function renderDocIndubitable(c){c.innerHTML=`<div class="max-w-4xl mx-auto"><div class="material-card serif-text text-justify">${generateDocIndubitableHTML()}</div></div>`;}
        function renderInterrogatorioCap(c){c.innerHTML=`<div class="max-w-4xl mx-auto"><div class="material-card serif-text text-justify">${generateInterrogatorioHTML()}</div></div>`;}
        function renderMaterias(container) { const ms=Object.keys(state.materias); container.innerHTML=`<div class="max-w-4xl mx-auto material-card text-center"><div class="mb-8 flex justify-center"><span class="bg-blue-50 p-3 rounded-full text-3xl">⚖️</span></div><h3 class="font-bold text-blue-900 mb-8 pb-2 uppercase text-xs tracking-[0.2em]">Selección de Disciplinas Periciales</h3><div class="grid grid-cols-2 md:grid-cols-3 gap-5">${ms.map(m=>`<div><input type="checkbox" id="c-${m}" class="hidden checkbox-materias" ${state.materias[m]?'checked':''} onchange="toggleM('${m}')"><label for="c-${m}" class="flex flex-col items-center justify-center p-6 border border-slate-200 rounded-2xl text-[10px] font-bold cursor-pointer transition uppercase text-slate-500 hover:border-blue-300 hover:text-blue-500 hover:bg-blue-50/50 h-full"><span class="mb-2 text-xl opacity-70">${m.includes('Grafo')?'🖋️':(m.includes('Dactilo')?'☝️':(m.includes('Foto')?'📸':'📄'))}</span>${m}</label></div>`).join('')}</div></div>`; }
        function toggleM(n){state.materias[n]=!state.materias[n];renderMaterias(document.getElementById('content-display'));}
        function addPregunta(p){const i=document.getElementById(`input-q-${p}`);if(!i.value.trim())return;state.interrogatorio[p].push(i.value.trim());i.value="";document.getElementById(`list-q-${p}`).innerHTML=renderQuestionList(p);}
        function deletePregunta(p,i){state.interrogatorio[p].splice(i,1);document.getElementById(`list-q-${p}`).innerHTML=renderQuestionList(p);}
        function renderQuestionList(p){const l=state.interrogatorio[p];if(l.length===0)return`<p class="text-slate-300 italic text-[11px] text-center py-6 bg-slate-50 rounded-lg border border-dashed border-slate-200">No hay preguntas registradas</p>`;return l.map((q,i)=>`<div class="question-item group hover:bg-blue-50 transition border-l-blue-500"><span class="font-bold text-blue-300 mr-3 text-xs w-5 text-right group-hover:text-blue-500 transition">${i+1}.</span><span class="flex-1 text-[11px] text-slate-600 font-medium leading-relaxed">${q}</span><button onclick="deletePregunta('${p}',${i})" class="text-slate-300 hover:text-red-500 transition font-bold ml-2 opacity-0 group-hover:opacity-100">&times;</button></div>`).join('');}
        function handlePhotoUpload(type, event) { const files = event.target.files; if (files && files[0]) { const reader = new FileReader(); reader.onload = (e) => { state.photos[type].push(e.target.result); renderPhotoGrid(type); }; reader.readAsDataURL(files[0]); } }
        function renderPhotoGrid(type) { const container = document.getElementById(`grid-${type}`); if (!container) return; container.innerHTML = state.photos[type].map((src, i) => `<img src="${src}" class="photo-thumb" title="Imagen ${i+1}">`).join(''); }
        function updateMorphTable(index, field, value) { state.morphologyTable[index][field] = value; }

        function renderAnalisisMorfologico(container) {
            const fixedIntro = `<div class="mb-10 serif-text text-justify text-slate-700 leading-relaxed"><p class="mb-4">Consiste en la observación minuciosa, rigurosa y fundamentada de la “onda gráfica” que constituye la escritura o firma. Este estudio técnico no es empírico, sino que se sustenta en el Método de Comparación Formal de la Escritura...</p></div>`;
            const disclaimerText = `<div class="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 text-sm text-slate-700 text-justify"><p><strong>A efectos de mayor claridad técnica,</strong> se presenta a continuación el Cuadro Comparativo...</p></div>`;
            let tableHTML = `<div class="overflow-x-auto mb-12 shadow-lg rounded-xl border border-slate-200"><table class="w-full text-sm text-left"><thead class="text-xs text-white uppercase bg-blue-900"><tr><th scope="col" class="px-6 py-4 rounded-tl-xl w-1/4">Aspecto Técnico</th><th scope="col" class="px-6 py-4 w-1/4 border-l border-blue-800">Material Indubitable (M.I.)</th><th scope="col" class="px-6 py-4 w-1/4 border-l border-blue-800">Material Dubitable (M.D.)</th><th scope="col" class="px-6 py-4 rounded-tr-xl w-1/4 border-l border-blue-800">Observaciones</th></tr></thead><tbody>${state.morphologyTable.map((row, idx) => `<tr class="bg-white border-b hover:bg-slate-50"><td class="px-6 py-4 font-bold text-slate-800 border-r border-slate-100">${row.label}</td><td class="px-4 py-2 border-r border-slate-100"><input type="text" value="${row.val_indub}" onchange="updateMorphTable(${idx}, 'val_indub', this.value)" placeholder="Ej: Grande (3.5 mm)" class="w-full p-2 bg-blue-50/50 rounded border border-transparent focus:border-blue-300 focus:bg-white transition text-xs text-blue-800 font-medium"></td><td class="px-4 py-2 border-r border-slate-100"><input type="text" value="${row.val_dub}" onchange="updateMorphTable(${idx}, 'val_dub', this.value)" placeholder="Ej: Mediana (2.2 mm)" class="w-full p-2 bg-red-50/50 rounded border border-transparent focus:border-red-300 focus:bg-white transition text-xs text-red-800 font-medium"></td><td class="px-4 py-2"><input type="text" value="${row.obs}" onchange="updateMorphTable(${idx}, 'obs', this.value)" placeholder="Conclusión..." class="w-full p-2 bg-slate-50 rounded border border-transparent focus:border-slate-300 focus:bg-white transition text-xs text-slate-600"></td></tr>`).join('')}</tbody></table></div>`;
            const oldContent = `<div class="mt-16 pt-10 border-t-2 border-dashed border-slate-200"><h4 class="font-bold text-slate-400 uppercase tracking-widest text-center mb-10 text-xs">Análisis Grafométrico Complementario (Radar)</h4><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-1"><div class="material-card sticky top-4"><div class="chart-container"><canvas id="radarChart"></canvas></div></div></div><div class="lg:col-span-2 space-y-6"><div class="bg-red-50 p-6 rounded-2xl border border-red-100 shadow-md"><h5 class="font-bold text-red-700 mb-6 flex items-center uppercase text-xs tracking-wider"><span class="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Firma Cuestionada (Dubitada)</h5><div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">${state.chartLabels.map((label, index) => `<div class="range-cuestionada"><div class="flex justify-between text-xs font-bold text-red-700 mb-2"><span>${label}</span><span id="val-c-${index}" class="text-red-700 bg-white px-2 rounded shadow-sm">${state.cotejo.cuestionada[index]}</span></div><input type="range" min="0" max="10" step="1" value="${state.cotejo.cuestionada[index]}" oninput="updateChartData('cuestionada', ${index}, this.value)"></div>`).join('')}</div></div><div class="bg-blue-50 p-6 rounded-2xl border border-blue-200 shadow-md"><h5 class="font-bold text-blue-700 mb-6 flex items-center uppercase text-xs tracking-wider"><span class="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>Firma Indubitable (Base de Cotejo)</h5><div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">${state.chartLabels.map((label, index) => `<div class="range-indubitable"><div class="flex justify-between text-xs font-bold text-blue-700 mb-2"><span>${label}</span><span id="val-i-${index}" class="text-blue-700 bg-white px-2 rounded shadow-sm">${state.cotejo.indubitable[index]}</span></div><input type="range" min="0" max="10" step="1" value="${state.cotejo.indubitable[index]}" oninput="updateChartData('indubitable', ${index}, this.value)"></div>`).join('')}</div></div></div></div></div>`;
            const morphConclusion = getMorphologyConclusionHTML(false);

            container.innerHTML = `<div class="max-w-6xl mx-auto"><div class="material-card"><h3 class="text-blue-900 font-bold mb-6 uppercase text-lg border-b border-blue-100 pb-2">Capítulo 12: Análisis Morfológico de Trazado</h3>${fixedIntro}<div class="mb-8"><h4 class="font-bold text-red-600 mb-3 text-sm uppercase tracking-wide border-l-4 border-red-500 pl-3">DOCUMENTO CUESTIONADO</h4><div class="photo-upload-zone" onclick="document.getElementById('upload-cuestionado').click()"><input type="file" id="upload-cuestionado" class="hidden" accept="image/*" onchange="handlePhotoUpload('cuestionado', event)"><span class="text-3xl mb-2">📸</span><span class="text-xs font-bold text-slate-400 uppercase">Click para subir foto (Cuestionado)</span></div><div id="grid-cuestionado" class="photo-grid">${state.photos.cuestionado.map((src, i) => `<img src="${src}" class="photo-thumb">`).join('')}</div></div><div class="mb-8"><h4 class="font-bold text-blue-600 mb-3 text-sm uppercase tracking-wide border-l-4 border-blue-500 pl-3">DOCUMENTO INDUBITABLE</h4><div class="photo-upload-zone" onclick="document.getElementById('upload-indubitable').click()"><input type="file" id="upload-indubitable" class="hidden" accept="image/*" onchange="handlePhotoUpload('indubitable', event)"><span class="text-3xl mb-2">📸</span><span class="text-xs font-bold text-slate-400 uppercase">Click para subir foto (Indubitable)</span></div><div id="grid-indubitable" class="photo-grid">${state.photos.indubitable.map((src, i) => `<img src="${src}" class="photo-thumb">`).join('')}</div></div><h4 class="font-bold text-blue-900 mb-4 text-center text-sm uppercase tracking-widest bg-blue-50 py-2 rounded">Tabla de Cotejo Morfológico-Estructural</h4>${disclaimerText}${tableHTML}${oldContent}${morphConclusion}</div></div>`;
            setTimeout(initRadar, 100);
        }

        // --- NEW RENDER: ANALISIS MICROSCOPICO (CHAPTER 13) ---
        function renderAnalisisMicroscopico(container) {

            
            const fixedTextDesenv = `El Análisis Estructural Particular o del Gesto Gráfico es la fase más profunda y determinante de la grafoscopía forense. Mientras que el análisis general observa la "fachada" de la escritura, esta técnica se adentra en las "huellas digitales del grafismo": aquellos hábitos subconscientes, automáticos e invisibles para el ojo inexperto que individualizan a un autor de manera única.

El gesto gráfico (también llamado idiotismo, habitualismo o gesto tipo) es una constante escritural que se aparta del modelo caligráfico aprendido para adquirir una impronta personalísima. La técnica consiste en el método analítico: descomponer la firma (un todo) en sus partes constituyentes para aislar estas peculiaridades, verificando su repetición constante en el material indubitable para luego cotejarlas con la muestra cuestionada. Para que un rasgo sea considerado un "gesto gráfico" con valor identificatorio, debe cumplir con requisitos estrictos:

• Origen Subconsciente y Automático: Son movimientos que el cerebro ejecuta sin intervención de la voluntad, lo que los hace casi imposibles de omitir por el titular o de imitar por un falsificador.
• Constancia: El rasgo debe aparecer en la mayoría de las muestras (entre el 90% y 100% de las veces) para ser considerado una constante del autor.
• Invisibilidad para el neófito: Son detalles tan sutiles (como la forma de un punto de ataque o un cambio de presión mínimo) que pasan desapercibidos para quien intenta falsificar la firma.`;
const fixedTextMomentos = `
                <div class="serif-text text-justify text-slate-700 leading-relaxed space-y-4 mb-8">
                    <h4 class="font-bold text-blue-900 uppercase">MOMENTOS GRÁFICOS (O ESCRITURALES)</h4>
                    <p><strong>Definición:</strong> Los momentos gráficos (también denominados momentos escriturales o signaturales) se definen como cada una de las secuencias de trazos ejecutadas de forma continua, los cuales se contabilizan cada vez que el útil inscriptor (bolígrafo, pluma, lápiz, etc.) se posa sobre el sustrato y se separa de este. En términos técnicos, cada levantamiento del útil constituye una solución de continuidad o "corte", marcando el inicio y el fin de un momento gráfico específico dentro de la ejecución de una firma o escrito.</p>
                    <p class="ml-4">El análisis de los momentos gráficos es de vital importancia en el estudio grafoscópico por las siguientes razones:</p>
                    <ul class="list-disc ml-8 space-y-2">
                        <li><strong>Identificación de la Génesis Gráfica:</strong> Permiten reconstruir la "historia del grama", revelando el orden y la dirección de los movimientos motores y nerviosos que el autor refleja de manera subconsciente en su escritura.</li>
                        <li><strong>Valor de Individualización:</strong> Constituyen una de las particularidades intrínsecas y gestos-tipo de mayor valor identificatorio, ya que el número de momentos y los puntos exactos de levantamiento son hábitos automáticos difícilmente modificables o imitables.</li>
                        <li><strong>Detección de Falsificaciones:</strong> En firmas apócrifas, es común observar un número inusual de momentos gráficos debido a vacilaciones, paradas innecesarias o retoques propios de una ejecución lenta e insegura, lo cual contrasta con la fluidez y el dinamismo de una firma auténtica.</li>
                        <li><strong>Análisis Grafocinético:</strong> Su estudio permite verificar los hábitos del movimiento escritural, identificando si hubo tropiezos, interrupciones o reenganches que delaten la falta de espontaneidad en el trazo.</li>
                    </ul>
                </div>
            `;

            const fixedTextInclinacion = `
                <div class="serif-text text-justify text-slate-700 leading-relaxed space-y-4 mb-8 pt-10 border-t-2 border-slate-100">
                    <h4 class="font-bold text-blue-900 uppercase">INCLINACIÓN</h4>
                    <p><strong>La inclinación</strong>, se define como el ángulo de desviación que presentan los trazos magistrales (ejes de las letras) respecto de la perpendicular a la línea de base o limitante basal del grafismo. Esta característica de orden estructural permite clasificar la escritura en tres categorías principales: erguida (vertical a 90°), derecha (inclinada a la derecha) o izquierda (inclinada a la izquierda o invertida).</p>
                    <p class="ml-4">El análisis de la inclinación es de vital trascendencia para este estudio, ya que no se limita a una apreciación general del "vuelco" de la firma, sino que se centra en el <strong>paralelismo grammático</strong>. Es decir, se evalúa la constancia rítmica con la que el autor mantiene o varía los ángulos de sus grafías de manera subconsciente. Resulta imperativo destacar ante su Señoría que la inclinación que se manifiesta en la base de la caja de escritura (el espacio donde se asienta el núcleo de las letras) posee un valor identificatorio superior. Mientras que un falsificador puede intentar emular la inclinación general o "macroscópica" de una firma, le resulta prácticamente imposible replicar la micro-inclinación y el alineamiento básico presentes en la base de los trazos. Esto se debe a que la dirección de los ejes en contacto con la línea de sustentación es el resultado de un hábito motriz automatizado y de la presión efectiva biorrítmica, elementos que escapan al control consciente de un imitador.</p>
                    <p class="ml-4">La ciencia grafoscópica establece que la inclinación está íntimamente ligada a la <strong>velocidad y al dinamismo</strong> del puño ejecutor. En una ejecución apócrifa, el falsario suele realizar un trazado lento y precavido para cuidar la forma, lo que interrumpe el flujo natural de los ejes y produce variaciones angulares erráticas en la base de la escritura que no corresponden al Patrón de Variaciones Posibles (PVP) del titular legítimo. Por lo tanto, la concordancia en los valores angulares internos y su relación con la caja de escritura constituye uno de los indicios más sólidos de autenticidad.</p>
                </div>
            `;

            const microConclusion = getMicroscopicConclusionHTML(false);
            const inclinacionConclusion = getInclinacionConclusionHTML(false);

            container.innerHTML = `
                <div class="max-w-6xl mx-auto">
                    <div class="material-card">
                        <h3 class="text-blue-900 font-bold mb-6 uppercase text-lg border-b border-blue-100 pb-2">Capítulo 13: Análisis Microscópicos</h3>
                        

                        <!-- BLOQUE 0: DESENVOLVIMIENTO ESCRITURAL -->
                        ${fixedTextDesenv}
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div>
                                <h4 class="font-bold text-red-600 mb-3 text-sm uppercase tracking-wide border-l-4 border-red-500 pl-3">DOCUMENTO CUESTIONADO</h4>
                                <div class="photo-upload-zone" onclick="document.getElementById('upload-desenv-c').click()">
                                    <input type="file" id="upload-desenv-c" class="hidden" accept="image/*" onchange="handlePhotoUpload('desenv_cuestionado', event)">
                                    <span class="text-3xl mb-2">📷</span>
                                    <span class="text-xs font-bold text-slate-400 uppercase">Subir Foto</span>
                                </div>
                                <div id="grid-desenv_cuestionado" class="photo-grid">${state.photos.desenv_cuestionado.map(src => `<img src="${src}" class="photo-thumb">`).join('')}</div>

                                <div class="border-t border-slate-100 pt-4 mt-4">
                                    <p class="text-[10px] text-slate-400 mb-2 italic">Descripción Manual (Documento Cuestionado):</p>
                                    <textarea onchange="state.chapters.desenv_cuestionado = this.value; scheduleSaveState();" class="w-full border border-slate-200 rounded-xl p-3 text-sm min-h-[120px]" placeholder="Describa lo que se aprecia en las fotografías del Documento Cuestionado...">${state.chapters.desenv_cuestionado || ''}</textarea>
                                </div>
                            </div>

                            <div>
                                <h4 class="font-bold text-blue-600 mb-3 text-sm uppercase tracking-wide border-l-4 border-blue-500 pl-3">DOCUMENTO INDUBITABLE</h4>
                                <div class="photo-upload-zone" onclick="document.getElementById('upload-desenv-i').click()">
                                    <input type="file" id="upload-desenv-i" class="hidden" accept="image/*" onchange="handlePhotoUpload('desenv_indubitable', event)">
                                    <span class="text-3xl mb-2">📷</span>
                                    <span class="text-xs font-bold text-slate-400 uppercase">Subir Foto</span>
                                </div>
                                <div id="grid-desenv_indubitable" class="photo-grid">${state.photos.desenv_indubitable.map(src => `<img src="${src}" class="photo-thumb">`).join('')}</div>

                                <div class="border-t border-slate-100 pt-4 mt-4">
                                    <p class="text-[10px] text-slate-400 mb-2 italic">Descripción Manual (Documento Indubitable):</p>
                                    <textarea onchange="state.chapters.desenv_indubitable = this.value; scheduleSaveState();" class="w-full border border-slate-200 rounded-xl p-3 text-sm min-h-[120px]" placeholder="Describa lo que se aprecia en las fotografías del Documento Indubitable...">${state.chapters.desenv_indubitable || ''}</textarea>
                                ${getDesenvConclusionHTML(false)}

                                </div>
                            </div>
                        </div>

                        <!-- BLOQUE 1: MOMENTOS GRÁFICOS -->
                        ${fixedTextMomentos}
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 class="font-bold text-red-600 mb-3 text-sm uppercase tracking-wide border-l-4 border-red-500 pl-3">DOCUMENTO CUESTIONADO (MOMENTOS)</h4>
                                <div class="photo-upload-zone" onclick="document.getElementById('upload-micro-cuestionado').click()">
                                    <input type="file" id="upload-micro-cuestionado" class="hidden" accept="image/*" onchange="handlePhotoUpload('micro_cuestionado', event)">
                                    <span class="text-3xl mb-2">🔬</span><span class="text-xs font-bold text-slate-400 uppercase">Subir Foto</span>
                                </div>
                                <div id="grid-micro_cuestionado" class="photo-grid">${state.photos.micro_cuestionado.map(src => `<img src="${src}" class="photo-thumb">`).join('')}</div>
                            </div>
                            <div>
                                <h4 class="font-bold text-blue-600 mb-3 text-sm uppercase tracking-wide border-l-4 border-blue-500 pl-3">DOCUMENTO INDUBITABLE (MOMENTOS)</h4>
                                <div class="photo-upload-zone" onclick="document.getElementById('upload-micro-indubitable').click()">
                                    <input type="file" id="upload-micro-indubitable" class="hidden" accept="image/*" onchange="handlePhotoUpload('micro_indubitable', event)">
                                    <span class="text-3xl mb-2">🔬</span><span class="text-xs font-bold text-slate-400 uppercase">Subir Foto</span>
                                </div>
                                <div id="grid-micro_indubitable" class="photo-grid">${state.photos.micro_indubitable.map(src => `<img src="${src}" class="photo-thumb">`).join('')}</div>
                            </div>
                        </div>
                        <div class="border-t border-slate-100 pt-6">
                            <p class="text-[10px] text-slate-400 mb-2 italic">Descripción Manual de Momentos Gráficos:</p>
                            <textarea onchange="state.chapters.analisis_microscopico = this.value" class="w-full p-4 bg-slate-50 rounded-xl font-serif text-sm border border-slate-200 outline-none h-32" placeholder="Describa los hallazgos de momentos gráficos...">${state.chapters.analisis_microscopico || ''}</textarea>
                        </div>
                        ${microConclusion}

                        <!-- BLOQUE 2: INCLINACIÓN -->
                        ${fixedTextInclinacion}
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 class="font-bold text-red-600 mb-3 text-sm uppercase tracking-wide border-l-4 border-red-500 pl-3">DOCUMENTO CUESTIONADO (INCLINACIÓN)</h4>
                                <div class="photo-upload-zone" onclick="document.getElementById('upload-inclinacion-c').click()">
                                    <input type="file" id="upload-inclinacion-c" class="hidden" accept="image/*" onchange="handlePhotoUpload('micro_inclinacion_c', event)">
                                    <span class="text-3xl mb-2">📐</span><span class="text-xs font-bold text-slate-400 uppercase">Subir Foto Inclinación</span>
                                </div>
                                <div id="grid-micro_inclinacion_c" class="photo-grid">${state.photos.micro_inclinacion_c.map(src => `<img src="${src}" class="photo-thumb">`).join('')}</div>
                            </div>
                            <div>
                                <h4 class="font-bold text-blue-600 mb-3 text-sm uppercase tracking-wide border-l-4 border-blue-500 pl-3">DOCUMENTO INDUBITABLE (INCLINACIÓN)</h4>
                                <div class="photo-upload-zone" onclick="document.getElementById('upload-inclinacion-i').click()">
                                    <input type="file" id="upload-inclinacion-i" class="hidden" accept="image/*" onchange="handlePhotoUpload('micro_inclinacion_i', event)">
                                    <span class="text-3xl mb-2">📐</span><span class="text-xs font-bold text-slate-400 uppercase">Subir Foto Inclinación</span>
                                </div>
                                <div id="grid-micro_inclinacion_i" class="photo-grid">${state.photos.micro_inclinacion_i.map(src => `<img src="${src}" class="photo-thumb">`).join('')}</div>
                            </div>
                        </div>
                        <div class="border-t border-slate-100 pt-6">
                            <h4 class="font-bold text-slate-700 mb-2 uppercase text-xs tracking-widest">Descripción del Hallazgo de Inclinación</h4>
                            <p class="text-[10px] text-slate-400 mb-4 italic">Describa aquí manualmente las observaciones sobre la inclinación y paralelismo grammático.</p>
                            <textarea onchange="state.chapters.analisis_inclinacion = this.value" class="w-full p-6 bg-slate-50 rounded-xl font-serif text-sm border border-slate-200 focus:ring-2 focus:ring-blue-100 outline-none resize-none leading-relaxed text-slate-700 h-64" placeholder="Ej: Se observa una inclinación dextrógira constante en el material indubitable, mientras que la firma cuestionada presenta oscilaciones verticales...">${state.chapters.analisis_inclinacion || ''}</textarea>
                        </div>
                        ${inclinacionConclusion}

                    </div>
                </div>
            `;
        }

function renderAnalisisGrafocinetico(container) {
    const fixed = `
        <div class="mb-8">
            <div class="text-xl font-extrabold tracking-wide text-slate-900 mb-2">ANÁLISIS GRAFIOCINÉTICO</div>
            <div class="serif-text text-justify space-y-4 text-slate-800">
                <p>El análisis grafocinético es una especialidad técnica de la grafoscopía que se centra en el estudio de los movimientos generadores del trazo para reconstruir de manera objetiva la "historia del grafismo". A diferencia de los métodos morfológicos que solo observan la apariencia externa o "forma" de las letras, esta técnica busca entender cómo fue ejecutada la escritura, analizando la trayectoria, el ritmo y la energía del útil inscriptor.</p>
                <p>Ahora bien, es importante determinar de manera analítica el orden, dirección y sentido de los movimientos que dan origen a cada trazo. Esto permite revelar si una grafía fue realizada con un solo impulso espontáneo o si fue fragmentada, lo cual es un indicio clave para detectar falsificaciones por imitación lenta. El perito evalúa variables físicas que son el resultado de procesos neurofisiológicos, tales como la velocidad, la presión efectiva, la tensión de línea, la fluidez y la tonicidad del trazo. Estas características son personalísimas y dependen de la coordinación neuromuscular única de cada individuo. Este método permite localizar constantes que surgen del subconsciente del autor y que aparecen de forma automática e involuntaria. Estos gestos se manifiestan en puntos críticos como los puntos de ataque (donde el útil toca el papel), los enlaces y los remates.</p>
                <p>A través de la grafocinética se investigan signos de falta de espontaneidad, como paradas inusuales, vacilaciones, retoques o temblores, diferenciando si estos son naturales (por enfermedad o edad) o producto del esfuerzo consciente de un falsificador por imitar un modelo ajeno. La trascendencia de este análisis ante su Señoría radica en que los automatismos motores son hábitos grabados en la memoria motriz que el autor legítimo no puede evitar realizar y que un falsificador no puede replicar con exactitud. Mientras que la "forma" de una firma es relativamente fácil de imitar (imitación servil), la "melodía cinética" o el ritmo del movimiento es prácticamente imposible de suplantar, lo que otorga al dictamen un alto grado de certeza científica.</p>
            </div>
        </div>
    `;

    container.innerHTML = `
        ${fixed}

        <div class="mb-10">
            <div class="text-sm font-extrabold tracking-widest uppercase text-red-700 border-l-4 border-red-600 pl-3 mb-3">DOCUMENTO CUESTIONADO</div>
            <div class="flex items-center gap-3 mb-4">
                <input type="file" accept="image/*" multiple class="block w-full text-sm" onchange="handlePhotoUpload('grafocinetico_cuestionado', event)" />
                <span class="text-xs text-slate-500">Agregue fotografías que ilustren el análisis.</span>
            </div>
            <div id="grid-grafocinetico_cuestionado" class="photo-grid"></div>

            <label class="block text-sm font-bold mt-5 mb-2">Descripción manual (Documento Cuestionado)</label>
            <textarea class="w-full min-h-[140px] p-3 bg-slate-50 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describa de forma manual lo que se aprecia en el documento cuestionado."
                oninput="state.chapters.grafocinetico_cuestionado = this.value">${state.chapters.grafocinetico_cuestionado || ''}</textarea>
        </div>

        <div class="mb-6">
            <div class="text-sm font-extrabold tracking-widest uppercase text-blue-700 border-l-4 border-blue-600 pl-3 mb-3">DOCUMENTO INDUBITABLE</div>
            <div class="flex items-center gap-3 mb-4">
                <input type="file" accept="image/*" multiple class="block w-full text-sm" onchange="handlePhotoUpload('grafocinetico_indubitable', event)" />
                <span class="text-xs text-slate-500">Agregue fotografías que ilustren el análisis.</span>
            </div>
            <div id="grid-grafocinetico_indubitable" class="photo-grid"></div>

            <label class="block text-sm font-bold mt-5 mb-2">Descripción manual (Documento Indubitable)</label>
            <textarea class="w-full min-h-[140px] p-3 bg-slate-50 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describa de forma manual lo que se aprecia en el documento indubitable."
                oninput="state.chapters.grafocinetico_indubitable = this.value">${state.chapters.grafocinetico_indubitable || ''}</textarea>
        </div>
    `;

    renderPhotoGrid('grafocinetico_cuestionado');
    renderPhotoGrid('grafocinetico_indubitable');
}



function renderAnalisisEstructuralOrdenGeneral(container) {
    const fixedText = "Aquí se analizará y se realizará el estudio técnico de la fuerza de contacto que el útil inscriptor ejerce sobre el papel, lo cual constituye un hábito motorizado de origen subconsciente de altísimo valor identificatorio. Mientras que la forma de una firma puede ser imitada visualmente, la energía y el dinamismo grabados en las fibras del soporte son prácticamente imposibles de replicar o distorsionar por un falsificador.\n\nPara observar el surco real sin la distracción del color de la tinta, se utiliza una metodología validada por organismos internacionales como la AEEED. El procedimiento técnico consiste en, Eliminación por Radiación Infrarroja (IR), Se coloca el documento frente a una cámara de video con un sensor CCD sensible al espectro infrarrojo. Al aplicar filtros específicos “entre los 720 y 950 nanómetros”, los pigmentos de la mayoría de las tintas de bolígrafo se vuelven transparentes, permitiendo ver a través de ellos. Una vez que la tinta es \"invisible\" para la cámara, se ilumina el sector con luz oblicua o rasante en ángulos muy bajos (entre 5° y 10°). Esta iluminación proyecta sombras dentro del surco o hendidura, revelando con total nitidez la profundidad, los puntos de parada y la intensidad real de la carga muscular.\n\nTercera Dimensión del Grafismo. A diferencia del examen morfológico (que es bidimensional), la presión efectiva analiza la profundidad o \"tercera dimensión\" del trazo. Identificación de Puntos de Referencia Intrínsecos (PRI): La presión se clasifica como un PRI porque está \"escondida\" dentro del trazo y el autor no es consciente de dónde aplica más o menos fuerza. Es importante destacar, las firmas auténticas presentan una presión alternante (sucesión natural de finos y gruesos), mientras que las falsas suelen mostrar una presión monótona y uniforme debido a la ejecución lenta del imitador. Esta técnica permite confirmar con precisión científica las paradas del instrumento, los retoques o los reenganches que a menudo quedan ocultos bajo el entintado superficial.\n\nLa trascendencia de este estudio radica en que la presión es un automatismo invisible para el ojo inexperto y para el propio autor, por lo que no puede ser sometida a un control voluntario. Un peritaje que incluya la demostración del relieve otorga al juzgador una prueba objetiva y tangible, eliminando las interpretaciones subjetivas sobre el parecido de las formas.";

    container.innerHTML = `
        <div class="max-w-5xl mx-auto space-y-6">
            <div class="bg-white rounded-2xl shadow p-6 border border-slate-200">
                <h2 class="text-xl font-bold">15. ANÁLISIS ESTRUCTURAL DE ORDEN GENERAL</h2>
                <div class="mt-4 whitespace-pre-line leading-relaxed text-slate-800">
                    ${fixedText}
                </div>
            </div>

            <div class="bg-white rounded-2xl shadow p-6 border border-slate-200">
                <h3 class="text-lg font-bold tracking-wide">DOCUMENTO CUESTIONADO</h3>
                <p class="text-sm text-slate-600 mt-1">Cargue las fotografías que ilustren lo expuesto para el documento cuestionado.</p>
                <div class="mt-4">
                    <input id="upload-estructural-c" type="file" accept="image/*" multiple class="block w-full" />
                </div>
                <div id="grid-estructural_cuestionado" class="mt-4"></div>

                <div class="mt-5">
                    <label class="block text-sm font-semibold text-slate-700">Descripción manual (Documento cuestionado)</label>
                    <textarea class="w-full mt-2 min-h-[120px] p-3 rounded-lg border border-slate-200 bg-slate-50"
                        placeholder="Redacte aquí lo que se aprecia en el dictamen respecto al documento cuestionado..."
                        oninput="state.chapters.estructural_cuestionado = this.value; try{scheduleSaveState();}catch(_){}"
                    >${state.chapters.estructural_cuestionado || ''}</textarea>
                </div>
            </div>

            <div class="bg-white rounded-2xl shadow p-6 border border-slate-200">
                <h3 class="text-lg font-bold tracking-wide">DOCUMENTO INDUBITABLE</h3>
                <p class="text-sm text-slate-600 mt-1">Cargue las fotografías que ilustren lo expuesto para el documento indubitable.</p>
                <div class="mt-4">
                    <input id="upload-estructural-i" type="file" accept="image/*" multiple class="block w-full" />
                </div>
                <div id="grid-estructural_indubitable" class="mt-4"></div>

                <div class="mt-5">
                    <label class="block text-sm font-semibold text-slate-700">Descripción manual (Documento indubitable)</label>
                    <textarea class="w-full mt-2 min-h-[120px] p-3 rounded-lg border border-slate-200 bg-slate-50"
                        placeholder="Redacte aquí lo que se aprecia en el dictamen respecto al documento indubitable..."
                        oninput="state.chapters.estructural_indubitable = this.value; try{scheduleSaveState();}catch(_){}"
                    >${state.chapters.estructural_indubitable || ''}</textarea>
                </div>
            </div>
        </div>
    `;

    const inputC = document.getElementById('upload-estructural-c');
    const inputI = document.getElementById('upload-estructural-i');
    if (inputC) inputC.addEventListener('change', (e) => handlePhotoUpload(e, 'estructural_cuestionado'));
    if (inputI) inputI.addEventListener('change', (e) => handlePhotoUpload(e, 'estructural_indubitable'));

    renderPhotoGrid('estructural_cuestionado');
    renderPhotoGrid('estructural_indubitable');
}




        function updateChartData(type, index, value) { const val = parseInt(value); state.cotejo[type][index] = val; const prefix = type === 'cuestionada' ? 'c' : 'i'; const span = document.getElementById(`val-${prefix}-${index}`); if(span) span.innerText = val; if (radarChartInstance) { const datasetIndex = type === 'cuestionada' ? 0 : 1; radarChartInstance.data.datasets[datasetIndex].data[index] = val; radarChartInstance.update(); } }
        function initRadar() { const ctx = document.getElementById('radarChart'); if(!ctx) return; const context = ctx.getContext('2d'); if (radarChartInstance) { radarChartInstance.destroy(); } radarChartInstance = new Chart(context, { type: 'radar', data: { labels: ['Vel', 'Pres', 'Ang', 'Inc', 'Dim', 'Coh'], datasets: [ { label: 'Cuestionada (Dubitada)', data: state.cotejo.cuestionada, backgroundColor: 'rgba(220, 38, 38, 0.2)', borderColor: '#dc2626', pointBackgroundColor: '#dc2626', borderWidth: 2 }, { label: 'Indubitable (Cotejo)', data: state.cotejo.indubitable, backgroundColor: 'rgba(37, 99, 235, 0.2)', borderColor: '#2563eb', pointBackgroundColor: '#2563eb', borderWidth: 2 } ] }, options: { responsive: true, maintainAspectRatio: false, scales: { r: { min: 0, max: 10, ticks: { display: false, stepSize: 2 }, pointLabels: { font: { size: 10, weight: 'bold' }, color: '#64748b' }, grid: { color: '#e2e8f0' } } }, plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, padding: 20, font: { size: 10 } } } } } }); }
        function renderConclusion(container) { container.innerHTML = `<div class="max-w-4xl mx-auto"><div class="material-card"><h3 class="font-serif font-bold text-2xl text-blue-900 mb-2">Conclusión Final</h3><p class="text-xs text-slate-400 mb-6 uppercase tracking-widest">Dictamen Pericial Definitivo</p><textarea onchange="state.chapters.conclusion = this.value" class="w-full p-8 bg-slate-50 rounded-xl font-serif text-lg min-h-[400px] mb-6 border border-slate-200 focus:ring-2 focus:ring-blue-100 outline-none resize-none leading-loose text-slate-700 placeholder-Redacte aquí su conclusión técnica...">${state.chapters.conclusion || ''}</textarea><div class="border-t border-slate-100 pt-6 flex justify-end"><button onclick="exportToPDF()" class="bg-blue-900 text-white px-8 py-3 rounded-xl text-sm font-bold shadow-xl hover:bg-blue-800 transition transform hover:-translate-y-1">📥 Descargar PDF Oficial</button></div></div></div>`; }
        function renderTextEditor(container, id) { container.innerHTML = `<div class="max-w-4xl mx-auto h-full flex flex-col"><div class="flex justify-between items-center mb-4"><p class="text-xs text-blue-400 font-bold uppercase tracking-widest italic font-serif">${navItems.find(n => n.id === id).title.toUpperCase()}</p></div><textarea onchange="state.chapters['${id}'] = this.value" class="flex-1 w-full p-10 material-card font-serif text-slate-700 text-lg leading-relaxed outline-none resize-none focus:ring-2 focus:ring-blue-100 transition">${state.chapters[id] || ''}</textarea></div>`; }

        // --- HTML GENERATORS ---
        
        function generatePlanteamientoHTML(isForPDF=false) {
            const m = state.metadata;
            const h = (v) => isForPDF ? `<strong>${v}</strong>` : `<span class="placeholder-highlight">${v}</span>`;
            return `
                <div class="${isForPDF ? 'pdf-section' : ''}">
                    <h3 class="text-blue-900 font-bold mb-4">CAPÍTULO 1: PLANTEAMIENTO DEL PROBLEMA</h3>
                    <p>Determinar la autenticidad o falsedad de la firma dubitada que aparece en el documento descrito como ${h(m.doc_tipo)}...</p>
                </div>
            `;
        }

        function generateMaterialHTML(isForPDF=false) {
            return `
                <div class="${isForPDF ? 'pdf-section' : ''}">
                    <h3 class="text-blue-900 font-bold mb-4">CAPÍTULO 3: MATERIAL DE ESTUDIO</h3>
                    <p>Para la elaboración del presente dictamen se tuvo a la vista el siguiente material...</p>
                    <ul class="list-disc ml-6 mt-2">
                        <li>Microscopio estereoscópico digital.</li>
                        <li>Lupas de diversos aumentos (5x, 10x, 20x).</li>
                        <li>Cámara fotográfica de alta resolución.</li>
                        <li>Software de procesamiento de imágenes.</li>
                    </ul>
                </div>
            `;
        }

        function generateMetodologiaHTML(isForPDF=false) {
             return `
                <div class="${isForPDF ? 'pdf-section' : ''}">
                    <h3 class="text-blue-900 font-bold mb-4">CAPÍTULO 5: METODOLOGÍA</h3>
                    <p>Se empleó el método deductivo-inductivo, analítico-descriptivo y comparativo...</p>
                </div>
            `;
        }

        function generateMetodoHTML(isForPDF=false) {
             return `
                <div class="${isForPDF ? 'pdf-section' : ''}">
                    <h3 class="text-blue-900 font-bold mb-4">CAPÍTULO 6: MÉTODO</h3>
                    <p>El método específico aplicado en este estudio es el de <strong>COMPARACIÓN FORMAL</strong>...</p>
                </div>
            `;
        }
        
        function generateTecnicasHTML(isForPDF=false) {
             return `
                <div class="${isForPDF ? 'pdf-section' : ''}">
                    <h3 class="text-blue-900 font-bold mb-4">CAPÍTULO 7: TÉCNICAS</h3>
                    <p>Las técnicas instrumentales aplicadas consistieron en la observación directa...</p>
                </div>
            `;
        }
        
        function generateMarcoHTML(isForPDF=false) {
             return `
                <div class="${isForPDF ? 'pdf-section' : ''}">
                    <h3 class="text-blue-900 font-bold mb-4">CAPÍTULO 8: MARCO TEÓRICO</h3>
                    <p>La <strong>Grafoscopía</strong> se define como la disciplina pericial que tiene por objeto...</p>
                </div>
            `;
        }

        function generateEstudioRealizadoHTML(isForPDF=false) {
             return `
                <div class="${isForPDF ? 'pdf-section' : ''}">
                    <h3 class="text-blue-900 font-bold mb-4">CAPÍTULO 9: ESTUDIO TÉCNICO REALIZADO</h3>
                    <p>Se procedió al análisis pormenorizado de los elementos estructurales y generales...</p>
                </div>
            `;
        }

        function generateInterrogatorioHTML(isForPDF=false) {
            const listActor = state.interrogatorio.actora.length > 0 
                ? `<ol class="list-decimal ml-6 mt-2">${state.interrogatorio.actora.map(q => `<li>${q}</li>`).join('')}</ol>` 
                : '<p class="italic text-slate-400">[Sin preguntas registradas]</p>';
            
            return `
                <div class="${isForPDF ? 'pdf-section' : ''}">
                    <h3 class="text-blue-900 font-bold mb-4">CAPÍTULO 4: CUESTIONARIO</h3>
                    <h4 class="font-bold text-sm mt-4 mb-2">PREGUNTAS DE LA PARTE ACTORA</h4>
                    ${listActor}
                </div>
            `;
        }

        function generateDocCuestionadoHTML(isForPDF=false){ const m=state.metadata;const h=(v)=>isForPDF?`<strong>${v}</strong>`:`<span class="placeholder-highlight">${v}</span>`;const i=m.doc_impresion;let a="";if(i==="Impresión Offset"){a=`<p>El formato "esqueleto" del pagaré se imprime mediante procesos industriales utilizando <b>Impresión Offset</b>...</p>`;}else if(i==="Láser"){a=`<p>El formato "esqueleto" se imprime utilizando <b>Impresión láser</b>...</p>`;}else if(i==="Inyección de Tinta"){a=`<p>Se imprime utilizando <b>impresión por inyección de tinta</b>...</p>`;}else{a="<p class='italic text-red-500'>Seleccione un sistema.</p>";}return `<div class="${isForPDF?'pdf-section':''}"><h3 class="text-blue-900 font-bold mb-4">CAPÍTULO 10: DOCUMENTO CUESTIONADO</h3><div class="sub-section-title">DOCUMENTO CUESTIONADO</div><p>El mismo se tratan de un documento, en una hoja señalado como Tipo “${h(m.doc_tipo)}”, señalado así por la parte actora ${h(m.actor)}...</p><div class="sub-section-title">ANÁLISIS DEL SUSTRATO</div>${a}<div class="sub-section-title">LLENADO MANUSCRITO Y FIRMA</div><p>En el llenado y firma del pagaré se analiza la interacción de la tinta con el papel...</p></div>`;}
        function generateDocIndubitableHTML(isForPDF=false){ const m=state.metadata;const h=(v)=>isForPDF?`<strong>${v}</strong>`:`<span class="placeholder-highlight">${v}</span>`; return `<div class="${isForPDF?'pdf-section':''}"><h3 class="text-blue-900 font-bold mb-4">CAPÍTULO 11: DOCUMENTO INDUBITABLE</h3><div class="sub-section-title">DOCUMENTO INDUBITABLE</div><p>Consistentes en las Muestras de Firmas y/o Rubricas que suscribió ${h(m.demandado)}, en la muestra de Firmas y escritura, ante la presencia del Secretario Abogado de Acuerdo y Tramite de este H. ${h(m.juez)}, con domicilio ${h(m.indub_domicilio)}, y que obran dentro del presente expediente a foja ${h(m.indub_foja)}...</p></div>`; }
        
        function generateAnalisisMicroscopicoHTML(isPDF = false) {
            // Reproduce la estructura principal del Capítulo 13 en PDF (incluye DESENVOLVIMIENTO ESCRITURAL + fotos + descripciones + conclusión)
            const qPhotos = state.photos.desenv_cuestionado || [];
            const iPhotos = state.photos.desenv_indubitable || [];

            const photoGrid = (arr) => {
                if (!arr.length) return `<div class="text-xs text-slate-500 italic">Sin fotografías.</div>`;
                const items = arr.map(src => `<img src="${src}" style="width:180px;height:auto;border-radius:10px;border:1px solid #cbd5e1;margin:6px;display:inline-block;">`).join('');
                return `<div style="margin-top:8px;">${items}</div>`;
            };

            return `
                <div class="report-section">
                    <h3 class="report-title">13. Análisis Microscópicos</h3>

                    ${/* DESENVOLVIMIENTO ESCRITURAL */''}
                    <div class="serif-text" style="white-space: normal;">
                        
                    <div style="text-align:justify;line-height:1.65;color:#334155;">
                        <h4 style="font-weight:700;text-transform:uppercase;color:#1e3a8a;margin:0 0 10px 0;">DESENVOLVIMIENTO ESCRITURAL</h4>
                        <p>El Análisis Estructural Particular o del Gesto Gráfico es la fase más profunda y determinante de la grafoscopía forense. Mientras que el análisis general observa la "fachada" de la escritura, esta técnica se adentra en las "huellas digitales del grafismo": aquellos hábitos subconscientes, automáticos e invisibles para el ojo inexperto que individualizan a un autor de manera única. Mientras que la "forma" es el aspecto externo y estático del grafismo, el desenvolvimiento es la dinámica motriz y el rastro del trayecto seguido por la mano para alcanzar dicha morfología.</p>
                        <p>La trascendencia de este análisis radica en que, para la ciencia grafoscópica, lo que identifica fehacientemente a un autor no es la igualdad geométrica de las formas, sino la semejanza y equivalencia en los desenvolvimientos. Un falsificador suele esclavizarse a la copia de la apariencia externa (imitación servil), pero es incapaz de reproducir la génesis gráfica y el dinamismo subconsciente del titular.</p>
                        <p>Resulta imperativo destacar ante su Señoría que el desenvolvimiento manifestado en la base de la caja de escritura —espacio donde se asienta el núcleo de las letras sin contar las rebasantes inferiores— posee un valor identificatorio superior. En esta zona, el grafismo descansa sobre una línea de base (real o imaginaria) donde los hábitos motores se ejecutan de manera automática e involuntaria, reflejando la verdadera personalidad escritural del amanuense.</p>
                        <p>La inclinación de los ejes en la base de la escritura constituye un gesto-tipo de difícil imitación y casi imposible de eliminar de forma voluntaria. Mientras que un imitador puede replicar la inclinación general o macroscópica de una firma, le resulta técnicamente inviable reproducir la micro-inclinación y el paralelismo grammático presentes en el contacto de los trazos con la línea de sustentación.</p>
                        <p>Esto se debe a que la mitad inferior de los grafismos se realiza con una mínima fiscalización consciente, lo que provoca que los automatismos del autor legítimo afloren con mayor vigor en esta área, denunciando mediante discrepancias axiales cualquier intento de falsificación o disfraz gráfico.</p>
                    </div>
</div>

                    <div style="margin-top:8px;">
                        <h4 style="font-weight:700;letter-spacing:.08em;border-left:4px solid #ef4444;padding-left:10px;margin:10px 0 6px 0;">DOCUMENTO CUESTIONADO</h4>
                        ${photoGrid(qPhotos)}
                        <div style="margin-top:10px;">
                            <div style="font-size:11px;color:#475569;font-style:italic;margin-bottom:6px;">Descripción Manual (Documento Cuestionado):</div>
                            <div style="border:1px solid #cbd5e1;border-radius:10px;padding:10px;white-space:pre-line;">${processTextForPrint(state.chapters.desenv_cuestionado || "")}</div>
                        </div>

                        <h4 style="font-weight:700;letter-spacing:.08em;border-left:4px solid #10b981;padding-left:10px;margin:18px 0 6px 0;">DOCUMENTO INDUBITABLE</h4>
                        ${photoGrid(iPhotos)}
                        <div style="margin-top:10px;">
                            <div style="font-size:11px;color:#475569;font-style:italic;margin-bottom:6px;">Descripción Manual (Documento Indubitable):</div>
                            <div style="border:1px solid #cbd5e1;border-radius:10px;padding:10px;white-space:pre-line;">${processTextForPrint(state.chapters.desenv_indubitable || "")}</div>
                        </div>

                        ${getDesenvConclusionHTML(true)}
                    </div>

                    ${/* El resto del capítulo 13 (otros subapartados) se mantiene como está en la UI. Si requiere incluirse en PDF, se puede ampliar este generador. */''}
                </div>
            `;
        }

function generateExordioHTML(isForPDF=false){const m=state.metadata;const h=(v)=>isForPDF?`<strong>${v}</strong>`:`<span class="placeholder-highlight">${v}</span>`;return `<div class="${isForPDF?'pdf-section':'material-card mb-8 serif-text text-justify'}"><p>C. ${h(m.juez)}.</p><p>P r e s e n t e.-</p><p>EXPEDIENTE.- ${h(m.expediente)}</p><p>${h(m.perito)}, mexicano, mayor de edad... (texto legal) ... comparezco y expongo:</p></div>`;}
        
        function processTextForPrint(text) { return text ? text.replace(/\[Hipótesis\]/g, `<strong>${state.metadata.hipotesis}</strong>`) : ''; }

        // --- EXPORT ---
        function prepareReport(isPDF = true) {
            let html = generateExordioHTML(isPDF);
            navItems.slice(1, -1).forEach(item => {
                let content = '';
                if(item.id === 'analisis_morfologico') {
                    const morphConclusion = getMorphologyConclusionHTML(true); 
                    content = `<div class="pdf-section" style="page-break-before: always;">
                            <div class="pdf-title">12. ANÁLISIS MORFOLÓGICO DEL TRAZADO</div>
                            <p style="text-align:justify;">Consiste en la observación minuciosa...</p>
                            <h4 style="margin-top:20px; color:#dc2626; font-weight:bold;">DOCUMENTO CUESTIONADO</h4>
                            <div style="text-align:center; margin-bottom:20px;">${state.photos.cuestionado.length > 0 ? state.photos.cuestionado.map(src => `<img src="${src}" style="max-width:45%; height:auto; margin:5px; border:1px solid #ccc;">`).join('') : '<p style="font-style:italic; font-size:10pt;">[Sin fotografías insertadas]</p>'}</div>
                            <h4 style="margin-top:20px; color:#2563eb; font-weight:bold;">DOCUMENTO INDUBITABLE</h4>
                            <div style="text-align:center; margin-bottom:20px;">${state.photos.indubitable.length > 0 ? state.photos.indubitable.map(src => `<img src="${src}" style="max-width:45%; height:auto; margin:5px; border:1px solid #ccc;">`).join('') : '<p style="font-style:italic; font-size:10pt;">[Sin fotografías insertadas]</p>'}</div>
                            <h4 style="margin-top:20px; font-weight:bold; background:#f0f9ff; padding:5px;">TABLA DE COTEJO MORFOLÓGICO-ESTRUCTURAL</h4>
                            <table class="pdf-table"><thead><tr><th>Aspecto Técnico</th><th style="color:#2563eb;">Indubitable (M.I.)</th><th style="color:#dc2626;">Dubitable (M.D.)</th><th>Observaciones</th></tr></thead><tbody>${state.morphologyTable.map(row => `<tr><td><strong>${row.label}</strong></td><td>${row.val_indub}</td><td>${row.val_dub}</td><td>${row.obs}</td></tr>`).join('')}</tbody></table>
                            <h4 style="margin-top:30px; font-weight:bold;">GRÁFICO RADAR (ANÁLISIS COMPLEMENTARIO)</h4>
                            <div style="text-align:center;"><p style="font-size:10pt;">Se anexan valores grafométricos complementarios (Ver anexo digital).</p><table class="pdf-table" style="width:60%; margin:0 auto;"><tr><th>Parámetro</th><th>Cuestionada</th><th>Indubitable</th></tr>${state.chartLabels.map((l, i) => `<tr><td>${l}</td><td style="color:#dc2626">${state.cotejo.cuestionada[i]}</td><td style="color:#2563eb">${state.cotejo.indubitable[i]}</td></tr>`).join('')}</table></div>
                            ${morphConclusion}
                        </div>`;
                }
                else if (item.id === 'analisis_microscopico') {
                    const microConclusion = getMicroscopicConclusionHTML(true);
                    const inclinacionConclusion = getInclinacionConclusionHTML(true);
                    content = `
                        <div class="pdf-section" style="page-break-before: always;">
                            <div class="pdf-title">13. ANÁLISIS MICROSCÓPICOS</div>
                            
                            <!-- MOMENTOS GRÁFICOS -->
                            <h4 style="font-weight:bold; border-bottom:1px solid #ccc; padding-bottom:5px; margin-bottom:10px;">MOMENTOS GRÁFICOS (O ESCRITURALES)</h4>
                            <p style="text-align:justify; margin-bottom:10px;"><strong>Definición:</strong> Los momentos gráficos se definen como cada una de las secuencias de trazos ejecutadas de forma continua...</p>
                            <p style="text-align:justify;">El análisis de los momentos gráficos es de vital importancia...</p>
                            <ul style="margin-bottom:20px;">
                                <li><strong>Identificación de la Génesis Gráfica:</strong> Permiten reconstruir la "historia del grama"...</li>
                                <li><strong>Valor de Individualización:</strong> Constituyen una de las particularidades intrínsecas...</li>
                                <li><strong>Detección de Falsificaciones:</strong> En firmas apócrifas es común observar un número inusual...</li>
                                <li><strong>Análisis Grafocinético:</strong> Su estudio permite verificar los hábitos del movimiento...</li>
                            </ul>

                            <h4 style="margin-top:20px; color:#dc2626; font-weight:bold;">DOCUMENTO CUESTIONADO (MOMENTOS)</h4>
                            <div style="text-align:center; margin-bottom:20px;">
                                ${state.photos.micro_cuestionado.length > 0 ? state.photos.micro_cuestionado.map(src => `<img src="${src}" style="max-width:45%; height:auto; margin:5px; border:1px solid #ccc;">`).join('') : '<p style="font-style:italic; font-size:10pt;">[Sin microfotografías]</p>'}
                            </div>

                            <h4 style="margin-top:20px; color:#2563eb; font-weight:bold;">DOCUMENTO INDUBITABLE (MOMENTOS)</h4>
                            <div style="text-align:center; margin-bottom:20px;">
                                ${state.photos.micro_indubitable.length > 0 ? state.photos.micro_indubitable.map(src => `<img src="${src}" style="max-width:45%; height:auto; margin:5px; border:1px solid #ccc;">`).join('') : '<p style="font-style:italic; font-size:10pt;">[Sin microfotografías]</p>'}
                            </div>

                            <h4 style="margin-top:20px; font-weight:bold;">HALLAZGOS (MOMENTOS)</h4>
                            <p style="text-align:justify; white-space: pre-line;">${state.chapters.analisis_microscopico || '[Sin descripción manual]'}</p>
                            ${microConclusion}

                            <!-- INCLINACIÓN -->
                            <div style="page-break-before: always;"></div>
                            <h4 style="font-weight:bold; border-bottom:1px solid #ccc; padding-bottom:5px; margin-bottom:10px; margin-top:20px;">INCLINACIÓN</h4>
                            <p style="text-align:justify; margin-bottom:10px;"><strong>La inclinación</strong>, se define como el ángulo de desviación que presentan los trazos magistrales...</p>
                            <p style="text-align:justify;">El análisis de la inclinación es de vital trascendencia para este estudio...</p>
                            <p style="text-align:justify;">La ciencia grafoscópica establece que la inclinación está íntimamente ligada a la velocidad...</p>

                             <h4 style="margin-top:20px; color:#dc2626; font-weight:bold;">DOCUMENTO CUESTIONADO (INCLINACIÓN)</h4>
                            <div style="text-align:center; margin-bottom:20px;">
                                ${state.photos.micro_inclinacion_c.length > 0 ? state.photos.micro_inclinacion_c.map(src => `<img src="${src}" style="max-width:45%; height:auto; margin:5px; border:1px solid #ccc;">`).join('') : '<p style="font-style:italic; font-size:10pt;">[Sin fotografías]</p>'}
                            </div>

                            <h4 style="margin-top:20px; color:#2563eb; font-weight:bold;">DOCUMENTO INDUBITABLE (INCLINACIÓN)</h4>
                            <div style="text-align:center; margin-bottom:20px;">
                                ${state.photos.micro_inclinacion_i.length > 0 ? state.photos.micro_inclinacion_i.map(src => `<img src="${src}" style="max-width:45%; height:auto; margin:5px; border:1px solid #ccc;">`).join('') : '<p style="font-style:italic; font-size:10pt;">[Sin fotografías]</p>'}
                            </div>
                            
                            <h4 style="margin-top:20px; font-weight:bold;">HALLAZGOS (INCLINACIÓN)</h4>
                            <p style="text-align:justify; white-space: pre-line;">${state.chapters.analisis_inclinacion || '[Sin descripción manual]'}</p>
                            ${inclinacionConclusion}
                        </div>
                    `;
                }

else if (item.id === 'analisis_grafocinetico') {
    const fixedText = `
        <p style="text-align:justify;">El análisis grafocinético es una especialidad técnica de la grafoscopía que se centra en el estudio de los movimientos generadores del trazo para reconstruir de manera objetiva la "historia del grafismo". A diferencia de los métodos morfológicos que solo observan la apariencia externa o "forma" de las letras, esta técnica busca entender cómo fue ejecutada la escritura, analizando la trayectoria, el ritmo y la energía del útil inscriptor.</p>
        <p style="text-align:justify;">Ahora bien, es importante determinar de manera analítica el orden, dirección y sentido de los movimientos que dan origen a cada trazo. Esto permite revelar si una grafía fue realizada con un solo impulso espontáneo o si fue fragmentada, lo cual es un indicio clave para detectar falsificaciones por imitación lenta. El perito evalúa variables físicas que son el resultado de procesos neurofisiológicos, tales como la velocidad, la presión efectiva, la tensión de línea, la fluidez y la tonicidad del trazo. Estas características son personalísimas y dependen de la coordinación neuromuscular única de cada individuo. Este método permite localizar constantes que surgen del subconsciente del autor y que aparecen de forma automática e involuntaria. Estos gestos se manifiestan en puntos críticos como los puntos de ataque (donde el útil toca el papel), los enlaces y los remates.</p>
        <p style="text-align:justify;">A través de la grafocinética se investigan signos de falta de espontaneidad, como paradas inusuales, vacilaciones, retoques o temblores, diferenciando si estos son naturales (por enfermedad o edad) o producto del esfuerzo consciente de un falsificador por imitar un modelo ajeno. La trascendencia de este análisis ante su Señoría radica en que los automatismos motores son hábitos grabados en la memoria motriz que el autor legítimo no puede evitar realizar y que un falsificador no puede replicar con exactitud. Mientras que la "forma" de una firma es relativamente fácil de imitar (imitación servil), la "melodía cinética" o el ritmo del movimiento es prácticamente imposible de suplantar, lo que otorga al dictamen un alto grado de certeza científica.</p>
    `;

    const cuPhotos = (state.photos.grafocinetico_cuestionado || []).map((src,i)=>`<img src="${src}" style="max-width:100%; border-radius:10px; margin:8px auto; display:block;" alt="Grafocinético C ${i+1}">`).join('') || '<p style="font-style:italic; font-size:10pt;">[Sin fotografías insertadas]</p>';
    const inPhotos = (state.photos.grafocinetico_indubitable || []).map((src,i)=>`<img src="${src}" style="max-width:100%; border-radius:10px; margin:8px auto; display:block;" alt="Grafocinético I ${i+1}">`).join('') || '<p style="font-style:italic; font-size:10pt;">[Sin fotografías insertadas]</p>';

    content = `
        <div class="pdf-section" style="page-break-before: always;">
            <div class="pdf-title">14. ANÁLISIS GRAFIOCINÉTICO</div>
            ${fixedText}

            <h4 style="margin-top:20px; color:#dc2626; font-weight:bold;">DOCUMENTO CUESTIONADO</h4>
            <div style="text-align:center; margin-bottom:14px;">${cuPhotos}</div>
            <div style="margin-top:10px;">
                <div style="font-weight:700; margin-bottom:6px;">Descripción manual (Documento Cuestionado):</div>
                <div style="white-space:pre-wrap; border:1px solid #e5e7eb; padding:10px; border-radius:10px;">${escapeTextForPrint(state.chapters.grafocinetico_cuestionado || '')}</div>
            </div>

            <h4 style="margin-top:22px; color:#2563eb; font-weight:bold;">DOCUMENTO INDUBITABLE</h4>
            <div style="text-align:center; margin-bottom:14px;">${inPhotos}</div>
            <div style="margin-top:10px;">
                <div style="font-weight:700; margin-bottom:6px;">Descripción manual (Documento Indubitable):</div>
                <div style="white-space:pre-wrap; border:1px solid #e5e7eb; padding:10px; border-radius:10px;">${escapeTextForPrint(state.chapters.grafocinetico_indubitable || '')}</div>
            </div>
        </div>
    `;
}

                else if(item.id === 'planteamiento') content = generatePlanteamientoHTML(isPDF);
                else if(item.id === 'doc_cuestionado') content = generateDocCuestionadoHTML(isPDF);
                else if(item.id === 'doc_indubitable') content = generateDocIndubitableHTML(isPDF);
                else if(item.id === 'analisis_microscopico') content = generateAnalisisMicroscopicoHTML(isPDF);
                else if(item.id === 'conclusion') { content = `<div class="pdf-section" style="margin-top: 50px; border: 2.5px solid #000; padding: 25px; background: #fafafa;"><div class="pdf-title text-center">CONCLUSIÓN ÚNICA</div><p><strong>${processTextForPrint(state.chapters.conclusion || '').replace(/\n/g, '<br>')}</strong></p></div>`; }
                else { const rawText = state.chapters[item.id] || ''; content = `<div class="pdf-section"><div class="pdf-title">${item.title}</div><p style="white-space: pre-line;">${processTextForPrint(rawText)}</p></div>`; }
                html += content;
            });
            return html;
        }

        function exportToPDF() { const body = document.getElementById('pdf-full-content'); body.innerHTML = prepareReport(true); document.getElementById('pdf-template').style.display = 'block'; html2pdf().set({ margin: 0.8, filename: `Dictamen_${state.metadata.expediente.replace('/', '_')}.pdf`, image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' } }).from(document.getElementById('pdf-template')).save().then(() => { document.getElementById('pdf-template').style.display = 'none'; }); }
        
        async function fetchGemini(payload) { const response = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); const result = await response.json(); return result.candidates?.[0]?.content?.parts?.[0]?.text; }
        async function askGemini() { const input = document.getElementById('ai-query-input'); const resBox = document.getElementById('ai-quick-response'); if (!input.value.trim()) return; resBox.classList.remove('hidden'); resBox.innerText = "... ✨"; try { const text = await fetchGemini({ contents: [{ parts: [{ text: `Responde como perito forense: ${input.value.trim()}` }] }] }); resBox.innerText = text; } catch (e) { resBox.innerText = "Err."; } }

        function init() {
  // Ruta A: recuperar expediente guardado (best-effort)
  try { loadStateFromStorage(); } catch (_) {}
  try { wireExpedienteControls(); } catch (_) {}
 try { const list = document.getElementById('nav-list'); const content = document.getElementById('content-display'); if (list && content) { renderNav(); loadChapter('general'); const loader = document.getElementById('loader'); if (loader) loader.classList.add('hidden'); } } catch (e) { console.error(e); } }
        if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }


function getIntegralConclusion(){
 const h=(state.metadata.hipotesis||"").toUpperCase();
 const d=(state.metadata.demandado||"");
 if(h.includes("CORRESPONDE")) return {t:"Opción 1: Correspondencia de Autoría (Firma Auténtica)",b:`Como resultado del Análisis Técnico Integral y Valoración de la Personalidad Escritural, se ha determinado una correspondencia absoluta y constante entre los automatismos, gestos-tipo y la melodía cinética identificados en la firma cuestionada respecto al material indubitado de cotejo. La morfología detectada, en conjunción con la presión efectiva y el dinamismo grafocinético observado, se sitúa plenamente dentro del Patrón de Variaciones Posibles (PVP) del titular. Por lo tanto, se concluye técnicamente que el grafismo en estudio SÍ PROCEDE DEL PUÑO Y LETRA de la persona a quien se le atribuye ${d}.`};
 if(h.includes("NO CORRESPONDE")) return {t:"Opción 2: Discrepancia de Autoría (Firma Falsa)",b:`Derivado del Análisis Técnico Integral y Valoración de la Personalidad Escritural, se han identificado divergencias significativas e insalvables en la génesis gráfica y los puntos de referencia intrínsecos del grafismo dubitado en comparación con las constantes identificadas en las muestras de cotejo. La ausencia de los automatismos habituales del titular, sumada a una presión uniforme y falta de espontaneidad, demuestra una ejecución ajena a su sistema neuromuscular. En consecuencia, se establece que la firma analizada NO PROCEDE DEL PUÑO Y LETRA de la persona a quien se le atribuye ${d}.`};
 return {t:"Opción 3: Imposibilidad Técnica o Material",b:`Tras agotar los métodos del Análisis Técnico Integral y Valoración de la Personalidad Escritural, se manifiesta una IMPOSIBILIDAD TÉCNICA para emitir un juicio categórico de autoría. Las limitaciones materiales identificadas impiden establecer de manera objetiva el conjunto de constantes escriturales necesarias para realizar un estudio comparativo fiable. Por lo anterior, este perito se encuentra impedido para determinar si el grafismo cuestionado procede o no del puño y letra de la persona que se atribuye ${d}.`};
}


function renderAnalisisTecnicoIntegral(container){
 const fixed="Este apartado constituye el estudio medular del dictamen pericial, siendo el eje técnico-científico que soporta las conclusiones finales. La determinación del origen gráfico no se basa en un solo rasgo, sino en la conjunción sistematizada y racional de diversos elementos que, en su conjunto, individualizan al autor de manera inequívoca.\n\nLa determinación científica de la autoría se fundamenta en el Principio de Correspondencia de Características. Científicamente, \"nadie es capaz de fingir simultáneamente todos los elementos de su grafía\" (Principio de Saudek); por lo tanto, aunque un falsificador logre emular la morfología (forma), no podrá replicar la presión efectiva, el dinamismo grafocinético ni los gestos gráficos subconscientes de manera coordinada.\n\nLa integración de estos análisis permite establecer el Patrón de Variaciones Posibles (PVP) del titular. Si en la firma cuestionada coinciden tanto las características generales como las particularidades invisibles y los automatismos detectados, se puede afirmar con certeza técnica que ambos grafismos proceden del mismo origen gráfico y sistema neuromuscular.";
 container.innerHTML=`
 <div class="max-w-5xl mx-auto space-y-6">
  <div class="bg-white rounded-2xl shadow p-6 border border-slate-200">
   <h2 class="text-xl font-bold">16. ANÁLISIS TÉCNICO INTEGRAL Y VALORACIÓN DE LA PERSONALIDAD ESCRITURAL</h2>
   <div class="mt-4 whitespace-pre-line leading-relaxed text-slate-800">${fixed}</div>
  </div>
  <div class="bg-white rounded-2xl shadow p-6 border border-slate-200">
   <h3 class="text-lg font-bold">CONCLUSIÓN</h3>
   <div class="mt-4 p-4 bg-slate-50 rounded-lg border">
    <div id="i16t" class="font-semibold"></div>
    <div id="i16b" class="mt-2 whitespace-pre-line"></div>
   </div>
  </div>
 </div>`;
 const c=getIntegralConclusion();
 document.getElementById("i16t").textContent=c.t;
 document.getElementById("i16b").textContent=c.b;
}


function renderAnalisisDocumentoscopia(container){
    const fixedText = FIXED_DOC17_TEXT;

    container.innerHTML = `
        <div class="max-w-5xl mx-auto space-y-6">
            <div class="bg-white rounded-2xl shadow p-6 border border-slate-200">
                <h2 class="text-xl font-bold">17. ANÁLISIS DOCUMENTOSCOPIA</h2>
                <div class="mt-4 whitespace-pre-line leading-relaxed text-slate-800">${fixedText}</div>
            </div>

            <div class="bg-white rounded-2xl shadow p-6 border border-slate-200">
                <h3 class="text-lg font-bold tracking-wide">DOCUMENTO CUESTIONADO</h3>
                <p class="text-sm text-slate-600 mt-1">Cargue las fotografías que ilustren lo expuesto para el documento cuestionado.</p>
                <div class="mt-4">
                    <input id="upload-doc17-c" type="file" accept="image/*" multiple class="block w-full" />
                </div>
                <div id="grid-documentoscopia_cuestionado" class="mt-4"></div>

                <div class="mt-5">
                    <label class="block text-sm font-semibold text-slate-700">Descripción manual (Documento cuestionado)</label>
                    <textarea class="w-full mt-2 min-h-[120px] p-3 rounded-lg border border-slate-200 bg-slate-50"
                        placeholder="Redacte aquí lo que se aprecia en el dictamen respecto al documento cuestionado..."
                        oninput="state.chapters.documentoscopia_cuestionado = this.value; try{scheduleSaveState();}catch(_){ }"
                    >${state.chapters.documentoscopia_cuestionado || ''}</textarea>
                </div>
            </div>

            <div class="bg-white rounded-2xl shadow p-6 border border-slate-200">
                <h3 class="text-lg font-bold tracking-wide">DOCUMENTO INDUBITABLE</h3>
                <p class="text-sm text-slate-600 mt-1">Cargue las fotografías que ilustren lo expuesto para el documento indubitable.</p>
                <div class="mt-4">
                    <input id="upload-doc17-i" type="file" accept="image/*" multiple class="block w-full" />
                </div>
                <div id="grid-documentoscopia_indubitable" class="mt-4"></div>

                <div class="mt-5">
                    <label class="block text-sm font-semibold text-slate-700">Descripción manual (Documento indubitable)</label>
                    <textarea class="w-full mt-2 min-h-[120px] p-3 rounded-lg border border-slate-200 bg-slate-50"
                        placeholder="Redacte aquí lo que se aprecia en el dictamen respecto al documento indubitable..."
                        oninput="state.chapters.documentoscopia_indubitable = this.value; try{scheduleSaveState();}catch(_){ }"
                    >${state.chapters.documentoscopia_indubitable || ''}</textarea>
                </div>
            </div>
        </div>
    `;

    const inputC = document.getElementById('upload-doc17-c');
    const inputI = document.getElementById('upload-doc17-i');

    if (inputC) inputC.addEventListener('change', (e) => handlePhotoUpload(e, 'documentoscopia_cuestionado'));
    if (inputI) inputI.addEventListener('change', (e) => handlePhotoUpload(e, 'documentoscopia_indubitable'));

    renderPhotoGrid('documentoscopia_cuestionado');
    renderPhotoGrid('documentoscopia_indubitable');
    const c=getDocumentoscopiaConclusion();
    const wrap=document.createElement('div');
    wrap.className='bg-white rounded-2xl shadow p-6 border border-slate-200 mt-6';
    wrap.innerHTML=`<h3 class="text-lg font-bold">CONCLUSIÓN</h3><div class="mt-4 p-4 bg-slate-50 rounded-lg border"><div class="font-semibold">${c.t}</div><div class="mt-2 whitespace-pre-line">${c.b}</div></div>`;
    container.appendChild(wrap);
}


function getDocumentoscopiaConclusion(){
  const h = (state.metadata.hipotesis || "").toUpperCase();
  const d = (state.metadata.demandado || "");
  if (h.includes("CORRESPONDE")) {
    return {
      t: "Opción 1: Correspondencia de Autenticidad (Documento Íntegro)",
      b: `Como resultado del Análisis en Documentoscopía, se ha determinado que el documento cuestionado no presenta signos de alteración material por supresión, adición o sustitución, conservando la integridad de su soporte, tintas y elementos anexos. Tras el cotejo técnico de los caracteres identificadores, se verificó una total convergencia en los automatismos y gestos-tipo del grafismo analizado, por lo que se concluye técnicamente que la firma y/o escritura en estudio SÍ PROCEDE DEL PUÑO Y LETRA de la persona a quien se le atribuye ${d}, por lo que se considera que sí es auténtico el documento cuestionado.`
    };
  }
  if (h.includes("NO CORRESPONDE")) {
    return {
      t: "Opción 2: Determinación de Falsedad (Documento Alterado o Inauténtico)",
      b: `Derivado del Análisis en Documentoscopía, se han identificado discrepancias insalvables y evidencias de manipulación material en el soporte, consistentes en borrados, lavados químicos o interpolación de caracteres, lo que vulnera la integridad y eficacia probatoria del espécimen. Dada la ausencia de las constantes gráficas habituales y la presencia de signos de falsificación durante la ejecución, se establece que el grafismo cuestionado NO PROCEDE DEL PUÑO Y LETRA de la persona a quien se le atribuye ${d}, tratándose de una pieza documental carente de autenticidad.`
    };
  }
  return {
    t: "Opción 3: Imposibilidad Técnica o Material",
    b: `Atendiendo a las limitaciones materiales del espécimen remitido para estudio, tales como la falta de idoneidad en las muestras de cotejo o la ausencia del documento original, se manifiesta una IMPOSIBILIDAD TÉCNICA para emitir un juicio categórico de autenticidad. Al no ser factible realizar el examen instrumental exhaustivo para descartar alteraciones o verificar la génesis gráfica del trazo, este perito se encuentra impedido para determinar si el grafismo en estudio procede o no del puño y letra de la persona referida ${d}.`
  };
}
