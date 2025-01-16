import PropsTypes from "prop-types";

export default function Ejs({ theme }) {
    return (
        <div className="mx-1 col-2 text-center">
      <span className="span_ejs">{"<%="}</span>
      <img
        className={
            theme === "darkSide" ? "skillsLogoShadow img-fluid" : "skillsDarkLogoShadow img-fluid"
        }
        src="https://res.cloudinary.com/marangadev/image/upload/v1737040046/portfolio/icons/skills/icons8-ejs-48_evsboo.png"
        alt="EJS"
        />
      <span>{"%>"}</span>
    </div>
  );
}
Ejs.propTypes = {
    theme: PropsTypes.string,
}

