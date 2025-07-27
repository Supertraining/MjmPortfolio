import PropTypes from "prop-types";
import AppLink from "../../links/appLink/AppLink.jsx";
import RepoLink from "../../links/repoLink/RepoLink.jsx";

const CardLinks = ({ theme, appUrl, repoUrl, appText, className, children }) => {
  return (
    <div className={`col-12 rounded d-flex justify-content-evenly gap-1 ${className}`}>
      <AppLink
        classname="col-6"
        theme={theme}
        href={appUrl}
        text={appText}
      />
      <RepoLink
        classname="col-6"
        theme={theme}
        href={repoUrl}
      />
      {children}
    </div>
  );
};

CardLinks.propTypes = {
  theme: PropTypes.string.isRequired,
  appUrl: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
  appText: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

CardLinks.defaultProps = {
  className: "",
};

export default CardLinks;
