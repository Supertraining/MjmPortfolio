import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import LaEsquina from '../laEsquina/LaEsquina';
import FincaWeb from '../fincaWeb/FincaWeb';
import FincaStore from '../fincaStore/FincaStore';
import { useState } from 'react';
import './Main.css';
import Footer from '../footer/Footer';
import { LanguageContext } from '../../context/languageContext';

export default function Main() {
	const { theme } = useContext(ThemeContext);
	const { language, es, en } = useContext(LanguageContext)
	const [upDown, setupDown] = useState('');

	return (
		<div
			className={
				theme === 'darkSide'
					? `${theme} p-4 row rounded p-3 rounded`
					: 'lightSide p-3 rounded row'
			}>
			<LaEsquina />
			<FincaWeb />
			<FincaStore />
			<div className='d-flex justify-content-end'>
			
				<a	className={`d-flex justify-content-center flex-nowrap ${upDown} col-4 text-decoration-none text-dark mx-3`}
					onClick={() => {
						setupDown('up');
						setTimeout(() => {
							setupDown('down');
						}, 3000);
						setTimeout(() => {
							setupDown('');
						}, 10000);
					}}
					href='#header'>
						<div className='shipDialogBox col-8'>
					{(upDown === '' && language === 'es') ? `${es.shipDialogue.up}` : ''}
					{(upDown === '' && language === 'en') ? `${en.shipDialogue.up}` : ''}
					{upDown === 'up' ? `${en.shipDialogue.travel}` : ''}
					{(upDown === 'down' && language === 'es') ? `${es.shipDialogue.down}` : ''}
					{(upDown === 'down' && language === 'en') ? `${en.shipDialogue.down}` : ''}

				</div>
					<img
						className='img-fluid'
						src={require('../../assets/img/blue-star-wars-ships-.png')}
						alt='starShip'
					/>
				</a>
			
			</div>
			<Footer />
		</div>
	);
}
