import Proptypes from "prop-types";


export default function Typescript({theme}) {
  return (
    <div className="mx-1 col-2 text-center">
      <img
        className={
          theme === "darkSide" ? "skillsLogoShadow img-fluid" : "skillsDarkLogoShadow img-fluid"
        }
        src="https://res.cloudinary.com/marangadev/image/upload/v1737042331/portfolio/icons/skills/ts_l41gky.png"
        alt="bootstrap"
      />
    </div>
  );
}

Typescript.propTypes = {
  theme: Proptypes.string
}