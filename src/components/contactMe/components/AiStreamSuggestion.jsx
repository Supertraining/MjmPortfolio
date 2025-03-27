import PropTypes from "prop-types";
import styles from "./aiStreamSuggestion.module.css";
import R2d2 from "../../images/r2d2/R2d2.jsx";
export default function AiStreamSuggestion({ aiSuggestion, greet, aiStreamSuggestion }) {
  return (
    <div
      style={{ minHeight: "100px" }}
      className={`d-flex rounded p-1 bg-white col-12 col-sm-6 visible ${
        aiSuggestion && styles.r2d2_fadeout
      }
               `}
    >
      <div className="col-2 col-sm-1">
        <R2d2 />
      </div>
      <p className={`${styles.r2d2_text} ${greet ? styles.r2d2_fadein : ""}`}>
        {aiStreamSuggestion}
      </p>
    </div>
  );
}

AiStreamSuggestion.propTypes = {
  aiSuggestion: PropTypes.string,
  greet: PropTypes.bool,
  aiStreamSuggestion: PropTypes.string,
};
