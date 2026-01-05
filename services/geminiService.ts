import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Message } from '../types';

// Initialize the client with the API key from the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Sends a chat message to the Gemini model.
 */
export const sendChatMessage = async (
  currentMessage: string,
  history: Message[]
): Promise<string> => {
  try {
    // We strictly use the model name defined in the guidelines for complex text tasks
    const modelId = 'gemini-3-flash-preview'; 
    
    // Construct the chat history formatted for the API if needed, 
    // or just send the current prompt with context. 
    // For simplicity in this stateless service, we'll concatenate a simple context 
    // or use the generateContent method directly.
    
    // In a real production app, you might maintain a ChatSession object.
    const prompt = `
      History:
      ${history.map(m => `${m.role}: ${m.text}`).join('\n')}
      
      User: ${currentMessage}
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        systemInstruction: "You are a helpful, senior-level engineering assistant. Be concise and precise.",
      }
    });

    // Access .text directly as a property
    const text = response.text;
    return text || "No response generated.";
  } catch (error) {
    console.error("Chat Error:", error);
    return "I encountered an error processing your request.";
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
    // Remove data URL prefix if present (e.g., "data:image/png;base64,")
    const cleanBase64 = base64Image.split(',')[1] || base64Image;

    // Using the flash image model for general tasks as per guidelines
    const modelId = 'gemini-2.5-flash-image';

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg', // Assuming JPEG for simplicity, or detect from header
              data: cleanBase64
            }
          },
          {
            text: prompt || "Describe this image in detail."
          }
        ]
      }
    });

    return response.text || "Could not analyze the image.";
  } catch (error) {
    console.error("Vision Error:", error);
    return "Failed to analyze the image. Please try again.";
  }
};