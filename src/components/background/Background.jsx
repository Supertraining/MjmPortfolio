import { useContext, useEffect, useState, lazy, Suspense } from 'react';
import ThemeContext from '../../context/ThemeContext';
import './background.css';

const BackgroundLight = lazy(() => import('../backGroundLight/BackgroundLight'));
const BackgroundDark = lazy(() => import('../backgroundDark/BackgroundDark'));

const Background = () => {
  const { theme } = useContext(ThemeContext);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (theme === 'darkSide') {
      setDark(true);
    } else {
      setDark(false);
    }
  }, [theme]);

  return (
    <Suspense fallback={<div className='dark-bg'></div>}>
      {dark ? <BackgroundDark/> : <BackgroundLight/> }
    </Suspense>
  );
};

export default Background;
