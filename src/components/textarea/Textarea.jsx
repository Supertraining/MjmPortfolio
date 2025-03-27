import PropTypes from "prop-types";

export default function Textarea({
    className,
    name,
    id,
    cols,
    rows,
    placeholder,
    value,
    onChange,
    disabled
   
}) {
  return (
    <textarea
      className={`${className} ${disabled ? "opacity-50" : ""}`}
      name={name}
      id={id}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

Textarea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  cols: PropTypes.number,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}

Textarea.defaultProps = {
  className: "",
  name: "",
  id: "",
  cols: 30,
  rows: 10,
  placeholder: "",
  value: "",
  onChange: () => {},
  disabled: false
}