import PropTypes from "prop-types";
export default function Select({ options, theme, handleLanguage, classname, ariaLabel }) {
  return (
    <select
      name="language"
      id="language"
      className={`${classname} ${
        theme === "darkSide"
          ? "w-100 my-2 rounded p-1 bg-dark text-white"
          : "w-100 my-2 rounded p-1"
      }`}
      onChange={handleLanguage}
      aria-label={ariaLabel}
    >
      {options.map((option) => (
        <option
          key={option.key}
          value={option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  theme: PropTypes.string.isRequired,
  handleLanguage: PropTypes.func.isRequired,
  classname: PropTypes.string,
  ariaLabel: PropTypes.string
};

Select.defaultProps = {
  options: [{key: "", name: "", value: "" }],
  theme: "",
  handleLanguage: () => {},
  classname: "",
  ariaLabel: "",
};
