import React, { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import './fincaWeb.css';
import ThemeContext from '../../context/ThemeContext';
import { LanguageContext } from '../../context/languageContext';

export default function FincaWeb() {
  const { theme } = useContext(ThemeContext);
  const { language, es, en } = useContext(LanguageContext);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className={
      theme === 'darkSide'
        ? 'my-1 border border-light text-white col-12 rounded align-items-center flex flex-column  p-3'
        : 'my-1 border border-dark col-12 rounded align-items-center flex flex-column  p-3' }>
      <div className='col-12'>
        <div className='col-12 text-center bg-light p-1 my-1'>
          <p className={ theme === 'darkSide' ? 'text-dark bg-light p-2' : 'text-center fw-bold bg-light p-2' }>{ language === 'es' ? es.description.fincaWeb : en.description.fincaWeb }</p>
        </div>
        <img src='https://res.cloudinary.com/marangadev/image/upload/v1696626922/portfolio/Finca-El-Boleado-web_wbgnyf.webp' className='img-fluid' alt="" />

        <div className='d-flex align-items-center'>
          <span
            className={
              theme === 'darkSide'
                ? 'text-decoration-none text-white fw-bold'
                : 'text-decoration-none text-dark fw-bold'
            }
          >
            { language === 'es' ? es.links.web : en.links.web }
          </span>
          <a
            className={
              theme === 'darkSide' ? 'd-flex align-items-center' : 'd-flex align-items-center'
            }
            href='https://finca-el-boleado.netlify.app/'
            target={ '_blank' }
            rel='noreferrer'
          >
            <i
              className={
                theme === 'darkSide'
                  ? 'bi bi-arrow-right-short fs-4 text-white'
                  : 'bi bi-arrow-right-short fs-4 text-dark'
              }
            ></i>

            <i
              className={
                theme === 'darkSide'
                  ? 'bi bi-hand-index-fill text-white fs-2'
                  : 'bi bi-hand-index-fill fs-2 text-dark'
              }
            ></i>
          </a>
        </div>
      </div>

      <div
        className='d-flex justify-content-evenly align-items-center'>
        <div className='mx-1 col-2 text-center'>
          <img
            className={
              theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'skillsDarkLogoShadow img-fluid'
            }
            src='https://res.cloudinary.com/marangadev/image/upload/v1696600606/portfolio/icons/skills/html-5_tyfvds_azrstw.png'
            alt='HTML5'
          />
        </div>
        <div className='mx-1 col-2 text-center'>
          <img
            className={
              theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'skillsDarkLogoShadow img-fluid'
            }
            src='https://res.cloudinary.com/marangadev/image/upload/v1696600604/portfolio/icons/skills/css-3_ovas2l_o28rrj.png'
            alt='css'
          />
        </div>
        <div className='mx-1 col-2 text-center'>
          <img
            className={
              theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'skillsDarkLogoShadow img-fluid'
            }
            src='https://res.cloudinary.com/marangadev/image/upload/v1696600607/portfolio/icons/skills/JS_mvmpo4_kg3k0e.png'
            alt='JavaScript'
          />
        </div>
        <div className='mx-1 col-2 text-center'>
          <img
            className={
              theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'skillsDarkLogoShadow img-fluid'
            }
            src='https://res.cloudinary.com/marangadev/image/upload/v1691096641/portfolio/icons/skills/sass_mn1xxq.png'
            alt='Sass'
          />
        </div>
        <div className='mx-1 col-2 text-center'>
          <img
            className={
              theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'skillsDarkLogoShadow img-fluid'
            }
            src='https://res.cloudinary.com/marangadev/image/upload/v1696600603/portfolio/icons/skills/bootstrap_x8t65y_bf8cox.png'
            alt='bootstrap'
          />
        </div>

        <div
          className='col-3 col-lg-2'
          ref={ ref }
        >
          { theme === 'darkSide' ? (
            <img
              className='img-fluid'
              src='https://res.cloudinary.com/marangadev/image/upload/v1696600594/portfolio/AT-AT_35441_iqpelv_acaieh.webp'
              alt='AT-AT'
            />
          ) : (
            <img
              className={ inView ? 'img-fluid fincaWebTakeOff' : 'img-fluid' }
              src='https://res.cloudinary.com/marangadev/image/upload/v1696600628/portfolio/X-Wing_-_02_35411_ifnjwx_zksdvb.webp'
              alt='xWing'
            />
          ) }
        </div>
      </div>
    </div>
  );
}
