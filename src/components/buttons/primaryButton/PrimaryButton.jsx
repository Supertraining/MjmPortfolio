import PropTypes from "prop-types";

export default function PrimaryButton({ children, classname, type, onClick, disabled }) {
  return (
    <button
      className={`rounded btn btn-dark w-100 mx-1 ${classname}`}
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
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

PrimaryButton.defaultProps = {
  children: null,
  classname: "",
  type: "button",
  onClick: () => {},
  disabled: false,
};
