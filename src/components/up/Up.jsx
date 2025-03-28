import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext.jsx";
import styles from "./up.module.css";
import ChevronUp from "../icons/chevrons/ChevronUp.jsx";

export default function Up() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="col 12 d-flex justify-content-end my-3">
      <a
        className="col-2  text-decoration-none"
        href="#header"
      >
        <div className={`d-flex flex-column align-items-center ${styles.arrows_shadow}`}>
          <ChevronUp
            classname={
              theme === "darkSide"
                ? `${styles.arrow} ${styles.arrow_dark_one}`
                : `${styles.arrow} ${styles.arrow_light_one}`
            }
          />
          <ChevronUp
            classname={
              theme === "darkSide"
                ? `${styles.arrow} ${styles.arrow_dark_two}`
                : `${styles.arrow} ${styles.arrow_light_two}`
            }
          />
          <ChevronUp
            classname={
              theme === "darkSide"
                ? `${styles.arrow} ${styles.arrow_dark_three}`
                : `${styles.arrow} ${styles.arrow_light_three}`
            }
          />
          <ChevronUp
            classname={
              theme === "darkSide"
                ? `${styles.arrow} ${styles.arrow_dark_four}`
                : `${styles.arrow} ${styles.arrow_light_four}`
            }
          />

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
