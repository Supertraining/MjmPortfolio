import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: import.meta.env.VITE_GEMINI_MODEL });
import { useState } from "react";

export default function useAI({ prompt }) {
  const [geminiSuggestion, setGeminiSuggestion] = useState("");
  const [loadingSuggestion, setLoadingSuggestion] = useState(false);
  const getGeminiSuggestion = async (currentText) => {
    if (!currentText) {
      setGeminiSuggestion("");
      return;
    } else if (currentText.length <= 4 || currentText.length > 5 || geminiSuggestion.length > 0) {
      return;
    }
    setLoadingSuggestion(true);

    try {
      const result = await model.generateContent({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
        generationConfig: {
          candidateCount: 1,
        },
      });
      const responseText = result.response.text();

      setGeminiSuggestion(responseText);
    } catch (error) {
      console.error("Error al obtener sugerencia de Gemini:", error);
      setGeminiSuggestion("Error al obtener sugerencia.");
    } finally {
      setLoadingSuggestion(false);
    }
  };
  return { geminiSuggestion, setGeminiSuggestion, loadingSuggestion, getGeminiSuggestion };
}
