import { useContext, useState } from "react";
import { LanguageContext } from "../../../../../context/languageContext.jsx";

export default function useContactMe() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [greet, setGreet] = useState(false);

  const { language, es, en } = useContext(LanguageContext);

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
    setGreet,
    greet,
    getData,
    language,
    es,
    en,
  };
}
