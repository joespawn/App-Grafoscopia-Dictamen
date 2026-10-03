import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));

  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY || '';
  const ai = apiKey ? new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  }) : null;

  // Endpoint: Asistente Forense Chat
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history, context } = req.body;
      if (!ai) {
        return res.json({
          text: "El servicio de IA requiere configurar la variable de entorno GEMINI_API_KEY. Sin embargo, todas las herramientas de redacción, análisis y exportación del dictamen pericial continúan plenamente operativas."
        });
      }

      const contents = `
Historial previo de la conversación:
${(history || []).map((m: any) => `${m.role === 'user' ? 'Perito' : 'Asistente'}: ${m.text}`).join('\n')}

Contexto del Dictamen Pericial:
${context ? JSON.stringify(context) : 'Grafoscopía y Documentoscopía Judicial'}

Consulta o requerimiento del Perito:
${message}
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents,
        config: {
          systemInstruction: "Eres un asesor técnico y jurídico forense de alto nivel en Grafoscopía, Grafometría, Documentoscopía y Dactiloscopía para Tribunales de Justicia en México e Iberoamérica. Auxilia al Perito Judicial a redactar con precisión metodológica (Leyes del Grafismo de Solange Pellat, Principio de Intercambio de Locard, Métodos de Félix del Val Latierro, Saudek y Crepieux-Jamin), argumentar con fuerza probatoria y resolver cuestionamientos procesales."
        }
      });

      return res.json({ text: response.text || "No se generó respuesta del modelo." });
    } catch (err: any) {
      console.error("API Chat Error:", err);
      res.status(500).json({ error: err.message || "Error al procesar la solicitud en el servidor." });
    }
  });

  // Endpoint: Análisis Visual Forense
  app.post('/api/vision', async (req, res) => {
    try {
      const { image, prompt } = req.body;
      if (!ai) {
        return res.json({
          text: "Configura la clave GEMINI_API_KEY para habilitar el análisis visual con IA."
        });
      }

      if (!image) {
        return res.status(400).json({ error: "No se proporcionó imagen para analizar." });
      }

      const cleanBase64 = image.replace(/^data:image\/\w+;base64,/, '');
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: {
          parts: [
            {
              inlineData: {
                mimeType: 'image/jpeg',
                data: cleanBase64
              }
            },
            {
              text: prompt || "Realiza un análisis grafoscópico y documentoscópico forense de esta imagen: evalúa la tensión del trazo, puntos de ataque y remates, presión aparente o surco tridimensional, continuidad de la línea, posibles detenciones o retoques, y coherencia de los automatismos gráficos."
            }
          ]
        }
      });

      return res.json({ text: response.text || "No se pudo extraer análisis de la imagen." });
    } catch (err: any) {
      console.error("API Vision Error:", err);
      res.status(500).json({ error: err.message || "Error al analizar la imagen forense." });
    }
  });

  // Endpoint: Redacción y Perfeccionamiento de Cláusula Técnica
  app.post('/api/enhance-clause', async (req, res) => {
    try {
      const { section, draft, reportData } = req.body;
      if (!ai) {
        return res.json({
          suggestion: draft || "Servicio no disponible sin API Key."
        });
      }

      const prompt = `Como Perito Oficial en Grafoscopía y Documentoscopía, perfecciona y redacta con lenguaje forense riguroso, formal y solemne el siguiente párrafo para la sección '${section}':
Borrador preliminar del perito: "${draft}"
Datos del expediente: ${reportData?.court || 'H. Tribunal'}, Juicio ${reportData?.trialType || ''}, Expediente ${reportData?.fileNumber || ''}, Atribuida a ${reportData?.defendantName || ''}, Determinación: ${reportData?.hypothesis || 'En estudio'}.
Devuelve únicamente la versión corregida y ampliada, lista para integrarse al dictamen sin introducciones ni saludos.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt
      });

      return res.json({ suggestion: response.text || draft });
    } catch (err: any) {
      console.error("Enhance Clause Error:", err);
      res.status(500).json({ error: err.message || "Error al perfeccionar la cláusula." });
    }
  });

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', hasGeminiKey: Boolean(apiKey) });
  });

  // In development, hook Vite middleware
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve dist folder
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.use((req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Peritaje Forense server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start Peritaje Forense server:", err);
});
