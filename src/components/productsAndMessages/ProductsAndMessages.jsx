import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import './ProductsAndMessages.css';
import { LanguageContext } from '../../context/languageContext';

export default function ProductsAndMessages() {
  const { theme } = useContext(ThemeContext);
  const { es, en, language } = useContext(LanguageContext);

  return (
    <div className={
      theme === 'darkSide'
        ? 'my-1 border border-light text-white col-12 rounded align-items-center flex flex-column row p-3'
        : 'my-1 border border-dark col-12 rounded align-items-center flex flex-column row p-3' }>
      <div className='col-12'>
        <div className='col-12 text-center bg-light p-1 my-1'>
          <p className={ theme === 'darkSide' ? 'text-dark bg-light p-2' : 'text-center fw-bold bg-light p-2' }>{ language === 'es' ? es.description.productsAndMssgs : en.description.productsAndMssgs }</p>
          <a className='text-decoration-none mx-3' href='https://productsandmssgs.onrender.com/api/productos-test' target='_blank' rel='noreferrer'>Mock <i className="bi bi-box-arrow-up-right text-primary "></i></a>
          <a className='text-decoration-none mx-3' href='https://productsandmssgs.onrender.com/api/info' target='_blank' rel='noreferrer'>Server_Info <i className="bi bi-box-arrow-up-right text-primary "></i></a>
        </div>
        <iframe
          title='eCommerceAPI'
          className='w-100 p-2 bg-white'
          src='https://productsandmssgs.onrender.com'
          height={ '500px' }></iframe>

        <div className='d-flex align-items-center'>
          <span
            className={
              theme === 'darkSide'
                ? 'text-decoration-none text-white fw-bold'
                : 'text-decoration-none text-dark fw-bold'
            }>
            { language === 'es' ? es.links.api : en.links.api }
          </span>

          <a
            className={
              theme === 'darkSide' ? 'd-flex align-items-center' : 'd-flex align-items-center'
            }
            href='https://productsandmssgs.onrender.com'
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
      </div>

      <div>
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

          <div className='col-2'>
            { theme === 'darkSide' ? (
              <img
                className='img-size'
                src={ require('../../assets/img/vaderToy.png') }
                alt='LegoVader'
              />
            ) : (
              <img
                className='img-size ShadowImg'
                src={ require('../../assets/img/Lego-Luke.png') }
                alt='LegoLuke'
              />
            ) }
          </div>
        </div>

        <div className='col-12 text-center'>
          <h6 className='text-center col-12 fw-bold'>
            { language === 'es' ? es.dependencies.dep : en.dependencies.dep }
          </h6>
          <p>
            <strong>backend:</strong> axios | bcrypt | compression | connect-mongo | cors | dotenv | ejs | express | express-session | knex | minimist | mongoose |  mysql | normalizr | passport | passport-local | socket.io | util | winston | faker-js/faker | autocannon | chai | mocha
          </p>
        </div>
      </div>
    </div>
  );
}
