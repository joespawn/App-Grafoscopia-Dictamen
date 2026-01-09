import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Message } from '../types';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!apiKey) {
    throw new Error("Falta configurar VITE_GEMINI_API_KEY en el entorno.");
  }

  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }

  return aiClient;
};

/**
 * Sends a chat message to the Gemini model.
 */
export const sendChatMessage = async (
  currentMessage: string,
  history: Message[]
): Promise<string> => {
  try {
    const ai = getClient();
    // Usamos gemini-3-flash-preview para tareas de texto rápidas y eficientes
    const modelId = 'gemini-3-flash-preview'; 
    
    const context = `
      History:
      ${history.map(m => `${m.role}: ${m.text}`).join('\n')}
      
      User: ${currentMessage}
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: context,
      config: {
        systemInstruction: "Eres un asistente experto en Grafoscopía y Documentoscopía forense. Ayuda al perito a redactar secciones técnicas, corregir ortografía y sugerir bibliografía. Mantén un tono profesional y jurídico.",
      }
    });

    return response.text || "No se generó respuesta.";
  } catch (error) {
    console.error("Chat Error:", error);
    return "Error al conectar con la IA. Por favor verifica que VITE_GEMINI_API_KEY esté configurada en el archivo .env.local.";
  }
};

/**
 * Analyzes an image with a text prompt.
 */
export const analyzeImageWithGemini = async (
  base64Image: string,
  prompt: string
): Promise<string> => {
  try {
    const ai = getClient();
    const cleanBase64 = base64Image.split(',')[1] || base64Image;
    // Usamos gemini-2.5-flash-image para análisis visual general
    const modelId = 'gemini-2.5-flash-image';

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg',
              data: cleanBase64
            }
          },
          {
            text: prompt || "Analiza esta imagen desde una perspectiva forense documental. Describe trazos, presión y posibles alteraciones."
          }
        ]
      }
    });

    return response.text || "No se pudo analizar la imagen.";
  } catch (error) {
    console.error("Vision Error:", error);
    return "Error en el análisis visual. Revisa el formato de la imagen o tu conexión.";
  }
};
