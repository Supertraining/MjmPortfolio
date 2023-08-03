import React, { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import ThemeContext from '../../context/ThemeContext';
import './dalle.css';
import { LanguageContext } from '../../context/languageContext';

export default function Dalle() {
  const { theme } = useContext(ThemeContext);
  const { language, es, en } = useContext(LanguageContext);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className={
      theme === 'darkSide'
        ? 'my-1 border border-light text-white col-12 rounded align-items-center flex flex-column row p-3'
        : 'my-1 border border-dark col-12 rounded align-items-center flex flex-column row p-3'}>

      <div className='col-12'>
        <div className='col-12 text-center bg-light p-1 my-1'>
          <p className={ theme === 'darkSide' ? 'text-dark bg-light p-2' : 'text-center fw-bold bg-light p-2' }>{ language === 'es' ? es.description.dalle : en.description.dalle }</p>
        </div>
        <iframe
          title='DalleClone'
          className='w-100 p-2 bg-dark'
          src='https://famous-griffin-70d0cd.netlify.app'
          height={ '500px' }></iframe>

        <div className='d-flex align-items-center'>
          <span
            className={
              theme === 'darkSide'
                ? 'text-decoration-none text-white fw-bold'
                : 'text-decoration-none text-dark fw-bold'
            }>
            { language === 'es' ? es.links.app : en.links.app }
          </span>
          <a
            className={
              theme === 'darkSide' ? 'd-flex align-items-center' : 'd-flex align-items-center'
            }
            href='https://famous-griffin-70d0cd.netlify.app/'
            target={ '_blank' }
            rel='noreferrer'>
            <i
              className={
                theme === 'darkSide'
                  ? 'bi bi-arrow-right-short fs-4 text-white'
                  : 'bi bi-arrow-right-short fs-4 text-dark'
              }></i>

            <i
              className={
                theme === 'darkSide'
                  ? 'bi bi-hand-index-fill text-white fs-2'
                  : 'bi bi-hand-index-fill fs-2 text-dark'
              }></i>
          </a>
        </div>
      </div>

      <div>
        <div className='p-3 col-12 rounded d-flex justify-content-evenly align-items-center'>
          <div className='mx-1 col-2 text-center'>
            <img
              className={
                theme === 'darkSide'
                  ? 'skillsLogoShadow img-fluid'
                  : 'skillsDarkLogoShadow img-fluid'
              }
              src='https://res.cloudinary.com/marangadev/image/upload/v1691096639/portfolio/icons/skills/mongodb_original_logo_icon_146424_rhahyl.png'
              alt='MongoDb'
            />
          </div>
          <div className='mx-1 col-2 text-center'>
            <img
              className={
                theme === 'darkSide'
                  ? 'skillsLogoShadow img-fluid'
                  : 'skillsDarkLogoShadow img-fluid'
              }
              src='https://res.cloudinary.com/marangadev/image/upload/v1691096637/portfolio/icons/skills/express_original_wordmark_logo_icon_146528_harl5b.png'
              alt='Express'
            />
          </div>

          <div className='mx-1 col-2 text-center'>
            <img
              className={
                theme === 'darkSide'
                  ? 'skillsLogoShadow img-fluid'
                  : 'skillsDarkLogoShadow img-fluid'
              }
              src='https://res.cloudinary.com/marangadev/image/upload/v1691096641/portfolio/icons/skills/react_original_x7gbx4.png'
              alt='JavaScript'
            />
          </div>
          <div className='mx-1 col-2 text-center'>
            <img
              className={
                theme === 'darkSide'
                  ? 'skillsLogoShadow img-fluid'
                  : 'skillsDarkLogoShadow img-fluid'
              }
              src='https://res.cloudinary.com/marangadev/image/upload/v1691096639/portfolio/icons/skills/nodejs_original_logo_icon_146411_nzatgu.png'
              alt='NodeJs'
            />
          </div>
          <div
            className='col-2'
            ref={ ref }>
            { theme === 'darkSide' ? (
              <img
                className='img-size'
                src='https://res.cloudinary.com/marangadev/image/upload/v1691095505/portfolio/Death_Star_256_cd9pam.png'
                alt='deathStar'
              />
            ) : (
              <img
                className={ inView ? 'dalleShipTakeOff img-size' : 'img-size' }
                src='https://res.cloudinary.com/marangadev/image/upload/v1691095505/portfolio/Imperial_Star_Destroyer_t3jovq.png'
                alt='imperialStar'
              />
            ) }
          </div>
        </div>

        <div className='col-12 text-center'>
          <h6 className='text-center col-12 fw-bold'>
            { language === 'es' ? es.dependencies.dep : en.dependencies.dep }
          </h6>
          <p>
            <strong>Backend:</strong> cloudinary | cors | dotenv | express | mongoose | nodemon | openai
          </p>
          <p>
            <strong>Frontend:</strong> file-saver | react | react-dom | react-router-dom | @types/react | @types/react-dom | @vitejs/plugin-react |  autoprefixer | postcss | tailwindcss | vite
          </p>
        </div>
      </div>
    </div>
  );
}
