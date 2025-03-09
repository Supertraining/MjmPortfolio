import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import ThemeContext from "../../context/ThemeContext";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  const { theme } = useContext(ThemeContext);
  const { language, es, en } = useContext(LanguageContext);

  return (
    <div
      className={
        theme === "darkSide"
          ? `text-center p-3 text-white row justify-content-center`
          : "lightSide p-3 row justify-content-center"
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
        <a
          className="text-decoration-none"
          href="https://render.com/"
        >
          render <i className="bi bi-box-arrow-up-right text-primary "></i>
        </a>
      </p>
    </div>
  );
}
