import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';
import BackgroundLight from '../backGroundLight/BackgroundLight';
import BackgroundDark from '../backgroundDark/BackgroundDark';

const Background = () => {


  const { theme } = useContext(ThemeContext);
  const [ dark, setDark ] = useState(false)
  
  useEffect(() => {
    if (theme === 'darkSide') { 
       setDark(true)
    } else {
      setDark(false)
    }
  }, [theme])
 
  return (
    <div>
      {
        dark 
          ? <BackgroundDark />
          :  <BackgroundLight />
      }
    </div>

  )
}

export default Background