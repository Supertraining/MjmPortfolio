import Proptypes from "prop-types";

export default function RepoLink({theme, href}) {
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
        <i className="bi bi-chevron-left fs-2"></i>
        Repo
        <i className="bi bi-chevron-right fs-2"></i>
      </p>
    </a>
  );
}

RepoLink.propTypes = {
  theme: Proptypes.string,
  href: Proptypes.string
};