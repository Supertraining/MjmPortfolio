import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import ThemeContext from "../../context/ThemeContext";
import { LanguageContext } from "../../context/languageContext";
import RepoLink from "../repoLink/RepoLink.jsx";
import Mongo from "../skills/mongo/Mongo.jsx";
import Express from "../skills/express/Express.jsx";
import ReactSkill from "../skills/react/ReactSkill.jsx";
import Node from "../skills/node/Node.jsx";
import styles from "./clubManager.module.css";

export default function ClubManager() {
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
        <div className="col-12 col-xl-4 d-flex flex-column align-items-md-center justify-content-md-center gap-1">
          <div className="d-flex flex-column align-items-center justify-content-center w-100 bg-transparent">
            <h2
              className={
                theme === "darkSide"
                  ? "text-light p-2 text-center my-1 rounded"
                  : "p-2 text-center my-1 rounded  fw-bold d-flex align-items-center justify-content-center"
              }
            >
              #Club Manager
            </h2>
            {/* <img
              className={theme === 'darkSide' ? `${styles.img-underConst-d}` : `${styles.img-underConst-l}`}
              src='https://res.cloudinary.com/marangadev/image/upload/v1705612164/underConstruction.com_x96ysy.webp'
              alt='Image work in progress'
            /> */}
          </div>
          <p
            className={
              theme === "darkSide"
                ? "text-light p-2 text-center my-1 rounded"
                : "p-2 text-center my-1 rounded  fw-bold"
            }
          >
            {language === "es"
              ? es.description.clubManager.description
              : en.description.clubManager.description}
          </p>
          <ul className={`${styles.functionalities_list_style}`}>
            <b>
              {language === "es"
                ? es.description.clubManager.functionalities.user.title
                : en.description.clubManager.functionalities.user.title}
            </b>
            <li>
              {language === "es"
                ? es.description.clubManager.functionalities.user.createAccount
                : en.description.clubManager.functionalities.user.createAccount}
            </li>
            <li>
              {language === "es"
                ? es.description.clubManager.functionalities.user.createReservation
                : en.description.clubManager.functionalities.user.createReservation}
            </li>
            <li>
              {language === "es"
                ? es.description.clubManager.functionalities.user.deleteReservation
                : en.description.clubManager.functionalities.user.deleteReservation}
            </li>
            <li>
              {language === "es"
                ? es.description.clubManager.functionalities.user.viewProfile
                : en.description.clubManager.functionalities.user.viewProfile}
            </li>
            <li>
              {language === "es"
                ? es.description.clubManager.functionalities.user.editProfile
                : en.description.clubManager.functionalities.user.editProfile}
            </li>
            <li>
              {language === "es"
                ? es.description.clubManager.functionalities.user.reservationHistory
                : en.description.clubManager.functionalities.user.reservationHistory}
            </li>
          </ul>
          <ul className={`${styles.functionalities_list_style}`}>
            <b>
              {language === "es"
                ? es.description.clubManager.functionalities.admin.title
                : en.description.clubManager.functionalities.admin.title}
            </b>
            <li>
              {language === "es"
                ? es.description.clubManager.functionalities.admin.createUser
                : en.description.clubManager.functionalities.admin.createUser}
            </li>
            <li>
              {language === "es"
                ? es.description.clubManager.functionalities.admin.getAllUsers
                : en.description.clubManager.functionalities.admin.getAllUsers}
            </li>
            <li>
              {language === "es"
                ? es.description.clubManager.functionalities.admin.manageReservation
                : en.description.clubManager.functionalities.admin.manageReservation}
            </li>
            <li>
              {language === "es"
                ? es.description.clubManager.functionalities.user.viewProfile
                : en.description.clubManager.functionalities.user.viewProfile}
            </li>
            <li>
              {language === "es"
                ? es.description.clubManager.functionalities.admin.createEvents
                : en.description.clubManager.functionalities.admin.createEvents}
            </li>
            <li>
              {language === "es"
                ? es.description.clubManager.functionalities.admin.activities
                : en.description.clubManager.functionalities.admin.activities}
            </li>
          </ul>
        </div>

        <div
          className={
            theme === "darkSide"
              ? `col-12 col-xl-7 rounded d-flex flex-column ${styles.gap_space}`
              : `col-12 col-xl-7 rounded border border-dark d-flex flex-column ${styles.gap_space}`
          }
        >
          <img
            src="https://res.cloudinary.com/marangadev/image/upload/v1705344036/Club-Manager_gdk7ea.webp"
            alt="CLubManager App"
            className="col-12 rounded"
          />

          <div
            className={`d-flex flex-column flex-lg-row p-1 align-items-center justify-content-center  gap-1 ${styles.links_font_size}`}
          >
            <a
              className={
                theme === "darkSide"
                  ? "d-flex align-items-center rounded text-decoration-none p-2"
                  : "d-flex align-items-center rounded text-decoration-none p-2"
              }
              href="https://club-manager-admin.netlify.app/login"
              target={"_blank"}
              rel="noreferrer"
            >
              <p
                className={
                  theme === "darkSide"
                    ? "text-decoration-none text-white d-flex align-items-center m-0"
                    : "text-decoration-none text-dark d-flex align-items-center m-0"
                }
              >
                Admin Mode
              </p>
              <i
                className={
                  theme === "darkSide"
                    ? "bi bi-link-45deg text-white fs-2"
                    : "bi bi-link-45deg fs-2 text-dark"
                }
              ></i>
            </a>
            <a
              className={
                theme === "darkSide"
                  ? "d-flex align-items-center rounded text-decoration-none p-2"
                  : "d-flex align-items-center rounded text-decoration-none p-2"
              }
              href="https://club-manager-client.netlify.app/"
              target={"_blank"}
              rel="noreferrer"
            >
              <p
                className={
                  theme === "darkSide"
                    ? "text-decoration-none text-white d-flex align-items-center m-0"
                    : "text-decoration-none text-dark d-flex align-items-center m-0"
                }
              >
                User Mode
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
              href={"https://github.com/Supertraining/ClubManager"}
            />
            Testing credentials:
            <ul className="list-unstyled m-0">
              <li>username: bmyguest@fakemail.com</li>
              <li>password: @bmyguest1234</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="p-3 col-12 rounded d-flex justify-content-evenly align-items-center">
          <Mongo theme={theme} />
          <Express theme={theme} />
          <ReactSkill theme={theme} />
          <Node theme={theme} />

          <div
            className="col-2"
            ref={ref}
          >
            {theme === "darkSide" ? (
              <img
                className="img-size"
                src="https://res.cloudinary.com/marangadev/image/upload/v1696600598/portfolio/Death_Star_256_cd9pam_w2p37h.webp"
                alt="deathStar"
              />
            ) : (
              <img
                className={inView ? `${styles.dalleShipTakeOff} img-size` : "img-size"}
                src="https://res.cloudinary.com/marangadev/image/upload/v1696600615/portfolio/Imperial_Star_Destroyer_t3jovq_zl17x8.webp"
                alt="imperialStar"
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
            <strong>Backend:</strong> bcrypt | connect-mongo | cors| dotenv | express |
            express-validator | helmet | jsonwebtoken | mongoose | node-cron | nodemailer |
            unidecode | uuid | winston
          </p>
          <p>
            <strong>Frontend:</strong> axios | bootstrap | js-cookie | react | react-bootstrap |
            react-date-time-picker-popup | react-dom | react-hook-form | react-intersection-observer
            | react-router-dom | react-toastify | unidecode | uuid | validator
          </p>
        </div>
      </div>
    </div>
  );
}
