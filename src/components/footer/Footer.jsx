import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import './footer.css';

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  const date = new Date().getFullYear();

  return (
    <footer
      className={
        theme === 'darkSide'
          ? 'border rounded col-12 text-center p-2 text-white mt-5'
          : 'border border-dark rounded col-12 text-center p-2 mt-5'
      }>
      <p>
        <img
          className={theme === 'darkSide' ? 'bg-white rounded-5' : ''}
          src='https://res.cloudinary.com/marangadev/image/upload/v1696600600/portfolio/icons/derechos-de-autor-blackx16_d9o7n1_pfdxam.png'
          alt=''
        />{' '}
        Copyright:<span>{date}</span>
      </p>
    </footer>
  );
}
