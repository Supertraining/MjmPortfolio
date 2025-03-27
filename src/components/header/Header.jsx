import styles from "./header.module.css";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import ContactMe from "../contactMe/ContactMe";
import { useState } from "react";
import { LanguageContext } from "../../context/languageContext";
import Node from "../skills/node/Node";
import Express from "../skills/express/Express";
import ReactSkill from "../skills/react/ReactSkill";
import Next from "../skills/next/Next";
import ThemeSelection from "./components/ThemeSelection.jsx";
import Yoda from "../images/yoda/Yoda.jsx";
import Select from "../input/Select.jsx";

export default function Header() {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { language, handleLanguage, es, en } = useContext(LanguageContext);
  const [renderForm, setRenderForm] = useState(false);

  return (
    <>
      <header
        className={`row col-12 p-1 align-items-center justify-content-evenly ${theme} ${
          renderForm ? `${styles.header_blur}` : ""
        }`}
        style={{ minHeight: "500px" }}
        id="header"
      >
        <div className="d-flex justify-content-end align-items-center gap-4">
          <div className={"col-4 col-sm-2 col-md-2 col-lg-1"}>
            <Select
              handleLanguage={handleLanguage}
              theme={theme}
              classname={styles.header_select}
              options={[
                { key: "Es", name: "Spanish", value: "es" },
                { key: "En", name: "English", value: "en" },
              ]}
              ariaLabel="Select language"
            />
          </div>
          <ThemeSelection
            handleTheme={handleTheme}
            src="https://res.cloudinary.com/marangadev/image/upload/v1696600613/portfolio/icons/Stormtrooperx48_hocyhp_uips0d.png"
            alt="stormtrooper"
            defaultChecked
          />
          <ThemeSelection
            handleTheme={handleTheme}
            theme="darkSide"
            src="https://res.cloudinary.com/marangadev/image/upload/v1696600599/portfolio/icons/Darth-Vaderx48_h1p99d_w5ecnx.png"
            alt="Darth"
          />
        </div>

        <div className="col-4 mt-5 d-flex justify-content-end">
          <>
            {theme === "darkSide" ? (
              <img
                className={`${styles.darthWithSword} img-fluid`}
                src="https://res.cloudinary.com/marangadev/image/upload/v1696600627/portfolio/Vaderx256_fstdcy_dwwbyk.webp"
                alt="bdarth"
              />
            ) : (
              <Yoda theme={theme} />
            )}
          </>
        </div>
        <div
          className={theme === "darkSide" ? "col-4 text-center text-white" : "col-4 text-center"}
        >
          <p>{language === "es" ? es.greet.hello : en.greet.hello}</p>
          <small>{language === "es" ? es.greet.profession : en.greet.profession}</small>
          <div className="d-flex justify-content-center">
            <Node theme={theme} />
            <Express theme={theme} />
            <ReactSkill theme={theme} />
            <Next theme={theme} />
          </div>
          <br />
          <button
            className={`my-2 rounded w-100 ${
              theme === "darkSide"
                ? `${styles.header_LinkStyle_dark}`
                : `${styles.header_LinkStyle_light}`
            }`}
            onClick={() => {
              setRenderForm(true);
            }}
          >
            {language === "es" ? es.contactBtn : en.contactBtn}
          </button>
        </div>
        <div className="col-4 mt-5">
          {theme === "darkSide" ? (
            <img
              src="https://res.cloudinary.com/marangadev/image/upload/v1696600620/portfolio/myImg_fd22ng_c7cfzf.svg"
              className={`${styles.svgWhite} header_Img img-fluid`}
              alt="marangaDev"
            />
          ) : (
            <img
              src="https://res.cloudinary.com/marangadev/image/upload/v1696600619/portfolio/myImg_dkc8tx_xj0trs.webp"
              className="header_Img img-fluid"
              alt="marangaDev"
            />
          )}
        </div>
      </header>
      <div
        style={{ top: "2%" }}
        className={renderForm === true ? "position-absolute col-12 container-fluid" : "d-none"}
      >
        <ContactMe setRenderForm={setRenderForm} />
      </div>
    </>
  );
}
