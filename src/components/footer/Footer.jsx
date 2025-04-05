import PropTypes from "prop-types";
import styles from "./footer.module.css";

export default function Footer({theme}) {

  const date = new Date().getFullYear();

  return (
    <footer
      className={`col-12 text-center p-2
        ${theme === "darkSide" ? "text-white" : "text-dark"}`}
    >
      <p className={styles.copyright}>
        <img
          className={theme === "darkSide" ? "bg-white rounded-5" : ""}
          src="https://res.cloudinary.com/marangadev/image/upload/v1696600600/portfolio/icons/derechos-de-autor-blackx16_d9o7n1_pfdxam.png"
          alt=""
          width={16}
          height={16}
        />{" "}
        Copyright:<span>{date}</span>
      </p>
    </footer>
  );
}

Footer.propTypes = {  
  theme: PropTypes.string,  
};