import PropTypes from "prop-types";

export default function Chevron({ theme, direction, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      className={`bi bi-chevron-${direction}`}
      viewBox="0 0 16 16"
      color={theme === "darkSide" ? "white" : "black"}
    >
      <path
        fillRule="evenodd"
        d={`${
          direction === "left"
            ? "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            : direction === "right"
            ? "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            : "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
        }`}
      />
    </svg>
  );
}


Chevron.propTypes = {
  theme: PropTypes.string,
  direction: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Chevron.defaultProps = { theme: "" };
