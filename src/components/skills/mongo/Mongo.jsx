import PropTypes from "prop-types";
export default function Mongo({ theme }) {
  return (
    <div className="mx-1 col-2 text-center">
      <img
        className={
          theme === "darkSide" ? "skillsLogoShadow img-fluid" : "skillsDarkLogoShadow img-fluid"
        }
        src="https://res.cloudinary.com/marangadev/image/upload/v1696600608/portfolio/icons/skills/mongodb_original_logo_icon_146424_rhahyl_frdqck.png"
        alt="MongoDb"
      />
    </div>
  );
}
Mongo.propTypes = { theme: PropTypes.string };
