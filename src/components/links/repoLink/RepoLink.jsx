import Proptypes from "prop-types";
import Chevron from "../../icons/chevrons/Chevron.jsx";
import GitHubIcon from "../../icons/github/GitHubIcon.jsx";

export default function RepoLink({ theme, href, classname }) {
  return (
    <a
      className={`d-flex align-items-center justify-content-center rounded text-decoration-none p-2 border ${classname}
        ${theme === "darkSide" ? "border-white" : "border-dark"}
      `}
      href={href}
      target={"_blank"}
      rel="noreferrer"
    >
      <p
        className={`text-decoration-none d-flex align-items-center m-0 gap-1 ${
          theme === "darkSide" ? " text-white " : "text-dark"
        }`}
      >
        <Chevron
          theme={theme}
          direction="left"
          width={24}
          height={24}
        />
        <GitHubIcon
          theme={theme}
          width={24}
          height={24}
        />
        Repo
        <Chevron
          theme={theme}
          direction="right"
          width={24}
          height={24}
        />
      </p>
    </a>
  );
}

RepoLink.propTypes = {
  theme: Proptypes.string,
  href: Proptypes.string,
  classname: Proptypes.string,
};
