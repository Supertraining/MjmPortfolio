import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: import.meta.env.VITE_GEMINI_MODEL });
import { useState } from "react";

export default function useAI() {
  const [aiSuggestion, setAiSuggestion] = useState("");
  const [aiStreamSuggestion, setAiStreamSuggestion] = useState("");
  const [loadingSuggestion, setLoadingSuggestion] = useState(false);

  const getAiFormSuggestion = async (prompt) => {
    
    setLoadingSuggestion(true);

    try {
      getAiSuggestion(prompt);
    } catch (error) {
      console.error("Error al obtener sugerencia de AI:", error);
      setAiSuggestion("Error al obtener sugerencia.");
    } finally {
      setLoadingSuggestion(false);
    }
  };

  const getAiSuggestion = async (prompt) => {
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
      setAiSuggestion(responseText);
    } catch (error) {
      console.error("Error al obtener sugerencia de AI:", error);
      setAiSuggestion("Error al obtener sugerencia.");
    } finally {
      setLoadingSuggestion(false);
    }
  };

  const getAiStreamSuggestion = async (prompt) => {
    setLoadingSuggestion(true);

    try {
      const result = await model.generateContentStream(prompt);
      let chunkText = "";
      for await (const chunk of result.stream) {
        if(chunk.text()){
          chunkText += chunk.text();
          setAiStreamSuggestion(chunkText);
        }
      }
    } catch (error) {
      console.error("Error al obtener sugerencia de AI:", error);
      setAiStreamSuggestion("Error al obtener sugerencia.");
    } finally {
      setLoadingSuggestion(false);
    }
  };

  return {
    aiSuggestion,
    setAiSuggestion,
    aiStreamSuggestion,
    setAiStreamSuggestion,
    loadingSuggestion,
    getAiSuggestion,
    getAiStreamSuggestion,
    getAiFormSuggestion,
  };
}
