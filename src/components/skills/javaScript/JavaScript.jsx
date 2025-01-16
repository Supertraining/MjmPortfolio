import Proptypes from "prop-types";
export default function JavaScript({ theme }) {
  return (
    <div className="mx-1 col-2 text-center">
      <img
        className={
          theme === "darkSide" ? "skillsLogoShadow img-fluid" : "skillsDarkLogoShadow img-fluid"
        }
        src="https://res.cloudinary.com/marangadev/image/upload/v1696600607/portfolio/icons/skills/JS_mvmpo4_kg3k0e.png"
        alt="JavaScript"
      />
    </div>
  );
}
JavaScript.propTypes = { theme: Proptypes.string };
