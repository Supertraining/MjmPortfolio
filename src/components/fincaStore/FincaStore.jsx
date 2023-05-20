import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import './fincaStore.css';
import { LanguageContext } from '../../context/languageContext';

export default function FincaStore() {

	const { theme } = useContext(ThemeContext);
	const { language, es, en } = useContext(LanguageContext)

	return (
		<div className='my-5 align-items-center row'>
			<div className='col-12'>

				<iframe title='DalleClone' className='w-100 p-2 bg-white' src='https://effortless-bienenstitch-3d5aa3.netlify.app/' height={'500px'}></iframe>

				<a
					className={
						theme === 'darkSide'
							? 'text-decoration-none text-white'
							: 'text-decoration-none text-dark fw-bold'
					}
					href='https://effortless-bienenstitch-3d5aa3.netlify.app/'
					target={'_blank'}
					rel='noreferrer'>{language === 'es' ? es.links.app : en.links.app}
				</a>
			</div>

			<div
				className={
					theme === 'darkSide'
						? 'my-1 border border-light text-white p-3 col-12 rounded d-flex justify-content-evenly align-items-center'
						: 'my-1 border border-dark p-3 col-12 rounded d-flex justify-content-evenly align-items-center'
				}>
				<div className='mx-1 col-2 text-center'>
					<img
						className={
							theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'skillsDarkLogoShadow img-fluid'
						}
						src={
							theme === 'darkSide'
								? require('../../assets/icons/skills/react_original.png')
								: require('../../assets/icons/skills/react_original.png')
						}
						alt='React'
					/>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={
							theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'skillsDarkLogoShadow img-fluid'
						}
						src={require('../../assets/icons/skills/html-5.png')}
						alt='HTML5'
					/>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={
							theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'skillsDarkLogoShadow img-fluid'
						}
						src={require('../../assets/icons/skills/css-3.png')}
						alt='css'
					/>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={
							theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'skillsDarkLogoShadow img-fluid'
						}
						src={require('../../assets/icons/skills/bootstrap.png')}
						alt='bootstrap'
					/>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={
							theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'skillsDarkLogoShadow img-fluid'
						}
						src={require('../../assets/icons/skills/firebase.png')}
						alt='Firebase'
					/>
				</div>

				<div className='col-2'>
					{theme === 'darkSide' ? (
						<img
							className='img-fluid'
							src={require('../../assets/img/blackSoldier.png')}
							alt='tieFighter'
						/>
					) : (
						<img
							className='img-fluid fincaStore_ShadowImg'
							src={require('../../assets/img/lightSoldier.png')}
							alt='xWing'
						/>
					)}
				</div>
			</div>
		</div>
	);
}
