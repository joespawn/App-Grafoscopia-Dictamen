export enum AppView {
  GENERAL_DATA = 'GENERAL_DATA',
  PREFACE = 'PREFACE', // Capitulo 1
  EXPERTISE_AREAS = 'EXPERTISE_AREAS', // Capitulo 2
  PROBLEM_STATEMENT = 'PROBLEM_STATEMENT', // Capitulo 3
  EQUIPMENT = 'EQUIPMENT', // Capitulo 4
  METHODOLOGY = 'METHODOLOGY', // Capitulo 5 (Cientifico General)
  METHODS = 'METHODS', // Capitulo 6 (Tecnico Especifico por Materia)
  APPLICABLE_TECHNIQUES = 'APPLICABLE_TECHNIQUES', // Capitulo 7
  MORPHOLOGICAL_ANALYSIS = 'MORPHOLOGICAL_ANALYSIS', // Capitulo 8
  QUESTIONNAIRE = 'QUESTIONNAIRE', // Capitulo 9
  QUESTIONED_DOCUMENT = 'QUESTIONED_DOCUMENT', // Capitulo 10
  UNDISPUTED_DOCUMENT = 'UNDISPUTED_DOCUMENT', // Capitulo 11
  STRUCTURAL_ANALYSIS = 'STRUCTURAL_ANALYSIS', // Capitulo 12
  MICROSCOPIC_ANALYSIS = 'MICROSCOPIC_ANALYSIS', // Capitulo 13
  GRAPHOKINETIC_ANALYSIS = 'GRAPHOKINETIC_ANALYSIS', // Capitulo 14
  GENERAL_STRUCTURAL_ANALYSIS = 'GENERAL_STRUCTURAL_ANALYSIS', // Nuevo Capitulo 15
  INTEGRAL_ANALYSIS = 'INTEGRAL_ANALYSIS', // Capitulo 16
  DOCUMENTOSCOPY = 'DOCUMENTOSCOPY', // Capitulo 17
  BIBLIOGRAPHY = 'BIBLIOGRAPHY', // Capitulo 18
  QUESTIONS = 'QUESTIONS', // Capitulo 19
  CHAT = 'CHAT',
  VISION = 'VISION',
  LIVE = 'LIVE',
  EXPORT = 'EXPORT',
  SETTINGS = 'SETTINGS'
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface VisionState {
  image: string | null; // Base64
  prompt: string;
  result: string | null;
  loading: boolean;
}

export interface TableRow {
  aspect: string;
  indubitable: string;
  dubitable: string;
  observations: string;
}

export interface StructuralAnalysisData {
  questionedImages: string[];
  undisputedImages: string[];
  dictamen: string;
  tableRows: TableRow[];
}

export interface MicroscopicAnalysisData {
  momentosQuestionedImages: string[];
  momentosUndisputedImages: string[];
  momentosAnalysisText: string;
  inclinationQuestionedImages: string[];
  inclinationUndisputedImages: string[];
  inclinationAnalysisText: string;
  developmentQuestionedImages: string[];
  developmentUndisputedImages: string[];
  developmentAnalysisText: string;
}

export interface ComparisonAnalysisData {
  questionedImages: string[];
  undisputedImages: string[];
  analysisText: string;
}

export interface DocumentoscopyData {
  questionedImages: string[];
  undisputedImages: string[];
  dictamen: string;
}

export interface ReportData {
  // Datos Identificativos Básicos
  court: string; // [Juzgado o Tribunal]
  plaintiff: string; // [Datos del Actor]
  defendantName: string; // [Datos del Demandado]
  trialType: string; // [Tipo de Juicio]
  fileNumber: string; // [Número de Expediente]
  
  // Detalles del Documento Cuestionado
  docDescription: string; // [Tipo de Documento: Pagaré, Cheque, etc.]
  questionedDocCount: number; // [Cantidad de documentos]
  questionedDocDate: string; // [Fecha del documento cuestionado]
  questionedDocPhoto: string | null; // [Fotografía Documento Cuestionado]

  // Detalles del Documento Indubitable
  undisputedDocPages: number; // [Número de páginas]
  undisputedDocDate: string; // [Fecha de firmas indubitables]
  courtAddress: string; // [Domicilio del Juzgado]
  undisputedDocFolio: string; // [Foja donde se localiza]

  expertiseSubjects: string; // [Materias del Dictamen]
  selectedSubjects: string[]; // Lista de materias seleccionadas
  sampleDate: string; // [Fecha de Toma de Muestra]
  expertName: string; // [Nombre del Perito]
  
  // Determinación Pericial / Hipótesis
  hypothesis: 'A' | 'B' | 'C' | null; // A: Auténtica, B: Falsa, C: Imposibilidad
  plaintiffQuestions: string[]; // [Interrogatorio Parte Actora]
  defendantQuestions: string[]; // [Interrogatorio parte demandada]
  
  // Datos Técnicos Persistentes de los Capítulos
  structuralAnalysis?: StructuralAnalysisData;
  microscopicAnalysis?: MicroscopicAnalysisData;
  graphokineticAnalysis?: ComparisonAnalysisData;
  generalStructuralAnalysis?: ComparisonAnalysisData;
  integralAnalysis?: ComparisonAnalysisData;
  documentoscopyData?: DocumentoscopyData;
  questioningAnswers?: Record<string, string>; // p-0, d-0, etc.
}