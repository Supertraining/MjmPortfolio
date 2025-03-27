import PropsTypes from "prop-types";
import styles from "./ejs.module.css";

export default function Ejs({ theme }) {
  return (
    <div className="mx-1 col-4 text-center d-flex align-items-center justify-content-center">
      <span className={`${styles.span_ejs}`}>{"<%="}</span>
      <img
        className={
          theme === "darkSide" ? "skillsLogoShadow img-fluid" : "skillsDarkLogoShadow img-fluid"
        }
        src="https://res.cloudinary.com/marangadev/image/upload/v1737040046/portfolio/icons/skills/icons8-ejs-48_evsboo.png"
        alt="EJS"
      />
      <span className={`${styles.span_ejs}`}>{"%>"}</span>
    </div>
  );
}
Ejs.propTypes = {
  theme: PropsTypes.string,
};
