import Proptypes from "prop-types";
import ChevronLeft from "../icons/chevrons/ChevronLeft.jsx";
import ChevronRight from "../icons/chevrons/ChevronRight.jsx";

export default function RepoLink({ theme, href }) {
  return (
    <a
      className={
        theme === "darkSide"
          ? "d-flex align-items-center rounded text-decoration-none p-2"
          : "d-flex align-items-center rounded text-decoration-none p-2"
      }
      href={href}
      target={"_blank"}
      rel="noreferrer"
    >
      <p
        className={
          theme === "darkSide"
            ? "text-decoration-none text-white d-flex align-items-center m-0"
            : "text-decoration-none text-dark d-flex align-items-center m-0 f-4"
        }
      >
        <ChevronLeft theme={theme} />
        Repo
        <ChevronRight theme={theme} />
      </p>
    </a>
  );
}

RepoLink.propTypes = {
  theme: Proptypes.string,
  href: Proptypes.string,
};
