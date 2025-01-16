import Proptypes from "prop-types";

export default function Bootstrap({ theme }) {
  return (
    <div className="mx-1 col-2 text-center">
      <img
        className={
          theme === "darkSide" ? "skillsLogoShadow img-fluid" : "skillsDarkLogoShadow img-fluid"
        }
        src="https://res.cloudinary.com/marangadev/image/upload/v1696600603/portfolio/icons/skills/bootstrap_x8t65y_bf8cox.png"
        alt="bootstrap"
      />
    </div>
  );
}

Bootstrap.propTypes = { theme: Proptypes.string };
