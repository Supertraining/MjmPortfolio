import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import './fincaStore.css';
import { LanguageContext } from '../../context/languageContext';

export default function FincaStore() {
  const { theme } = useContext(ThemeContext);
  const { language, es, en } = useContext(LanguageContext);

  return (
    <div className={
      theme === 'darkSide'
        ? 'my-1 border border-light text-white col-12 rounded align-items-center flex flex-column row p-3'
        : 'my-1 border border-dark col-12 rounded align-items-center flex flex-column row p-3' }>
      <div className='col-12'>
        <div className='col-12 text-center bg-light p-1 my-1'>
          <p className={ theme === 'darkSide' ? 'text-dark bg-light p-2' : 'text-center fw-bold bg-light p-2' }>{ language === 'es' ? es.description.fincaStore : en.description.fincaStore }</p>
        </div>
        <iframe
          title='DalleClone'
          className='w-100 p-2 bg-white'
          src='https://effortless-bienenstitch-3d5aa3.netlify.app/'
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
            href='https://effortless-bienenstitch-3d5aa3.netlify.app/'
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
              src={
                theme === 'darkSide'
                  ? require('../../assets/icons/skills/react_original.png')
                  : require('../../assets/icons/skills/react_original.png')
              }
              alt='React'
            />
          </div>
          <div className='mx-1 col-2 text-center'>
            <img
              className={
                theme === 'darkSide'
                  ? 'skillsLogoShadow img-fluid'
                  : 'skillsDarkLogoShadow img-fluid'
              }
              src={ require('../../assets/icons/skills/html-5.png') }
              alt='HTML5'
            />
          </div>
          <div className='mx-1 col-2 text-center'>
            <img
              className={
                theme === 'darkSide'
                  ? 'skillsLogoShadow img-fluid'
                  : 'skillsDarkLogoShadow img-fluid'
              }
              src={ require('../../assets/icons/skills/css-3.png') }
              alt='css'
            />
          </div>
          <div className='mx-1 col-2 text-center'>
            <img
              className={
                theme === 'darkSide'
                  ? 'skillsLogoShadow img-fluid'
                  : 'skillsDarkLogoShadow img-fluid'
              }
              src={ require('../../assets/icons/skills/bootstrap.png') }
              alt='bootstrap'
            />
          </div>
          <div className='mx-1 col-2 text-center'>
            <img
              className={
                theme === 'darkSide'
                  ? 'skillsLogoShadow img-fluid'
                  : 'skillsDarkLogoShadow img-fluid'
              }
              src={ require('../../assets/icons/skills/firebase.png') }
              alt='Firebase'
            />
          </div>

          <div className='col-2'>
            { theme === 'darkSide' ? (
              <img
                className='img-fluid'
                src={ require('../../assets/img/blackSoldier.png') }
                alt='tieFighter'
              />
            ) : (
              <img
                className='img-fluid fincaStore_ShadowImg'
                src={ require('../../assets/img/lightSoldier.png') }
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
            <strong>Frontend:</strong> firebase | react | react-dom | react-router-dom
          </p>
        </div>
      </div>
    </div>
  );
}
