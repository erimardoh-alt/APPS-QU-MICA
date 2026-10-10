import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini SDK with User-Agent telemetry
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Endpoint: Ask the Chemist AI about Sodium Bicarbonate
app.post('/api/ask-chemist', async (req: Request, res: Response) => {
  try {
    const { question } = req.body;

    if (!question || typeof question !== 'string') {
      res.status(400).json({ error: 'Question is required' });
      return;
    }

    if (!process.env.GEMINI_API_KEY) {
      // Provide a high-precision default if no key is configured
      res.json({
        answer: 'El Bicarbonato de Sodio (NaHCO₃, masa molar 84.007 g/mol) es un compuesto inorgánico anfótero esencial. En solución acuosa presenta un pH de ~8.34 actuando como anfolito. A más de 50 °C experimenta termólisis endotérmica formando Na₂CO₃, H₂O y CO₂.',
        chemicalEquation: '2 NaHCO₃(s) ⎯⎯Δ→ Na₂CO₃(s) + H₂O(g) + CO₂(g)↑',
      });
      return;
    }

    const systemInstruction = `
Eres un distinguido catedrático de Química Inorgánica y Fisiología Molecular, especialista mundial en el compuesto Bicarbonato de Sodio (NaHCO₃, hidrogenocarbonato de sodio).
Responde en español de forma rigurosa, clara, precisa y concisa (1-3 párrafos).
Incluye siempre que sea posible:
1. El mecanismo molecular o estequiométrico exacto.
2. La ecuación química balanceada correspondiente.
3. El fundamento termodinámico (endotérmico/exotérmico) o fisiológico (Henderson-Hasselbalch, buffer sanguíneo).
No agregues saludos triviales ni preámbulos.
    `;

    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Timeout waiting for Gemini response')), 6000)
    );

    const callPromise = ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: `Pregunta sobre el Bicarbonato de Sodio (NaHCO₃): ${question}`,
      config: {
        systemInstruction,
        temperature: 0.2,
      },
    });

    const response = await Promise.race([callPromise, timeoutPromise]);

    const rawText = response.text || '';
    
    // Attempt to extract a balanced equation line if present
    const lines = rawText.split('\n');
    const eqLine = lines.find((l) => l.includes('→') || l.includes('⇌') || l.includes('NaHCO3') || l.includes('NaHCO₃'));

    res.json({
      answer: rawText,
      chemicalEquation: eqLine?.trim() || 'NaHCO₃ ⇌ Na⁺ + HCO₃⁻ (pH ~8.3)',
    });
  } catch (err: unknown) {
    console.error('Error querying Gemini API:', err);
    // Provide a scientifically accurate answer even if remote model is busy
    const lowerQ = String(req.body?.question || '').toLowerCase();
    let fallback = 'El Bicarbonato de Sodio (NaHCO₃, hidrogenocarbonato de sodio, masa molar 84.007 g/mol) es una sal inorgánica anfótera. Actúa como base débil frente a ácidos formando CO₂ gaseoso y agua, y como ácido débil frente a álcalis formando carbonato.';
    let eq = 'NaHCO₃ + H⁺ → Na⁺ + H₂O + CO₂↑';

    if (lowerQ.includes('estómago') || lowerQ.includes('acidez') || lowerQ.includes('antiácid')) {
      fallback = 'Como antiácido gástrico, el ion HCO₃⁻ neutraliza el ácido clorhídrico estomacal (HCl) casi al instante formando cloruro de sodio (NaCl), agua y CO₂ gaseoso, el cual distiende la cámara gástrica provocando el eructo aliviador.';
      eq = 'NaHCO₃ + HCl → NaCl + H₂O + CO₂↑';
    } else if (lowerQ.includes('solvay') || lowerQ.includes('industr')) {
      fallback = 'En el proceso industrial Solvay, se satura salmuera (NaCl) con amoníaco (NH₃) y se burbujea dióxido de carbono (CO₂). Por su menor solubilidad en medio amoniacal, el bicarbonato de sodio precipita selectivamente en la torre de carbonatación.';
      eq = 'NaCl + NH₃ + CO₂ + H₂O → NaHCO₃↓ + NH₄Cl';
    } else if (lowerQ.includes('calor') || lowerQ.includes('horno') || lowerQ.includes('térmic')) {
      fallback = 'La descomposición térmica del NaHCO₃ sólido inicia a >50 °C y es cuantitativa a 150-200 °C. Es una termólisis endotérmica que produce carbonato sódico (sosa), vapor de agua y CO₂ (pérdida gravimétrica del 36.9% de masa).';
      eq = '2 NaHCO₃(s) ⎯⎯Δ→ Na₂CO₃(s) + H₂O(g)↑ + CO₂(g)↑';
    }

    res.json({
      answer: fallback,
      chemicalEquation: eq,
      isFallback: true,
    });
  }
});

// Endpoint: Generate dynamic custom trivia questions with Gemini
app.post('/api/generate-trivia', async (req: Request, res: Response) => {
  try {
    const { level } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      res.status(400).json({ error: 'GEMINI_API_KEY not set' });
      return;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: `Genera una pregunta de trivia científica altamente rigurosa sobre el Bicarbonato de Sodio (NaHCO₃) para un nivel: ${level || 'intermedio'}.
IMPORTANTE: La respuesta correcta DEBE estar aleatoriamente posicionada en cualquiera de las 4 opciones (índice 0, 1, 2 o 3 en "correctIndex"). No pongas siempre la respuesta correcta en la primera opción (índice 0).
Retorna ÚNICAMENTE un objeto JSON válido con este formato exacto:
{
  "category": "string (ej: Termodinámica / Fisiología / Proceso Solvay)",
  "question": "string",
  "options": ["opción A", "opción B", "opción C", "opción D"],
  "correctIndex": 2,
  "chemicalEquation": "ecuación balanceada",
  "explanation": "explicación científica detallada del mecanismo"
}`,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.3,
      },
    });

    const text = response.text || '{}';
    const parsed = JSON.parse(text);
    res.json(parsed);
  } catch (err: unknown) {
    console.error('Error generating trivia:', err);
    res.status(500).json({ error: 'Error generating trivia question' });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
