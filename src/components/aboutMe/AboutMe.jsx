import PropTypes from "prop-types";
import styles from "./aboutMe.module.css";

export default function AboutMe({ theme, language, es, en }) {
  return (
    <div
      className={`text-center p-3 col-12 row justify-content-center ${
        theme === "darkSide" ? "text-white" : "text-dark"
      }`}
    >
      <h2
        className={`${styles.aboutMe_title} ${
          theme === "darkSide" ? styles.aboutMe_dark_description : ""
        }`}
      >
        {language === "es" ? es.aboutMe.title : en.aboutMe.title}
      </h2>
      <p
        className={`${styles.aboutMe_description} ${
          theme === "darkSide" ? styles.aboutMe_dark_description : ""
        }`}
      >
        {language === "es" ? es.aboutMe.text : en.aboutMe.text}{" "}
      </p>
    </div>
  );
}

AboutMe.propTypes = {
  theme: PropTypes.string,
  language: PropTypes.string,
  es: PropTypes.object,
  en: PropTypes.object,
};

AboutMe.defaultProps = {
  theme: "",
  language: "",
  es: {},
  en: {},
};
