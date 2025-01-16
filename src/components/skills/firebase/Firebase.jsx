import Proptypes from "prop-types"

export default function Firebase({theme}) {
  return (
    <div className="mx-1 col-2 text-center">
      <img
        className={
          theme === "darkSide" ? "skillsLogoShadow img-fluid" : "skillsDarkLogoShadow img-fluid"
        }
        src="https://res.cloudinary.com/marangadev/image/upload/v1696600606/portfolio/icons/skills/firebase_gk3cy2_uzywsn.png"
        alt="Firebase"
      />
    </div>
  );
}

Firebase.propTypes = {
    theme: Proptypes.string
}