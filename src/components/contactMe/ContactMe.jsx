//TODO: REVISAR ESTILOS: ¿10 COLUMNAS? | SEPARAR COMPONENTES EJ: FORM
import propTypes from "prop-types";
import styles from "./contactMe.module.css";
import useContactMe from "./useContactMe.jsx";
import useAI from "../../hooks/useAI.jsx";

export default function ContactMe({ setRenderForm }) {
  const { name, setName, msg, setMsg, r2D2, setR2D2, getData, language, es, en } = useContactMe();

  const { geminiSuggestion, getGeminiSuggestion, loadingSuggestion, setGeminiSuggestion } = useAI({
    prompt: language === "es" ? es.textAreaPrompt : en.textAreaPrompt,
  });

  return (
    <>
      <form className={`d-flex flex-column w-100 rounded p-2 ${styles.form_ContactMe}`}>
        <div className="d-flex align-items-center">
          <div className={"col-2"}>
            <img
              className="img-fluid"
              src={import.meta.env.VITE_IMG_R2D2}
              alt=""
            />
          </div>
          <>
            {name && language === "en" ? `${en.r2D2.hello} ${name} ${en.r2D2.msgThx}` : "..."}
            {name && language === "es" ? `${es.r2D2.hello} ${name} ${es.r2D2.msgThx}` : "..."}
            {r2D2 === true && language === "en" ? `${en.r2D2.msgSent}` : ""}
            {r2D2 === true && language === "es" ? `${es.r2D2.msgSent}` : ""}
          </>
        </div>

        <div className="d-flex align-items-end">
          <div className="d-flex flex-column my-1">
            <a
              className={`m-1 d-flex align-items-center text-decoration-none text-primary ${styles.Linkedin}`}
              href={import.meta.env.VITE_LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={`${styles.form_Div_Img} mx-1 rounded-5`}
                src={import.meta.env.VITE_IMG_LINKEDIN}
                alt="Linkedin"
              />
              Linkedin
            </a>
            <input
              className="rounded col-10"
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="d-flex flex-column">
            <div className="m-1 d-flex align-items-center">
              <img
                className={`${styles.form_Div_Img} mx-1`}
                src={import.meta.env.VITE_IMG_EMAIL}
                alt="e-mail"
              />{" "}
              marangamatias@gmail.com
            </div>
            <a
              className={`m-1 d-flex align-items-center text-decoration-none text-dark ${styles.whatsapp}`}
              href={import.meta.env.VITE_WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={`${styles.form_Div_Img} mx-1`}
                src={import.meta.env.VITE_IMG_WHATSAPP}
                alt="whapp"
              />{" "}
              +5491150111375
            </a>
          </div>
        </div>
        <textarea
          className="rounded opacity-100"
          name="mensaje"
          id="mensaje"
          cols="30"
          rows="8"
          placeholder={language === "en" ? en.contactTextArea : es.contactTextArea}
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
            getGeminiSuggestion(e.target.value);
          }}
          required
        />
        {loadingSuggestion && (
          <div
            className="spinner-grow spinner-grow-sm text-primary"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {geminiSuggestion && !loadingSuggestion && (
          <div
            className={`${
              geminiSuggestion ? styles.geminiSuggestionContainer : styles.geminiSuggestionOut
            }`}
          >
            {" "}
            {/* Contenedor principal con estilo Gemini */}
            <div className={styles.geminiSuggestionTitle}>
              {" "}
              {/* Título con logo */}
              <img
                src={import.meta.env.VITE_GEMINI_LOGO_URL}
                alt="Gemini AI Logo"
                className={styles.geminiLogoIcon}
              />{" "}
              Sugerencia de Gemini AI:
            </div>
            <p className={styles.geminiSuggestionText}>{geminiSuggestion}</p>{" "}
            <div className={styles.geminiSuggestionButtons}>
              {" "}
              <button
                className={`btn btn-small btn-outline-primary rounded`}
                onClick={() => {
                  setMsg(geminiSuggestion), setGeminiSuggestion("");
                }}
              >
                Usar
              </button>
              <button
                className={`btn btn-small btn-outline-secondary rounded`}
                onClick={() => setGeminiSuggestion("")}
              >
                Limpiar
              </button>
            </div>
          </div>
        )}
        {!geminiSuggestion && !loadingSuggestion && (
          <div className="d-flex justify-content-evenly mt-1">
            <button
              className="rounded btn btn-dark"
              type="submit"
              onClick={(e) => {
                if (msg && name) {
                  e.preventDefault();
                  getData();
                  setTimeout(() => {
                    setRenderForm(false);
                  }, 3000);
                  setR2D2(true);
                  setTimeout(() => {
                    setR2D2(false);
                  }, 5000);
                  setName("");
                  setMsg("");
                }
              }}
            >
              {language === "en" ? en.formSubmit : es.formSubmit}
            </button>
            <button
              className="rounded btn btn-dark"
              onClick={() => {
                setRenderForm(false);
              }}
            >
              {language === "en" ? en.formClose : es.formClose}
            </button>
          </div>
        )}
      </form>
    </>
  );
}

ContactMe.propTypes = {
  setRenderForm: propTypes.func,
};
