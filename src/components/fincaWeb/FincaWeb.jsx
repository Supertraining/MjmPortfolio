import { useContext } from 'react';
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
    <div
      className={
        theme === 'darkSide'
          ? 'my-1 border border-light text-white col-12 rounded align-items-center d-flex flex-column p-3 gap-2'
          : 'bg-light my-1 border border-dark col-12 rounded align-items-center d-flex flex-column p-3 gap-2'
      }>
      <div className='col-12 d-flex flex-column flex-md-row justify-content-evenly'>
        <div className='col-12 col-md-4 d-flex flex-column align-items-md-center justify-content-md-center gap-1'>
          <h2
            className={
              theme === 'darkSide'
                ? 'text-light p-2 text-center my-1 rounded'
                : 'p-2 text-center my-1 rounded  fw-bold'
            }>
            #Finca El Boleado Web
          </h2>
          <h5
            className={
              theme === 'darkSide'
                ? 'text-light p-2 text-center my-1 rounded'
                : 'p-2 text-center my-1 rounded  fw-bold'
            }>
            {language === 'es' ? es.description.description : en.description.description}
          </h5>
          <p
            className={
              theme === 'darkSide'
                ? 'text-light p-2 text-center my-1 rounded'
                : 'p-2 text-center my-1 rounded  fw-bold'
            }>
            {language === 'es' ? es.description.fincaWeb : en.description.fincaWeb}
          </p>
        </div>

        <img
          src='https://res.cloudinary.com/marangadev/image/upload/v1696626922/portfolio/Finca-El-Boleado-web_wbgnyf.webp'
          alt='Finca_El_Boleado_web'
          className={
            theme === 'darkSide'
              ? 'col-12 col-md-7 rounded'
              : 'col-12 col-md-7 rounded border border-dark'
          }
        />
      </div>

      <div className='d-flex align-items-center justify-content-center'>
        <a
          className={
            theme === 'darkSide'
              ? 'd-flex align-items-center rounded text-decoration-none p-2'
              : 'd-flex align-items-center rounded text-decoration-none p-2'
          }
          href='https://dall-e-clone-blog.netlify.app/'
          target={'_blank'}
          rel='noreferrer'>
          <p
            className={
              theme === 'darkSide'
                ? 'text-decoration-none text-white'
                : 'text-decoration-none text-dark'
            }>
            {language === 'es' ? es.links.app : en.links.app}
          </p>
          <i
            className={
              theme === 'darkSide'
                ? 'bi bi-link-45deg text-white fs-2'
                : 'bi bi-link-45deg fs-2 text-dark'
            }></i>
        </a>
      </div>

      <div className='p-3 col-12 rounded d-flex justify-content-evenly align-items-center'>
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
            src='https://res.cloudinary.com/marangadev/image/upload/v1696600612/portfolio/icons/skills/sass_mn1xxq_h91r31.png'
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
          ref={ref}>
          {theme === 'darkSide' ? (
            <img
              className='img-fluid'
              src='https://res.cloudinary.com/marangadev/image/upload/v1696600594/portfolio/AT-AT_35441_iqpelv_acaieh.webp'
              alt='AT-AT'
            />
          ) : (
            <img
              className={inView ? 'img-fluid fincaWebTakeOff' : 'img-fluid'}
              src='https://res.cloudinary.com/marangadev/image/upload/v1696600628/portfolio/X-Wing_-_02_35411_ifnjwx_zksdvb.webp'
              alt='xWing'
            />
          )}
        </div>
      </div>
    </div>
  );
}
