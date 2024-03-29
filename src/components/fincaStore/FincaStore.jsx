import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import './fincaStore.css';
import { LanguageContext } from '../../context/languageContext';
export default function FincaStore() {
  const { theme } = useContext(ThemeContext);
  const { language, es, en } = useContext(LanguageContext);

  return (
    <div
      className={
        theme === 'darkSide'
          ? 'my-1 border border-light text-white col-12 rounded align-items-center d-flex flex-column p-3 gap-2'
          : 'bg-light my-1 border border-dark col-12 rounded align-items-center d-flex flex-column p-3 gap-2'
      }>
      <div className='col-12 d-flex flex-column flex-xl-row justify-content-evenly'>
        <div className='col-12 col-xl-4 d-flex flex-column align-items-xl-center justify-content-xl-center gap-1'>
          <h2
            className={
              theme === 'darkSide'
                ? 'text-light p-2 text-center my-1 rounded'
                : 'p-2 text-center my-1 rounded  fw-bold'
            }>
            #Finca El Boleado Store
          </h2>
          <p
            className={
              theme === 'darkSide'
                ? 'text-light p-2 text-center my-1 rounded'
                : 'p-2 text-center my-1 rounded  fw-bold'
            }>
            { language === 'es' ? es.description.fincaStore : en.description.fincaStore }
          </p>
        </div>

        <div
          className={
            theme === 'darkSide'
              ? 'col-12 col-xl-7 rounded d-flex flex-column'
              : 'col-12 col-xl-7 rounded border border-dark d-flex flex-column'
          }>

          <img
            src='https://res.cloudinary.com/marangadev/image/upload/v1696626920/portfolio/finca-el-boleado_zl9n1y.webp'
            alt='Finca_El_Boleado_store'
            className='col-12  rounded '
          />

          <div className='d-flex align-items-center justify-content-center'>
            <a
              className={
                theme === 'darkSide'
                  ? 'd-flex align-items-center rounded text-decoration-none p-2'
                  : 'd-flex align-items-center rounded text-decoration-none p-2'
              }
              href='https://finca-el-boleado-store.netlify.app/'
              target={ '_blank' }
              rel='noreferrer'>
              <p
                className={
                  theme === 'darkSide'
                    ? 'text-decoration-none text-white'
                    : 'text-decoration-none text-dark'
                }>
                { language === 'es' ? es.links.app : en.links.app }
              </p>
              <i
                className={
                  theme === 'darkSide'
                    ? 'bi bi-link-45deg text-white fs-2'
                    : 'bi bi-link-45deg fs-2 text-dark'
                }></i>
            </a>
          </div>

        </div>

      </div>


      <div className='col-12'>
        <div className='p-3 col-12 rounded d-flex justify-content-evenly align-items-center'>
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

        <div
          className={
            theme === 'darkSide'
              ? 'text-light p-2 text-center my-1 rounded'
              : 'text-dark p-2 text-center my-1 rounded  fw-bold'
          }>
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
