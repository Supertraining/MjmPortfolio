import PropTypes from "prop-types";

export default function PrimaryButton({ children, classname, id, type, onClick, disabled }) {
  return (
    <button
      className={`rounded btn w-100 mx-1 ${classname}`}
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

PrimaryButton.defaultProps = {
  children: null,
  classname: "",
  id: "",
  type: "button",
  onClick: () => {},
  disabled: false,
};
