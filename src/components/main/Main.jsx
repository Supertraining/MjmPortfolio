import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import Dalle from '../dalleAPI/Dalle';
import FincaWeb from '../fincaWeb/FincaWeb';
import FincaStore from '../fincaStore/FincaStore';
import EcommerceAPI from '../ecommerceAPI/EcommerceAPI.jsx';
import { useState } from 'react';
import './Main.css';
import Footer from '../footer/Footer';
import { LanguageContext } from '../../context/languageContext';
import ProductsAndMessages from '../productsAndMessages/ProductsAndMessages';
import Consultora from '../consultoraWeb/Consultora';

export default function Main() {
  const { theme } = useContext(ThemeContext);
  const { language, es, en } = useContext(LanguageContext);
  const [ upDown, setupDown ] = useState('');

  return (
    <div
      className={
        theme === 'darkSide' ? `${theme} p-4 row rounded p-3 rounded justify-content-center` : 'lightSide p-3 rounded row justify-content-center'
      }>
      <Dalle />
      <EcommerceAPI />
      <ProductsAndMessages />
      <FincaStore />
      <FincaWeb />
      <Consultora />
      
      <div className='col 12 d-flex justify-content-end my-3'>
        <a
          className='col-2  text-decoration-none'
          onClick={ () => {
            setupDown('active');
            setTimeout(() => {
              setupDown('active down');
            }, 3000);
            setTimeout(() => {
              setupDown('down');
            }, 4000);
          } }
          href='#header'>
          <div className='d-flex flex-column align-items-center arrows-shadow'>
            <i
              className={
                theme === 'darkSide'
                  ? 'bi bi-chevron-compact-up blueStarWarsTakeOff arrow-dark-one'
                  : 'bi bi-chevron-compact-up blueStarWarsTakeOff arrow-light-one'
              }></i>
            <i
              className={
                theme === 'darkSide'
                  ? 'bi bi-chevron-compact-up blueStarWarsTakeOff arrow-dark-two'
                  : 'bi bi-chevron-compact-up blueStarWarsTakeOff arrow-light-two'
              }></i>
            <i
              className={
                theme === 'darkSide'
                  ? 'bi bi-chevron-compact-up blueStarWarsTakeOff arrow-dark-three'
                  : 'bi bi-chevron-compact-up blueStarWarsTakeOff arrow-light-three'
              }></i>
            <i
              className={
                theme === 'darkSide'
                  ? 'bi bi-chevron-compact-up blueStarWarsTakeOff arrow-dark-four'
                  : 'bi bi-chevron-compact-up blueStarWarsTakeOff arrow-light-four'
              }></i>
            <span className={ theme === 'darkSide' ? 'arrow-text-dark' : 'arrow-text-light' }>
              UP
            </span>
          </div>
        </a>
      </div>

      <div className={ `d-flex justify-content-end up ${upDown}` }>
        <div className='shipDialogBox col-3 col-sm-2 col-lg-1'>
          { upDown === 'active' && `${en.shipDialogue.travel}` }
          { (upDown === 'active down' || upDown === 'down') &&
            language === 'es' &&
            `${es.shipDialogue.down}` }
          { (upDown === 'active down' || upDown === 'down') &&
            language === 'en' &&
            `${en.shipDialogue.down}` }
        </div>
        <img
          className={
            theme === 'darkSide'
              ? 'col-3 col-sm-2 blueStarWarsShip-dark'
              : 'col-3 col-sm-2 blueStarWarsShip'
          }
          src='https://res.cloudinary.com/marangadev/image/upload/v1696600597/portfolio/blue-star-wars-ships-_l6sgnk_mv93xm.webp'
          alt='starShip'
        />
      </div>

      <Footer />

    </div>
  );
}
