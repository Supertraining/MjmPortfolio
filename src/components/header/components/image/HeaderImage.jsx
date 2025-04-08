import { HEADER_CONSTANTS } from "../../../../constants/index.js";
import styles from "./headerImage.module.css";
import PropTypes from "prop-types";

export default function HeaderImage({ theme }) {
  return (
    <>
      <img
        loading="eager"
        src={theme === "darkSide" ? HEADER_CONSTANTS.darkImg.src : HEADER_CONSTANTS.lightImg.src}
        className={`${styles.imageWrapper} ${theme === "darkSide" ? styles.svgWhite : ""} `}
        alt="marangaDev"
        width={305}
        height={310}
      />
    </>
  );
}

HeaderImage.propTypes = {
  theme: PropTypes.string.isRequired,
};

HeaderImage.defaultProps = {
  theme: "",
};
