import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import './ecommerceAPI.css';
import { LanguageContext } from '../../context/languageContext';
import { useInView } from 'react-intersection-observer';

export default function EcommerceAPI() {
  const { theme } = useContext(ThemeContext);
  const { language, es, en } = useContext(LanguageContext);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className={
      theme === 'darkSide'
        ? 'my-1 border border-light text-white col-12 rounded align-items-center flex flex-column row p-3'
        : 'my-1 border border-dark col-12 rounded align-items-center flex flex-column row p-3' }>
      <div className='col-12'>
        <div className='col-12 text-center my-1 bg-light'>
          <p className={ theme === 'darkSide' ? 'text-dark bg-light p-2' : 'text-center fw-bold bg-light p-2' }>{ language === 'es' ? es.description.ecommerceBack : en.description.ecommerceBack }</p>
        </div>
        <iframe
          title='eCommerceAPI'
          className='w-100 p-2 bg-white'
          src='https://backend-32190.onrender.com/docs/'
          height={ '500px' }></iframe>

      </div>

      <div>
        <div className='d-flex align-items-center'>
          <span
            className={
              theme === 'darkSide'
                ? 'text-decoration-none text-white fw-bold'
                : 'text-decoration-none text-dark fw-bold'
            }>
            { language === 'es' ? es.links.doc : en.links.doc }
          </span>

          <a
            className={
              theme === 'darkSide' ? 'd-flex align-items-center' : 'd-flex align-items-center'
            }
            href='https://backend-32190.onrender.com/docs/'
            target={ '_blank' }
            rel='noreferrer'>
            <i
              class={
                theme === 'darkSide'
                  ? 'bi bi-arrow-right-short fs-4 text-white'
                  : 'bi bi-arrow-right-short fs-4 text-dark'
              }></i>

            <i
              class={
                theme === 'darkSide'
                  ? 'bi bi-hand-index-fill text-white fs-2'
                  : 'bi bi-hand-index-fill fs-2 text-dark'
              }></i>
          </a>
        </div>
        <div className='p-3 d-flex justify-content-evenly align-items-center'>
          <div className='mx-1 col-2 text-center'>
            <img
              className={
                theme === 'darkSide'
                  ? 'skillsLogoShadow img-fluid'
                  : 'skillsDarkLogoShadow img-fluid'
              }
              src={ require('../../assets/icons/skills/mongodb_original_logo_icon_146424.png') }
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
              src={ require('../../assets/icons/skills/express_original_wordmark_logo_icon_146528.png') }
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
              src={ require('../../assets/icons/skills/nodejs_original_logo_icon_146411.png') }
              alt='NodeJs'
            />
          </div>

          <div
            className='col-2'
            ref={ ref }>
            { theme === 'darkSide' ? (
              <img
                className='img-size'
                src={ require('../../assets/img/Tie_Defender.png') }
                alt='tieDefender'
              />
            ) : (
              <img
                className={ inView ? 'img-size falconTakeOff' : 'img-size' }
                src={ require('../../assets/img/Millenium_Falcon.png') }
                alt='xWing'
              />
            ) }
          </div>
        </div>

        <div className='col-12 text-center'>
          <h6 className='text-center col-12 fw-bold'>
            { language === 'es' ? es.dependencies.dep : en.dependencies.dep }
          </h6>
          <p>
            <strong>backend:</strong> bcrypt | connect-mongo | dotenv | ejs | express | express-fileupload | express-session | mongoose | nodemailer | nodemon | passport | passport-local | swagger-jsdoc | swagger-ui-express | twilio | winston
          </p>
        </div>
      </div>
    </div>
  );
}
