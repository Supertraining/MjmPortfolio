import Proptypes from "prop-types";

export default function Node({theme}) {
  return (
    <div className="mx-1 col-2 text-center">
      <img
        className={
          theme === "darkSide" ? "skillsLogoShadow img-fluid" : "skillsDarkLogoShadow img-fluid"
        }
        src="https://res.cloudinary.com/marangadev/image/upload/v1696600609/portfolio/icons/skills/nodejs_original_logo_icon_146411_nzatgu_flx0r7.png"
        alt="NodeJs"
      />
    </div>
  );
}


Node.propTypes = {
    theme: Proptypes.string
}