import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./trelloJsonToCsv.css";
import { LanguageContext } from "../../context/languageContext";
import Ejs from "../skills/ejs/Ejs.jsx";
import Express from "../skills/express/Express.jsx";
import Node from "../skills/Node/Node.jsx";
import Typescript from "../skills/typescript/Typescript.jsx";
import RepoLink from "../repoLink/RepoLink.jsx";

export default function TrelloJsonToCsv() {
  const { theme } = useContext(ThemeContext);
  const { language, es, en } = useContext(LanguageContext);

  return (
    <div
      className={
        theme === "darkSide"
          ? "my-1 border border-light text-white col-12 rounded align-items-center d-flex flex-column p-3 gap-2"
          : "bg-light my-1 border border-dark col-12 rounded align-items-center d-flex flex-column p-3 gap-2"
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
            #Trello Board Json to Csv
          </h2>
          <p
            className={
              theme === "darkSide"
                ? "text-light p-2 text-center my-1 rounded"
                : "p-2 text-center my-1 rounded  fw-bold"
            }
          >
            {language === "es" ? es.description.trelloJsonToCsv : en.description.trelloJsonToCsv}
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
            src="https://res.cloudinary.com/marangadev/image/upload/v1737037818/portfolio/trelloJsonToCsv_wx4oja.webp"
            alt="TrelloJsonToCsv"
            className="col-10 rounded "
          />

          <div className="d-flex align-items-center justify-content-center">
            <a
              className={
                theme === "darkSide"
                  ? "d-flex align-items-center rounded text-decoration-none p-2"
                  : "d-flex align-items-center rounded text-decoration-none p-2"
              }
              href="https://trello-json-to-csv.onrender.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              <p
                className={
                  theme === "darkSide"
                    ? "text-decoration-none text-white"
                    : "text-decoration-none text-dark m-auto"
                }
              >
                {language === "es" ? es.links.app : en.links.app}
              </p>
              <i
                className={
                  theme === "darkSide"
                    ? "bi bi-link-45deg text-white fs-2"
                    : "bi bi-link-45deg fs-2 text-dark"
                }
              ></i>
            </a>
            <RepoLink
              theme={theme}
              href="https://github.com/Supertraining/Trello-Json-To-Csv"
            />
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="p-3 col-12 rounded d-flex justify-content-evenly align-items-center">
          <Node theme={theme} />
          <Express theme={theme} />
          <Ejs theme={theme} />
          <Typescript theme={theme} />
          <div className="col-2">
            {theme === "darkSide" ? (
              <img
                className="img-fluid"
                src="https://res.cloudinary.com/marangadev/image/upload/v1696600596/portfolio/blackSoldier_so4ido_puefvs.webp"
                alt="blackSoldier"
              />
            ) : (
              <img
                className="img-fluid fincaStore_ShadowImg"
                src="https://res.cloudinary.com/marangadev/image/upload/v1696600617/portfolio/lightSoldier_g0kxp7_ham8ch.webp"
                alt="lightSoldier"
              />
            )}
          </div>
        </div>

        <div
          className={
            theme === "darkSide"
              ? "text-light p-2 text-center my-1 rounded"
              : "text-dark p-2 text-center my-1 rounded  fw-bold"
          }
        >
          <h6 className="text-center col-12 fw-bold">
            {language === "es" ? es.dependencies.dep : en.dependencies.dep}
          </h6>
          <p>
            <strong>Backend:</strong> Express | EJS | Cors | Helmet | Multer
          </p>
        </div>
      </div>
    </div>
  );
}
