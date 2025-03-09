import { useContext, useState } from "react";
import { LanguageContext } from "../../context/languageContext";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: import.meta.env.VITE_GEMINI_MODEL });

export default function useContactMe() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [r2D2, setR2D2] = useState(false);
  const [geminiSuggestion, setGeminiSuggestion] = useState("");
  const [loadingSuggestion, setLoadingSuggestion] = useState(false);

  const { language, es, en } = useContext(LanguageContext);

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
                text: language === "es" ? es.prompt : en.prompt,
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

  const getData = () => {
    fetch(import.meta.env.VITE_FORM_SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        message: msg,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  return {
    name,
    setName,
    msg,
    setMsg,
    r2D2,
    setR2D2,
    geminiSuggestion,
    getGeminiSuggestion,
    setGeminiSuggestion,
    loadingSuggestion,
    getData,
    language,
    es,
    en,
  };
}
