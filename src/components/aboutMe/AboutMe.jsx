import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import ThemeContext from "../../context/ThemeContext";
import styles from "./aboutMe.module.css";

export default function AboutMe() {
  const { theme } = useContext(ThemeContext);
  const { language, es, en } = useContext(LanguageContext);

  return (
    <div
      className={
        theme === "darkSide"
          ? `text-center p-3 col-12 text-white row justify-content-center`
          : "lightSide p-3 row col-12 justify-content-center"
      }
    >
      <p
        className={
          theme === "darkSide"
            ? `${styles.aboutMe_description} border border-2 border-white rounded`
            : ` ${styles.aboutMe_description} ${styles.aboutMe_border} rounded`
        }
      >
        {language === "es" ? es.aboutMe.text : en.aboutMe.text}{" "}
      </p>
    </div>
  );
}
