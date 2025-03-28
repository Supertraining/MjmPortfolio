import PropTypes from "prop-types";
export default function ChevronUp({ classname }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      className={`bi bi-chevron-compact-up ${classname}`}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z"
      />
    </svg>
  );
}

ChevronUp.propTypes = {
  classname: PropTypes.string,
};

ChevronUp.defaultProps = {
  classname: "",
};
