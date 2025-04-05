import PropTypes from "prop-types";
import Select from "../../../inputs/Select.jsx";
import styles from "./languageSelector.module.css";

export default function LanguageSelector({ theme, handleLanguage }) {
  return (
    <>
      <Select
        handleLanguage={handleLanguage}
        theme={theme}
        classname={`${styles.lang_select} ${theme === "darkSide" ? "bg-dark text-white" : styles.lang_select_background}`}
        options={[
          { key: "Es", name: "Spanish", value: "es" },
          { key: "En", name: "English", value: "en" },
        ]}
        ariaLabel="Select language"
      />
    </>
  );
}

LanguageSelector.propTypes = {
  theme: PropTypes.string,
  handleLanguage: PropTypes.func,
};
