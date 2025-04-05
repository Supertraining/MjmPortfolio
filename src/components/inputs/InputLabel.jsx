import PropTypes from "prop-types";

export default function InputLabel({ className, text, htmlFor }) {
  return (
    <label
      className={className}
      htmlFor={htmlFor}
    >
      {text}
    </label>
  );
}

InputLabel.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  htmlFor: PropTypes.string,
};

InputLabel.defaultProps = {
  className: "",
  text: "",
  htmlFor: "",
};
