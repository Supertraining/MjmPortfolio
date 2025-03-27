import PropTypes from "prop-types";

export default function PrimaryButtonSmall({ children, classname, type, onClick, disabled }) {
  return (
    <button
      className={`btn btn-small rounded ${classname}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

PrimaryButtonSmall.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

PrimaryButtonSmall.defaultProps = {
  children: null,
  classname: "",    
  type: "button",
  onClick: () => {},
  disabled: false,
};