import Proptypes from "prop-types";

export default function Css({ theme }) {
  return (
    <div className="mx-1 col-2 text-center">
      <img
        className={
          theme === "darkSide" ? "skillsLogoShadow img-fluid" : "skillsDarkLogoShadow img-fluid"
        }
        src="https://res.cloudinary.com/marangadev/image/upload/v1696600604/portfolio/icons/skills/css-3_ovas2l_o28rrj.png"
        alt="css"
      />
    </div>
  );
}
Css.propTypes = {
  theme: Proptypes.string,
};