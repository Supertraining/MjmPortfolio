import PropTypes from "prop-types";
import styles from "./aiSuggestion.module.css";
import PrimaryButtonSmall from "../../../../../buttons/primaryButtonSmall/PrimaryButtonSmall.jsx";
import R2d2 from "../../../../../images/r2d2/R2d2.jsx";

export default function AiSuggestion({
  aiSuggestion,
  setAiSuggestion,
  setAiStreamSuggestion,
  handleUseAiSuggestion,
  language,
  es,
  en,
}) {
  return (
    <div
      className={`rounded p-2 ${
        aiSuggestion ? styles.aiSuggestionContainer : styles.aiSuggestionOut
      }`}
    >
      <div>
        <div className="float-start col-3 col-sm-2 col-lg-1">
          <R2d2 />
        </div>
        <p className={styles.aiSuggestionText}>{aiSuggestion}</p>
      </div>
      <div className="d-flex gap-1">
        <PrimaryButtonSmall
          classname={`btn-outline-primary w-100`}
          onClick={handleUseAiSuggestion}
        >
          {language === "en" ? en.use : es.use}
        </PrimaryButtonSmall>
        <PrimaryButtonSmall
          classname={`btn-outline-secondary w-100`}
          onClick={() => {
            setAiSuggestion("");
            setAiStreamSuggestion("");
          }}
        >
          {language === "en" ? en.dismiss : es.dismiss}
        </PrimaryButtonSmall>
      </div>
    </div>
  );
}

AiSuggestion.propTypes = {
  aiSuggestion: PropTypes.string,
  setAiSuggestion: PropTypes.func,
  aiStreamSuggestion: PropTypes.string,
  setAiStreamSuggestion: PropTypes.func,
  handleUseAiSuggestion: PropTypes.func,
  language: PropTypes.string,
  es: PropTypes.object,
  en: PropTypes.object,
};
