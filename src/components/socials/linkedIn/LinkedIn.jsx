import { CONTACT_ME_CONSTANTS } from "../../../constants/index.js";
import styles from "./linkedIn.module.css";

export default function LinkedIn() {
  return (
    <>
      <a
        className={`m-1 d-flex align-items-center text-decoration-none text-dark ${styles.Linkedin}`}
        href={import.meta.env.VITE_LINKEDIN_URL}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={`mx-1 rounded-5`}
          width={32}
          height={32}
          src={CONTACT_ME_CONSTANTS.LINKEDIN.src}
          alt="Linkedin"
        />
        Linkedin
      </a>
    </>
  );
}
