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
          className={`${styles.img} mx-1 rounded-5`}
          src={import.meta.env.VITE_IMG_LINKEDIN}
          alt="Linkedin"
        />
        Linkedin
      </a>
    </>
  );
}
