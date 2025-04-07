import PropTypes from "prop-types";
import Skills from "../../skills/Skill.jsx";

const CardTechnologies = ({ theme, technologies, className }) => {
  return (
    <div
      style={{ minHeight: "80px" }}
      className={`p-3 col-12 rounded d-flex justify-content-evenly align-items-center flex-wrap gap-2 ${className}`}
    >
      <Skills
        theme={theme}
        skills={technologies}
      />
    </div>
  );
};

CardTechnologies.propTypes = {
  theme: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
};

CardTechnologies.defaultProps = {
  technologies: [],
  className: "",
};

export default CardTechnologies;
