import PropTypes from "prop-types";
import styles from "./header.module.css";
import ContactMe from "./components/contactMe/ContactMe.jsx";
import { useState } from "react";
import ThemeSelector from "./components/themeSelector/ThemeSelector.jsx";
import Skills from "../skills/Skill.jsx";
import { SKILLS_CONSTANTS } from "../../constants/index.js";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton.jsx";
import Introduction from "./components/introduction/Introduction.jsx";
import LanguageSelector from "./components/languageSelector/LanguageSelector.jsx";

export default function Header({ theme, handleTheme, language, handleLanguage, es, en }) {
  const [renderForm, setRenderForm] = useState(false);

  return (
    <>
      <header
        className={`d-flex flex-column align-items-center justify-content-evenly gap-4 col-12 p-1 p-sm-3  ${
          renderForm ? `${styles.header_blur}` : ""
        }`}
        style={{ minHeight: "500px" }}
        id="header"
      >
        <div className="d-flex justify-content-end align-items-center col-12 gap-4">
          <div className="col-5 col-sm-3 col-md-2 col-lg-2 col-xl-1">
            <LanguageSelector
              theme={theme}
              handleLanguage={handleLanguage}
            />
          </div>
          <div className="d-flex align-items-center gap-2">
            <ThemeSelector
              handleTheme={handleTheme}
              theme={theme}
              defaultChecked
            />
          </div>
        </div>

        {/* <div> */}
          <Introduction
            language={language}
            es={es}
            en={en}
            theme={theme}
          />
        {/* </div> */}

        <PrimaryButton
          classname={`rounded w-100 ${styles.header_contactMe_btn} 
            ${theme === "darkSide" ? `btn-outline-light` : `btn-dark`}`}
          onClick={() => {
            setRenderForm(true);
          }}
        >
          {language === "es" ? es.contactBtn : en.contactBtn}
        </PrimaryButton>

        <div className="d-flex justify-content-evenly align-items-center flex-wrap gap-3 p-3">
          <Skills
            theme={theme}
            name={true}
            skills={Object.values(SKILLS_CONSTANTS)}
          />
        </div>
      </header>
      <div
        style={{ top: "10%" }}
        className={renderForm === true ? "position-absolute col-12 container-fluid" : "d-none"}
      >
        <ContactMe setRenderForm={setRenderForm} />
      </div>
    </>
  );
}

Header.propTypes = {
  theme: PropTypes.string,
  handleTheme: PropTypes.func,
  language: PropTypes.string,
  handleLanguage: PropTypes.func,
  es: PropTypes.object,
  en: PropTypes.object,
};

Header.defaultProps = {
  theme: "",
  handleTheme: () => {},
  language: "",
  handleLanguage: () => {},
  es: {},
  en: {},
};
