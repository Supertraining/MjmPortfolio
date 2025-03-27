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
          className={`${styles.img} mx-1`}
          src={import.meta.env.VITE_IMG_WHATSAPP}
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
