import Proptypes from "prop-types";

export default function Scss({ theme }) {
  return (
    <div className="mx-1 col-2 text-center">
      <img
        className={
          theme === "darkSide" ? "skillsLogoShadow img-fluid" : "skillsDarkLogoShadow img-fluid"
        }
        src="https://res.cloudinary.com/marangadev/image/upload/v1696600612/portfolio/icons/skills/sass_mn1xxq_h91r31.png"
        alt="Sass"
      />
    </div>
  );
}
Scss.propTypes = {
  theme: Proptypes.string,
};