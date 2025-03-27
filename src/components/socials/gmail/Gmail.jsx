import styles from "./gmail.module.css";
import PropTypes from "prop-types";
export default function Gmail({ mail }) {
  return (
    <div className={`m-1 d-flex align-items-center ${styles.gmail}`}>
      <img
        className={`${styles.img} mx-1 rounded-5`}
        src={import.meta.env.VITE_IMG_EMAIL}
        alt="e-mail"
      />{" "}
      {mail}
    </div>
  );
}
Gmail.propTypes = {
  mail: PropTypes.string,
};
