import PropTypes from "prop-types";
import styles from "./selectorInput.module.css";
import InputLabel from "../../../../inputs/InputLabel.jsx";
import Input from "../../../../inputs/Input.jsx";

export default function SelectorInput({ handleTheme, defaultChecked, labelText, value, icon }) {
  return (
    <div className="d-flex align-items-center gap-2">
      <InputLabel
        className="visually-hidden"
        htmlFor="theme"
        text={labelText}
      />

      <Input
        className={`m-1 my-5 ${styles.header_input}`}
        type="radio"
        name="theme"
        id="theme"
        value={value}
        onClick={handleTheme}
        defaultChecked={defaultChecked}
      />
      {icon}
    </div>
  );
}

SelectorInput.propTypes = {
  handleTheme: PropTypes.func.isRequired,
  defaultChecked: PropTypes.bool,
  labelText: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.node
};
