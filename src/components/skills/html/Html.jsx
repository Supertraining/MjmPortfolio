import Proptypes from "prop-types";

export default function Html({ theme }) {
  return (
    <div className="mx-1 col-2 text-center">
      <img
        className={
          theme === "darkSide" ? "skillsLogoShadow img-fluid" : "skillsDarkLogoShadow img-fluid"
        }
        src="https://res.cloudinary.com/marangadev/image/upload/v1696600606/portfolio/icons/skills/html-5_tyfvds_azrstw.png"
        alt="HTML5"
      />
    </div>
  );
}

Html.propTypes = {
  theme: Proptypes.string,
};
