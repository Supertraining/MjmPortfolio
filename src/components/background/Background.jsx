import PropTypes from "prop-types";
import { useEffect, useState, lazy, Suspense } from "react";

const BackgroundLight = lazy(() => import("./backGroundLight/BackgroundLight"));
const BackgroundDark = lazy(() => import("./backgroundDark/BackgroundDark"));

const Background = ({ theme }) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (theme === "darkSide") {
      setDark(true);
    } else {
      setDark(false);
    }
  }, [theme]);

  return (
    <Suspense fallback={<div className="dark-bg"></div>}>
      {dark ? <BackgroundDark /> : <BackgroundLight />}
    </Suspense>
  );
};

Background.propTypes = {
  theme: PropTypes.string,
};

export default Background;
