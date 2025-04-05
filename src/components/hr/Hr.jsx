import Proptypes from "prop-types";

export default function Hr({theme}) {
  return (
    <hr className={`m-3 w-75 opacity-100 ${theme === "darkSide" ? "text-white" : "text-dark"}`} />
  )
}

Hr.propTypes = {
  theme: Proptypes.string.isRequired,
}

Hr.defaultProps = {
  theme: "",    
}