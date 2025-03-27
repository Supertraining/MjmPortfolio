import PropTypes from "prop-types";
import styles from "./themeSelection.module.css";
export default function ThemeSelection({ handleTheme, src, alt, theme, defaultChecked }) {
  return (
    <div className="d-flex align-items-center gap-2">
      <div>
        <label className="visually-hidden" htmlFor="theme">
          {theme === "darkSide" ? "Dark theme" : "Light theme"}
        </label>
        <input
          className={`m-1 my-5 ${styles.header_input}`}
          type="radio"
          name="theme"
          id="theme"
          value={`${theme === "darkSide" ? "darkSide" : "lightSide"}`}
          onClick={handleTheme}
          defaultChecked={defaultChecked}
        />
      </div>
      <div>
        <img
          className="rounded-4 img-fluid"
          src={src}
          alt={alt}
        />
      </div>
    </div>
  );
}

ThemeSelection.propTypes = {
  handleTheme: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
};

ThemeSelection.defaultProps = {
  handleTheme: () => {},
  src: "",
  alt: "",
  theme: "",
  defaultChecked: false,
};
