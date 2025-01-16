import "./header.css";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import ContactMe from "../contactMe/ContactMe";
import { useState } from "react";
import { LanguageContext } from "../../context/languageContext";
import Node from "../skills/node/Node";
import Express from "../skills/express/Express";
import ReactSkill from "../skills/react/ReactSkill";
import Next from "../skills/next/Next";

export default function Header() {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { language, handleLanguage, es, en } = useContext(LanguageContext);
  const [renderForm, setRenderForm] = useState(false);

  return (
    <header
      className={`row align-items-center justify-content-evenly ${theme}`}
      id="header"
    >
      <select
        name="language"
        id="language"
        className={
          theme === "darkSide"
            ? "col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 my-2 bg-dark text-white"
            : "col-2 col-md-1 my-2"
        }
        onChange={handleLanguage}
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
      <div className="col-12 text-center p-2 d-flex justify-content-center">
        <div className="col-2 flex-wrap">
          <img
            src="https://res.cloudinary.com/marangadev/image/upload/v1696600629/portfolio/yoda256_mkvlg4_svonoo.webp"
            alt=""
            className={theme === "darkSide" ? "img-fluid yodaShadow" : "img-fluid yodaLight"}
          />
        </div>
        <small className={theme === "darkSide" ? "my-4 mx-3 text-white" : "my-4 mx-3"}>
          {language === "es" ? es.side : en.side}
        </small>
        <input
          className="m-1 my-5"
          type="radio"
          name="theme"
          id="lightSide"
          value="lightSide"
          onClick={handleTheme}
          defaultChecked
        />
        <label
          className="m-1 my-4 col-1"
          htmlFor="lightSide"
        >
          <img
            className="rounded-4 img-fluid"
            src="https://res.cloudinary.com/marangadev/image/upload/v1696600613/portfolio/icons/Stormtrooperx48_hocyhp_uips0d.png"
            alt="stormtrooper"
          />

          <i
            className={
              theme === "darkSide"
                ? "bi bi-brightness-high-fill mx-1 text-white "
                : "bi bi-brightness-high-fill mx-1"
            }
          ></i>
        </label>
        <input
          className="m-1 my-5"
          type="radio"
          name="theme"
          id="darkSide"
          value="darkSide"
          onClick={handleTheme}
        />
        <label
          className="m-1 my-4 col-1"
          htmlFor="darkSide"
        >
          <img
            className="rounded-4 img-fluid"
            src="https://res.cloudinary.com/marangadev/image/upload/v1696600599/portfolio/icons/Darth-Vaderx48_h1p99d_w5ecnx.png"
            alt="Darth"
          />
          <i
            className={
              theme === "darkSide"
                ? "bi bi-moon-fill mx-1 moonIconDark"
                : "bi bi-moon-fill mx-1 text-white moonIconLight"
            }
          ></i>
        </label>
      </div>

      <div className="col-4 mt-5 d-flex justify-content-end">
        <>
          {theme === "darkSide" && (
            <img
              className="darthWithSword img-fluid"
              src="https://res.cloudinary.com/marangadev/image/upload/v1696600627/portfolio/Vaderx256_fstdcy_dwwbyk.webp"
              alt="bdarth"
            />
          )}
        </>
        <img
          src="https://res.cloudinary.com/marangadev/image/upload/v1696600619/portfolio/myImg_dkc8tx_xj0trs.webp"
          className={theme === "darkSide" ? "d-none" : "header_Img img-fluid"}
          alt="myPng"
        />
      </div>
      <div className={theme === "darkSide" ? "col-4 text-center text-white" : "col-4 text-center"}>
        <img
          className={theme === "darkSide" ? "stormTroopers img-fluid d-none" : "img-fluid"}
          src="https://res.cloudinary.com/marangadev/image/upload/v1696600622/portfolio/Stormtroopersx128_au221l_fc7zts.webp"
          alt="Stormtroopers"
        />
        <p>{language === "es" ? es.greet.hello : en.greet.hello}</p>
        <p>{language === "es" ? es.greet.myNameIs : en.greet.myNameIs}</p>
        <h1>{language === "es" ? es.greet.name : en.greet.name}</h1>
        <small>{language === "es" ? es.greet.profession : en.greet.profession}</small>
        <div className="d-flex justify-content-center">
          <Node theme={theme} />
          <Express theme={theme} />
          <ReactSkill theme={theme} />
          <Next theme={theme} />
        </div>
        <br />
        <button
          className="header_LinkStyle my-2 rounded"
          onClick={() => {
            setRenderForm(true);
          }}
        >
          {language === "es" ? es.contactBtn : en.contactBtn}
        </button>
      </div>
      <div className="col-4 mt-5">
        <img
          src="https://res.cloudinary.com/marangadev/image/upload/v1696600620/portfolio/myImg_fd22ng_c7cfzf.svg"
          className={
            theme === "darkSide"
              ? "svgWhite header_Img pb-4 img-fluid"
              : "header_Img pb-4 img-fluid"
          }
          alt="mySvg"
        />
      </div>
      <div
        className={
          renderForm === true ? "position-absolute col-7 col-sm-6 col-md-5 col-xl-5" : "d-none"
        }
      >
        <ContactMe setRenderForm={setRenderForm} />
      </div>
    </header>
  );
}
