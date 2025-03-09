import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext.jsx";
import styles from "./up.module.css";

export default function Up() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="col 12 d-flex justify-content-end my-3">
      <a
        className="col-2  text-decoration-none"
        href="#header"
      >
        <div className={`d-flex flex-column align-items-center ${styles.arrows_shadow}`}>
          <i
            className={
              theme === "darkSide"
                ? `bi bi-chevron-compact-up ${styles.arrow} ${styles.arrow_dark_one}`
                : `bi bi-chevron-compact-up ${styles.arrow} ${styles.arrow_light_one}`
            }
          ></i>
          <i
            className={
              theme === "darkSide"
                ? `bi bi-chevron-compact-up ${styles.arrow} ${styles.arrow_dark_two}`
                : `bi bi-chevron-compact-up ${styles.arrow} ${styles.arrow_light_two}`
            }
          ></i>
          <i
            className={
              theme === "darkSide"
                ? `bi bi-chevron-compact-up ${styles.arrow} ${styles.arrow_dark_three}`
                : `bi bi-chevron-compact-up ${styles.arrow} ${styles.arrow_light_three}`
            }
          ></i>
          <i
            className={
              theme === "darkSide"
                ? `bi bi-chevron-compact-up ${styles.arrow} ${styles.arrow_dark_four}`
                : `bi bi-chevron-compact-up ${styles.arrow} ${styles.arrow_light_four}`
            }
          ></i>
          <span
            className={
              theme === "darkSide" ? `${styles.arrow_text_dark}` : `${styles.arrow_text_light}`
            }
          >
            UP
          </span>
        </div>
      </a>
    </div>
  );
}
