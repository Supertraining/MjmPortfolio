import PropTypes from "prop-types";

export default function Form({ children, onSubmit, classname }) {
  return (
    <form
      className={`d-flex flex-column gap-2 w-100 rounded p-1 p-lg-5 ${classname}`}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  classname: PropTypes.string,
};

Form.defaultProps = {
  children: null,
  onSubmit: () => {},
  classname: "",
};
