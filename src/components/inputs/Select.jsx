import PropTypes from "prop-types";
export default function Select({ options, handleLanguage, classname, ariaLabel }) {
  
  return (
    <select
      name="language"
      id="language"
      className={`w-100 my-2 rounded p-1 ${classname}`}
      onChange={handleLanguage}
      aria-label={ariaLabel}
      defaultValue={options[1].value}
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
