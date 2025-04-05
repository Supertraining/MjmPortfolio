import PropTypes from "prop-types";
import LightIcon from "../../../icons/light/LightIcon.jsx";
import DarkIcon from "../../../icons/dark/DarkIcon.jsx";
import SelectorInput from "./SelectorInput/SelectorInput.jsx";

export default function ThemeSelector({ handleTheme, theme, defaultChecked }) {
  return (
    <>
      <SelectorInput
        handleTheme={handleTheme}
        defaultChecked={defaultChecked}
        labelText="Light theme"
        value="lightSide"
        icon={
          <LightIcon
            theme={theme}
            height={24}
            width={24}
          />
        }
      />

      <SelectorInput
        handleTheme={handleTheme}
        defaultChecked={!defaultChecked}
        labelText="Dark theme"
        value="darkSide"
        icon={
          <DarkIcon
            theme={theme}
            height={24}
            width={24}
          />
        }
      />
    </>
  );
}

ThemeSelector.propTypes = {
  handleTheme: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
};

ThemeSelector.defaultProps = {
  handleTheme: () => {},
  src: "",
  alt: "",
  theme: "",
  defaultChecked: false,
};
