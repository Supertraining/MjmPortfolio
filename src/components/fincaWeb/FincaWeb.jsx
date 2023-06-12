import React, { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import './fincaWeb.css';
import ThemeContext from '../../context/ThemeContext';
import { LanguageContext } from '../../context/languageContext';


export default function FincaWeb() {

	const { theme } = useContext(ThemeContext);
	const { language, es, en } = useContext(LanguageContext)

	const { ref, inView } = useInView({
		threshold: 0,
	});

	return (
		<div className='my-5 align-items-center flex flex-column row'>
			<div className='col-12'>

				<iframe title='DalleClone' className='w-100 p-2 bg-white' src='https://euphonious-cassata-3ddb7a.netlify.app/' height={'500px'}></iframe>

				<a
					className={
						theme === 'darkSide'
							? 'text-decoration-none text-white'
							: 'text-decoration-none text-dark fw-bold'
					}
					href='https://euphonious-cassata-3ddb7a.netlify.app/'
					target={'_blank'}
					rel='noreferrer'>{language === 'es' ? es.links.web : en.links.web}
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
						className={theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'skillsDarkLogoShadow img-fluid'}
						src={require('../../assets/icons/skills/html-5.png')}
						alt='HTML5'
					/>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'skillsDarkLogoShadow img-fluid'}
						src={require('../../assets/icons/skills/css-3.png')}
						alt='css'
					/>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'skillsDarkLogoShadow img-fluid'}
						src={require('../../assets/icons/skills/JS.png')}
						alt='JavaScript'
					/>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'skillsDarkLogoShadow img-fluid'}
						src={require('../../assets/icons/skills/sass.png')}
						alt='Sass'
					/>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'skillsDarkLogoShadow img-fluid'}
						src={require('../../assets/icons/skills/bootstrap.png')}
						alt='bootstrap'
					/>
				</div>

				<div
					className='col-2'
					ref={ref}>
					{theme === 'darkSide' ? (
						<img
							className='img-fluid'
							src={require('../../assets/img/AT-AT_35441.png')}
							alt='tieFighter'
						/>
					) : (
						<img
							className={inView ? 'img-fluid fincaWebTakeOff' : 'img-fluid'}
							src={require('../../assets/img/X-Wing_-_02_35411.png')}
							alt='xWing'
						/>
					)}
				</div>
			</div>
		</div>
	);
}
