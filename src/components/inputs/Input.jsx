import PropTypes from "prop-types";

export default function Input({
  className,
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
  onClick,
  defaultChecked,
}) {
  return (
    <input
      className={className}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onClick={onClick}
      defaultChecked={defaultChecked}
    />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  defaultChecked: PropTypes.bool
};

Input.defaultProps = {
  className: "",
  type: "text",
  id: "",
  name: "",
  placeholder: "",
  value: "",
  onChange: () => {},
  onClick: () => {},
  defaultChecked: false
};
