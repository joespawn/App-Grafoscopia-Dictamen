export enum AppView {
  GENERAL_DATA = 'GENERAL_DATA',
  CHAT = 'CHAT',
  VISION = 'VISION',
  LIVE = 'LIVE',
  STRUCTURAL_ANALYSIS = 'STRUCTURAL_ANALYSIS',
  INTEGRAL_ANALYSIS = 'INTEGRAL_ANALYSIS',
  DOCUMENTOSCOPY = 'DOCUMENTOSCOPY',
  BIBLIOGRAPHY = 'BIBLIOGRAPHY',
  QUESTIONS = 'QUESTIONS',
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

export interface ReportData {
  defendantName: string; // [demandado]
  hypothesis: 'A' | 'B' | 'C' | null; // A: Auténtica, B: Falsa, C: Imposibilidad
  plaintiffQuestions: string[]; // Interrogatorio Parte Actora
  defendantQuestions: string[]; // Interrogatorio Parte Demandada
}