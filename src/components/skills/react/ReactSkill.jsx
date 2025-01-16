import PropTypes from "prop-types";

export default function ReactSkil({ theme }) {
  return (
    <div className="mx-1 col-2 text-center">
      <img
        className={
          theme === "darkSide" ? "skillsLogoShadow img-fluid" : "skillsDarkLogoShadow img-fluid"
        }
        src="https://res.cloudinary.com/marangadev/image/upload/v1696600612/portfolio/icons/skills/react_original_x7gbx4_il1yxb.png"
        alt="React"
      />
    </div>
  );
}

ReactSkil.propTypes = { theme: PropTypes.string };
