import { CONTACT_ME_CONSTANTS } from "../../../constants/index.js";
import styles from "./whatsApp.module.css";
import PropTypes from "prop-types";
export default function WhatsApp({ celNumber }) {
  return (
    <>
      <a
        className={`m-1 d-flex align-items-center text-decoration-none text-dark ${styles.whatsapp}`}
        href={import.meta.env.VITE_WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={`mx-1`}
          width={32}
          height={32}
          src={CONTACT_ME_CONSTANTS.WHATSAPP.src}
          alt="whapp"
        />{" "}
        {celNumber}
      </a>
    </>
  );
}

WhatsApp.propTypes = {
  celNumber: PropTypes.string,
};
