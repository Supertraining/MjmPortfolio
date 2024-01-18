import { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import ThemeContext from '../../context/ThemeContext';
import './clubManager.css';
import { LanguageContext } from '../../context/languageContext';

export default function ClubManager() {
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
      <div className='col-12 d-flex flex-column flex-xl-row justify-content-evenly'>
        <div className='col-12 col-xl-4 d-flex flex-column align-items-md-center justify-content-md-center gap-1'>
          <h2
            className={
              theme === 'darkSide'
                ? 'text-light p-2 text-center my-1 rounded'
                : 'p-2 text-center my-1 rounded  fw-bold d-flex align-items-center justify-content-center'
            }>
            #Club Manager
          </h2>
          <h5
            className={
              theme === 'darkSide'
                ? 'text-light p-2 text-center my-1 rounded'
                : 'p-2 text-center my-1 rounded  fw-bold'
            }>
            { language === 'es' ? es.description.description : en.description.description }
          </h5>
          <p
            className={
              theme === 'darkSide'
                ? 'text-light p-2 text-center my-1 rounded'
                : 'p-2 text-center my-1 rounded  fw-bold'
            }>
            { language === 'es' ? es.description.clubManager : en.description.clubManager }
          </p>
        </div>

        <div
          className={
            theme === 'darkSide'
              ? 'col-12 col-xl-7 rounded d-flex flex-column gap-space'
              : 'col-12 col-xl-7 rounded border border-dark d-flex flex-column gap-space'
          }>

          <img
            src='https://res.cloudinary.com/marangadev/image/upload/v1705344036/Club-Manager_gdk7ea.webp'
            alt='CLubManager App'
            className='col-12 rounded'
          />

          <div className='d-flex flex-column flex-lg-row p-1 align-items-center justify-content-center  gap-1 links-font-size'>
            <a
              className={
                theme === 'darkSide'
                  ? 'd-flex align-items-center rounded text-decoration-none p-2'
                  : 'd-flex align-items-center rounded text-decoration-none p-2'
              }
              href='https://club-manager-admin.netlify.app/login'
              target={ '_blank' }
              rel='noreferrer'>
              <p
                className={
                  theme === 'darkSide'
                    ? 'text-decoration-none text-white d-flex align-items-center m-0'
                    : 'text-decoration-none text-dark d-flex align-items-center m-0'
                }>
                Admin Mode
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
              href='https://club-manager-client.netlify.app/'
              target={ '_blank' }
              rel='noreferrer'>
              <p
                className={
                  theme === 'darkSide'
                    ? 'text-decoration-none text-white d-flex align-items-center m-0'
                    : 'text-decoration-none text-dark d-flex align-items-center m-0'
                }>
                User Mode
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
              href='https://github.com/Supertraining/ClubManager'
              target={ '_blank' }
              rel='noreferrer'>
              <p
                className={
                  theme === 'darkSide'
                    ? 'text-decoration-none text-white d-flex align-items-center m-0'
                    : 'text-decoration-none text-dark d-flex align-items-center m-0 f-4'
                }>
                <i className='bi bi-chevron-left fs-2'></i>
                Repo
                <i className='bi bi-chevron-right fs-2'></i>
              </p>
            </a>
            Testing credentials:
            <ul className='list-unstyled m-0'>
              <li>username: bmyguest@fakemail.com</li>
              <li>password: @bmyguest1234</li>
            </ul>
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
                src='https://res.cloudinary.com/marangadev/image/upload/v1696600598/portfolio/Death_Star_256_cd9pam_w2p37h.webp'
                alt='deathStar'
              />
            ) : (
              <img
                className={ inView ? 'dalleShipTakeOff img-size' : 'img-size' }
                src='https://res.cloudinary.com/marangadev/image/upload/v1696600615/portfolio/Imperial_Star_Destroyer_t3jovq_zl17x8.webp'
                alt='imperialStar'
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
            <strong>Backend:</strong> bcrypt | connect-mongo | cors| dotenv | express |
            express-validator | helmet | jsonwebtoken | mongoose | node-cron | nodemailer | unidecode |
            uuid | winston
          </p>
          <p>
            <strong>Frontend:</strong> axios | bootstrap | js-cookie | react | react-bootstrap |
            react-date-time-picker-popup | react-dom | react-hook-form | react-intersection-observer |
            react-router-dom | react-toastify | unidecode | uuid | validator
          </p>
        </div>
      </div>
    </div>
  );
}
