import PropTypes from "prop-types";
import HeaderImage from "../image/HeaderImage.jsx";

export default function Introduction({ language, es, en, theme }) {
  return (
    <div className="d-flex flex-column gap-3 col-12 text-center">
      <h1>{language === "es" ? es.greet.hello : en.greet.hello}</h1>
      <div className="col-12 d-flex justify-content-center gap-4 p-2">
        <div className="col-5 col-sm-4 col-md-3 col-xxl-2">
          <HeaderImage theme={theme} />
        </div>

        <div
          className={`text-center d-flex flex-column justify-content-center col-6 ${
            theme === "darkSide" ? "text-white" : ""
          }`}
        >
          <p>{language === "es" ? es.greet.myNameIs : en.greet.myNameIs}</p>
        </div>
      </div>
      <p>{language === "es" ? es.greet.profession : en.greet.profession}</p>
    </div>
  );
}

Introduction.propTypes = {
  language: PropTypes.string,
  es: PropTypes.object,
  en: PropTypes.object,
  theme: PropTypes.string,
};
