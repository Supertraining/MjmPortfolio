import PropTypes from "prop-types";
import LinkIcon from "../../icons/link/LinkIcon.jsx";

export default function AppLink({ theme, href, text, classname }) {
  return (
    <a
      className={`d-flex align-items-center justify-content-center rounded text-decoration-none p-2 border ${classname} ${
        theme === "darkSide" ? "border-white" : "border-dark"
      }`}
      href={href}
      target={"_blank"}
      rel="noreferrer"
    >
      <p
        className={`text-decoration-none m-0
          ${theme === "darkSide" ? "text-white" : "text-dark"}
        `}
      >
        {text}
      </p>
      <LinkIcon theme={theme} width={24} height={24} />
    </a>
  );
}

AppLink.propTypes = {
  theme: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  classname: PropTypes.string,
};

AppLink.defaultProps = {
  theme: "",
  text: "",
  href: "",
  classname: "",
};
