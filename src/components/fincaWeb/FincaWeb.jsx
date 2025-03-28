import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./fincaWeb.module.css";
import ThemeContext from "../../context/ThemeContext";
import { LanguageContext } from "../../context/languageContext";
import Html from "../skills/html/Html.jsx";
import Css from "../skills/css/Css.jsx";
import JavaScript from "../skills/javaScript/JavaScript.jsx";
import Scss from "../skills/scss/Scss.jsx";
import Bootstrap from "../skills/bootstrap/Bootstrap.jsx";
import LinkIcon from "../icons/link/LinkIcon.jsx";

export default function FincaWeb() {
  const { theme } = useContext(ThemeContext);
  const { language, es, en } = useContext(LanguageContext);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div
      className={
        theme === "darkSide"
          ? "my-1 border border-light text-white col-12 rounded align-items-center d-flex flex-column p-3 gap-2"
          : " my-1 border border-dark col-12 rounded align-items-center d-flex flex-column p-3 gap-2"
      }
    >
      <div className="col-12 d-flex flex-column flex-xl-row justify-content-evenly">
        <div className="col-12 col-xl-4 d-flex flex-column align-items-xl-center justify-content-xl-center gap-1">
          <h2
            className={
              theme === "darkSide"
                ? "text-light p-2 text-center my-1 rounded"
                : "p-2 text-center my-1 rounded  fw-bold"
            }
          >
            #Finca El Boleado Web
          </h2>
          <p
            className={
              theme === "darkSide"
                ? "text-light p-2 text-center my-1 rounded"
                : "p-2 text-center my-1 rounded  fw-bold"
            }
          >
            {language === "es" ? es.description.fincaWeb : en.description.fincaWeb}
          </p>
        </div>

        <div
          className={
            theme === "darkSide"
              ? "col-12 col-xl-7 rounded d-flex flex-column"
              : "col-12 col-xl-7 rounded border border-dark d-flex flex-column"
          }
        >
          <img
            src="https://res.cloudinary.com/marangadev/image/upload/v1696626922/portfolio/Finca-El-Boleado-web_wbgnyf.webp"
            alt="Finca_El_Boleado_web"
            className="col-12  rounded"
          />

          <div className="d-flex align-items-center justify-content-center">
            <a
              className={
                theme === "darkSide"
                  ? "d-flex align-items-center rounded text-decoration-none p-2"
                  : "d-flex align-items-center rounded text-decoration-none p-2"
              }
              href="https://finca-el-boleado.netlify.app/"
              target={"_blank"}
              rel="noreferrer"
            >
              <p
                className={
                  theme === "darkSide"
                    ? "text-decoration-none text-white"
                    : "text-decoration-none text-dark"
                }
              >
                {language === "es" ? es.links.web : en.links.web}
              </p>
              <LinkIcon theme={theme} />
            </a>
          </div>
        </div>
      </div>

      <div className="p-3 col-12 rounded d-flex justify-content-evenly align-items-center">
        <Html theme={theme} />
        <Css theme={theme} />
        <JavaScript theme={theme} />
        <Scss theme={theme} />
        <Bootstrap theme={theme} />
      </div>
      <div
        className={`col-5 col-lg-2 ${
          inView && theme === "lightSide" ? `${styles.fincaWebTakeOff}` : ""
        }`}
        ref={ref}
      >
        {theme === "darkSide" ? (
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/marangadev/image/upload/v1696600594/portfolio/AT-AT_35441_iqpelv_acaieh.webp"
            alt="AT-AT"
          />
        ) : (
          <img
            className={inView ? "img-fluid " : "img-fluid"}
            src="https://res.cloudinary.com/marangadev/image/upload/v1696600628/portfolio/X-Wing_-_02_35411_ifnjwx_zksdvb.webp"
            alt="xWing"
          />
        )}
      </div>
    </div>
  );
}
