import Proptypes from "prop-types";

export default function Express({theme}) {
  return (
    <div className="mx-1 col-2 text-center">
      <img
        className={
          theme === "darkSide" ? "skillsLogoShadow img-fluid" : "skillsDarkLogoShadow img-fluid"
        }
        src="https://res.cloudinary.com/marangadev/image/upload/v1696600605/portfolio/icons/skills/express_original_wordmark_logo_icon_146528_harl5b_tkfzkd.png"
        alt="Express"
      />
    </div>
  );
}

Express.propTypes = {
    theme: Proptypes.string
}