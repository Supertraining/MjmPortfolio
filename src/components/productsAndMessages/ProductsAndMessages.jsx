import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./ProductsAndMessages.css";
import { LanguageContext } from "../../context/languageContext";
import Mongo from "../skills/mongo/Mongo.jsx";
import Express from "../skills/express/Express.jsx";
import Node from "../skills/node/Node.jsx";
import Ejs from "../skills/ejs/Ejs.jsx";

export default function ProductsAndMessages() {
  const { theme } = useContext(ThemeContext);
  const { es, en, language } = useContext(LanguageContext);

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
            #Products handle and chat
          </h2>
          <p
            className={
              theme === "darkSide"
                ? "text-light p-2 text-center my-0 rounded"
                : "p-2 text-center my-1 rounded  fw-bold"
            }
          >
            {language === "es" ? es.description.productsAndMssgs : en.description.productsAndMssgs}

            <a
              className="text-decoration-none mx-3"
              href="https://productsandmssgs.onrender.com/api/productos-test"
              target="_blank"
              rel="noreferrer"
            >
              Mock <i className="bi bi-box-arrow-up-right text-primary "></i>
            </a>
            <a
              className="text-decoration-none mx-3"
              href="https://productsandmssgs.onrender.com/api/info"
              target="_blank"
              rel="noreferrer"
            >
              Server_Info <i className="bi bi-box-arrow-up-right text-primary "></i>
            </a>
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
            src="https://res.cloudinary.com/marangadev/image/upload/v1696626923/portfolio/LoginMssgAndProd_bfenfz.webp"
            alt="Products_and_messages_API"
            className="col-12 rounded"
          />

          <div className="d-flex align-items-center justify-content-center">
            <a
              className={
                theme === "darkSide"
                  ? "d-flex align-items-center rounded text-decoration-none p-2"
                  : "d-flex align-items-center rounded text-decoration-none p-2"
              }
              href="https://dall-e-clone-blog.netlify.app/"
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
          </div>
        </div>
      </div>

      <div>
        <div className="p-3 col-12 rounded d-flex justify-content-evenly align-items-center">
          <Node theme={theme} />
          <Express theme={theme} />
          <Mongo theme={theme} />
          <Ejs theme={theme} />
          <div className="col-2">
            {theme === "darkSide" ? (
              <img
                className="img-size"
                src="https://res.cloudinary.com/marangadev/image/upload/v1696600625/portfolio/vaderToy_uojbtf_xzpzrd.webp"
                alt="LegoVader"
              />
            ) : (
              <img
                className="img-size ShadowImg"
                src="https://res.cloudinary.com/marangadev/image/upload/v1696600616/portfolio/Lego-Luke_wkyka2_dyunqs.webp"
                alt="LegoLuke"
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
            <strong>backend:</strong> axios | bcrypt | compression | connect-mongo | cors | dotenv |
            ejs | express | express-session | knex | minimist | mongoose | mysql | normalizr |
            passport | passport-local | socket.io | util | winston | faker-js/faker | autocannon |
            chai | mocha
          </p>
        </div>
      </div>
    </div>
  );
}
