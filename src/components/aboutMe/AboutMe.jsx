import React, { useContext } from 'react';
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
          ? `row text-center text-white rounded p-3 aboutMeBorder ${theme}`
          : 'row text-center bg-success rounded p-3 lightSide aboutMeBorder'
      }
    >
      <p className='aboutMe-description'>{ language === 'es' ? es.aboutMe.text : en.aboutMe.text } <a className='text-decoration-none' href='https://render.com/'>render <i className="bi bi-box-arrow-up-right text-primary "></i></a></p>
    </div>
  );
}
