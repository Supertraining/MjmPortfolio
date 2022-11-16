import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import './footer.css'

export default function Footer() {

    const {theme} = useContext(ThemeContext);

    const date = new Date().getFullYear()

	return(
        <footer className={theme === 'darkSide' ? 'border rounded w-50 text-center p-2 text-white' : 'border border-dark rounded w-50 text-center p-2'}>
            <p><img className={theme === 'darkSide' ? 'bg-white rounded-5' : ''} src={require('../../assets/icons/derechos-de-autor-blackx16.png')} alt="" /> Copyright:<span>{date}</span></p>
        </footer>
    )
}
