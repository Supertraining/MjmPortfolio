import PropTypes from "prop-types";
import styles from "./yoda.module.css";
export default function Yoda({ theme }) {
  return (
    <img
      src="https://res.cloudinary.com/marangadev/image/upload/v1696600629/portfolio/yoda256_mkvlg4_svonoo.webp"
      alt=""
      className={theme === "darkSide" ? `img-fluid ${styles.yodaShadow}` : `img-fluid ${styles.yodaLight}`}
    />
  );
}

Yoda.propTypes = {
  theme: PropTypes.string,
};
