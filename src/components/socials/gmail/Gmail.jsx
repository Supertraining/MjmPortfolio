import { CONTACT_ME_CONSTANTS } from "../../../constants/index.js";
import styles from "./gmail.module.css";
import PropTypes from "prop-types";
export default function Gmail({ mail }) {
  return (
    <div className={`m-1 d-flex align-items-center ${styles.gmail}`}>
      <img
        className={`mx-1 rounded-5`}
        width={32}
        height={32}
        src={CONTACT_ME_CONSTANTS.EMAIL.src}
        alt="e-mail"
      />{" "}
      {mail}
    </div>
  );
}
Gmail.propTypes = {
  mail: PropTypes.string,
};
