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
        <img src='https://res.cloudinary.com/marangadev/image/upload/v1696626920/portfolio/finca-el-boleado_zl9n1y.webp' className='img-fluid' alt="" />

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
            href='https://finca-el-boleado-store.netlify.app/'
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
        <div className='p-3 d-flex justify-content-evenly align-items-center'>
          <div className='mx-1 col-2 text-center'>
            <img
              className={
                theme === 'darkSide'
                  ? 'skillsLogoShadow img-fluid'
                  : 'skillsDarkLogoShadow img-fluid'
              }
              src='https://res.cloudinary.com/marangadev/image/upload/v1696600612/portfolio/icons/skills/react_original_x7gbx4_il1yxb.png'
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
              src='https://res.cloudinary.com/marangadev/image/upload/v1696600606/portfolio/icons/skills/html-5_tyfvds_azrstw.png'
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
              src='https://res.cloudinary.com/marangadev/image/upload/v1696600604/portfolio/icons/skills/css-3_ovas2l_o28rrj.png'
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
              src='https://res.cloudinary.com/marangadev/image/upload/v1696600603/portfolio/icons/skills/bootstrap_x8t65y_bf8cox.png'
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
              src='https://res.cloudinary.com/marangadev/image/upload/v1696600606/portfolio/icons/skills/firebase_gk3cy2_uzywsn.png'
              alt='Firebase'
            />
          </div>

          <div className='col-2'>
            { theme === 'darkSide' ? (
              <img
                className='img-fluid'
                src='https://res.cloudinary.com/marangadev/image/upload/v1696600596/portfolio/blackSoldier_so4ido_puefvs.webp'
                alt='blackSoldier'
              />
            ) : (
              <img
                className='img-fluid fincaStore_ShadowImg'
                src='https://res.cloudinary.com/marangadev/image/upload/v1696600617/portfolio/lightSoldier_g0kxp7_ham8ch.webp'
                alt='lightSoldier'
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
