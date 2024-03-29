import { useContext } from 'react';
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
    <div
      className={
        theme === 'darkSide'
          ? 'my-1 border border-light text-white col-12 rounded align-items-center d-flex flex-column justify-content-center p-3 gap-2'
          : 'bg-light my-1 border border-dark col-12 rounded align-items-center flex flex-column justify-content-center p-3 gap-2'
      }>
      <div className='col-12 d-flex flex-column flex-xl-row justify-content-evenly'>
        <div className='col-12 col-xl-4 d-flex flex-column align-items-xl-center justify-content-xl-center gap-1'>
          <h2
            className={
              theme === 'darkSide'
                ? 'text-light p-2 text-center my-1 rounded'
                : 'p-2 text-center my-1 rounded  fw-bold'
            }>
            #E-commerce API
          </h2>
          <p
            className={
              theme === 'darkSide'
                ? 'text-light p-2 text-center my-1 rounded'
                : 'p-2 text-center my-1 rounded  fw-bold'
            }>
            { language === 'es' ? es.description.ecommerceBack : en.description.ecommerceBack }
          </p>
        </div>

        <div className={
          theme === 'darkSide'
            ? 'col-12 col-xl-7 rounded d-flex flex-column'
            : 'col-12 col-xl-7 rounded border border-dark d-flex flex-column'
        }>

          <img
            src='https://res.cloudinary.com/marangadev/image/upload/v1696626918/portfolio/Swagger-UI_y88j5q.webp'
            alt='Ecommerce_API'
            className='col-12 rounded'
            
          />

          <div className='d-flex align-items-center justify-content-center'>
            <a
              className={
                theme === 'darkSide'
                  ? 'd-flex align-items-center rounded text-decoration-none p-2'
                  : 'd-flex align-items-center rounded text-decoration-none p-2'
              }
              href='https://backend-32190.onrender.com/docs/'
              target={ '_blank' }
              rel='noreferrer'>
              <p
                className={
                  theme === 'darkSide'
                    ? 'text-decoration-none text-white d-flex align-items-center m-0'
                    : 'text-decoration-none text-dark d-flex align-items-center m-0'
                }>
                Docs
              </p>
              <i
                className={
                  theme === 'darkSide'
                    ? 'bi bi-link-45deg text-white fs-2'
                    : 'bi bi-link-45deg fs-2 text-dark'
                }></i>
            </a>

            <a
              className={
                theme === 'darkSide'
                  ? 'd-flex align-items-center rounded text-decoration-none p-2'
                  : 'd-flex align-items-center rounded text-decoration-none p-2'
              }
              href='https://github.com/Supertraining/ecommerceAPI'
              target={ '_blank' }
              rel='noreferrer'>

              <p
                className={
                  theme === 'darkSide'
                    ? 'text-decoration-none text-white d-flex align-items-center m-0'
                    : 'text-decoration-none text-dark d-flex align-items-center m-0 f-4'
                }>
                <i className="bi bi-chevron-left fs-2"></i>
                Repo
                <i className="bi bi-chevron-right fs-2"></i>
              </p>


            </a>

          </div>

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
              src='https://res.cloudinary.com/marangadev/image/upload/v1696600608/portfolio/icons/skills/mongodb_original_logo_icon_146424_rhahyl_frdqck.png'
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
              src='https://res.cloudinary.com/marangadev/image/upload/v1696600605/portfolio/icons/skills/express_original_wordmark_logo_icon_146528_harl5b_tkfzkd.png'
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
              src='https://res.cloudinary.com/marangadev/image/upload/v1696600609/portfolio/icons/skills/nodejs_original_logo_icon_146411_nzatgu_flx0r7.png'
              alt='NodeJs'
            />
          </div>

          <div
            className='col-2'
            ref={ ref }>
            { theme === 'darkSide' ? (
              <img
                className='img-size'
                src='https://res.cloudinary.com/marangadev/image/upload/v1696600623/portfolio/Tie_Defender_v0kguq_r0c4se.webp'
                alt='tieDefender'
              />
            ) : (
              <img
                className={ inView ? 'img-size falconTakeOff' : 'img-size' }
                src='https://res.cloudinary.com/marangadev/image/upload/v1696600618/portfolio/Millenium_Falcon_cwqypk_g1a5az.webp'
                alt='Falcon'
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
            <strong>backend:</strong> bcrypt | connect-mongo | dotenv | ejs | express |
            express-fileupload | express-session | mongoose | nodemailer | nodemon | jsonwebtoken | swagger-jsdoc | swagger-ui-express | twilio | winston
          </p>
        </div>
      </div>
    </div>
  );
}
