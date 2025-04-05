import PropTypes from "prop-types";

const CardDescription = ({ text, theme, className }) => {
  return (
    <p
      style={{minHeight: "140px", textAlign: "justify"}}
      className={`p-2 my-1 rounded ${
        theme === "darkSide" ? "text-light" : ""
      } ${className}`}
    >
      {text}
    </p>
  );
};

CardDescription.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  className: PropTypes.string,
};

CardDescription.defaultProps = {
  className: "",
};

export default CardDescription;
