import PropTypes from "prop-types";
import styles from "./skill.module.css";

export default function Skills({ theme, skills, name }) {
  
  return (
    <>
      {skills.map((skill) => (
        <div
          className="mx-1  text-center d-flex flex-column align-items-center justify-content-center"
          key={skill.name}
        >
          <img
            className={`
              ${
                theme === "darkSide"
                  ? `${styles.skillsLogoShadow} `
                  : `${styles.skillsDarkLogoShadow}`
              }
            `}
            width={48}
            height={48}
            src={skill.src}
            alt={skill.name}
            loading="lazy"
          />
          {name && (
            <small
              className={`mt-1
              ${
                theme === "darkSide"
                  ? `${styles.skillsDarkLogoShadow} text-white`
                  : `${styles.skillsLogoShadow}`
              }
            `}
            >
              {skill.name}
            </small>
          )}
        </div>
      ))}
    </>
  );
}

Skills.propTypes = {
  theme: PropTypes.string,
  skills: PropTypes.array,
  name: PropTypes.bool,
};
