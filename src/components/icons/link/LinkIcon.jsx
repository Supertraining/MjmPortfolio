import PropTypes from "prop-types";
import Link from "../../../../public/icons/link-45deg.svg";

export default function LinkIcon({ theme }) {
  return (
 
      <img
        className={`fs-2 img-fluid ${theme === "darkSide" ? "text-white" : "text-dark"}`}
        width={32}
        height={32}
        src={Link}
        alt="link icon"
      />
  
  );
}

LinkIcon.propTypes = {
  theme: PropTypes.string.isRequired,
};

LinkIcon.defaultProps = {
  theme: "",
};
