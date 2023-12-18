import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import Dalle from '../dalleAPI/Dalle';
import FincaWeb from '../fincaWeb/FincaWeb';
import FincaStore from '../fincaStore/FincaStore';
import EcommerceAPI from '../ecommerceAPI/EcommerceAPI.jsx';
import './Main.css';
import Footer from '../footer/Footer';
import ProductsAndMessages from '../productsAndMessages/ProductsAndMessages';
import Consultora from '../consultoraWeb/Consultora';

export default function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === 'darkSide' ? `${theme} p-4 d-flex row p-3 rounded justify-content-center` : 'lightSide p-3  d-flex row justify-content-center'
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

      <Footer />

    </div>
  );
}
