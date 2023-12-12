import { useContext } from 'react';
import { LanguageContext } from '../../context/languageContext';
import ThemeContext from '../../context/ThemeContext';
import './AboutMe.css';

export default function AboutMe() {
  const { theme } = useContext(ThemeContext);
  const { language, es, en } = useContext(LanguageContext);

  return (


    <div
      className={
        theme === 'darkSide'
          ? `text-center p-3 text-white row justify-content-center`
          : 'lightSide p-3 row justify-content-center'
      }
    >
      <p className={
        theme === 'darkSide'
          ? 'aboutMe-description aboutMeBorder rounded'
          : 'bg-light aboutMe-description aboutMeBorder rounded' }>{ language === 'es' ? es.aboutMe.text : en.aboutMe.text } <a className='text-decoration-none' href='https://render.com/'>render <i className="bi bi-box-arrow-up-right text-primary "></i></a></p>
    </div>


  );
}
