import PropTypes from "prop-types";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import CardTitle from "./components/CardTitle";
import CardImage from "./components/CardImage";
import CardDescription from "./components/CardDescription";
import CardLinks from "./components/CardLinks";
import CardTechnologies from "./components/CardTechnologies";

export default function Card({
  title,
  titleClassName,
  mainImageAnimation,
  mainImage,
  mainImageClassname,
  description,
  appUrl,
  repoUrl,
  appText,
  technologies,
  className,
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`my-1 border col-12 col-sm-6 col-md-5 col-xl-4 col-xxl-3 rounded align-items-center justify-content-center d-flex flex-column p-3 gap-2 
        ${theme === "darkSide" ? "border-light text-white" : "border-dark"} ${className}`}
    >
      <CardTitle
        title={title}
        theme={theme}
        className={titleClassName}
      />
      <CardImage
        mainImageAnimation={mainImageAnimation}
        mainImg={mainImage}
        mainImgClassname={mainImageClassname}
        theme={theme}
      />
      <CardDescription
        text={description}
        theme={theme}
      />
      <CardLinks
        theme={theme}
        appUrl={appUrl}
        repoUrl={repoUrl}
        appText={appText}
      />
      <CardTechnologies
        theme={theme}
        technologies={technologies}
      />
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  titleClassName: PropTypes.string,
  mainImageAnimation: PropTypes.string,
  mainImage: PropTypes.string.isRequired,
  mainImageClassname: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  appUrl: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
  appText: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
};

Card.defaultProps = {
  title: "",
  titleClassName: "",
  mainImgContainerClassname: "",
  mainImage: "",
  mainImageClassname: "",
  mainImageAnimation: "",
  description: "",
  appUrl: "",
  repoUrl: "",
  appText: "",
  technologies: [],
  className: "",
};
