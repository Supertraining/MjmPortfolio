import PropTypes from "prop-types";

const CardTitle = ({ title, className, theme }) => {
  return (
    <h2
    style={{minHeight: "100px"}}
      className={`p-2 text-center my-1 rounded fw-bold ${
        theme === "darkSide" ? "text-light" : ""
      } ${className}`}
    >
      {title}
    </h2>
  );
};

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  theme: PropTypes.string.isRequired,
};

CardTitle.defaultProps = {
  className: "",
};

export default CardTitle;
