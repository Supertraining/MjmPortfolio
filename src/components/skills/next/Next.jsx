import Proptypes from "prop-types";

export default function Next({ theme }) {
  return (
    <div className="mx-1 col-2 text-center">
      <img
        className={
          theme === "darkSide" ? "skillsLogoShadow img-fluid" : "skillsDarkLogoShadow img-fluid"
        }
        src="https://res.cloudinary.com/marangadev/image/upload/v1737055960/portfolio/icons/skills/Next.js_jaqrod.png"
        alt="NodeJs"
      />
    </div>
  );
}
Next.propTypes = {
  theme: Proptypes.string,
};
