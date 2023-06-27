import React, { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import ThemeContext from '../../context/ThemeContext';
import './laEsquina.css';
import { LanguageContext } from '../../context/languageContext';

export default function LaEsquina() {

	const { theme } = useContext(ThemeContext);
	const { language, es, en } = useContext(LanguageContext);

	const { ref, inView } = useInView({
		threshold: 0,
	});

	return (
		<div className='my-5 align-items-center flex flex-column row'>
			<div className='col-12'>

				<iframe title='DalleClone' className='w-100 p-2 bg-dark' src='https://famous-griffin-70d0cd.netlify.app' height={'500px'}></iframe>

				<a
					className={
						theme === 'darkSide'
							? 'text-decoration-none text-white'
							: 'text-decoration-none text-dark fw-bold'
					}
					href='https://famous-griffin-70d0cd.netlify.app/'
					target={'_blank'}
					rel='noreferrer'>{language === 'es' ? es.links.app : en.links.app}

					<i class={
						theme === 'darkSide'
							? 'bi bi-hand-index-fill text-white'
							: 'bi bi-hand-index-fill'
					}></i>
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
						src={require('../../assets/icons/skills/mongodb_original_logo_icon_146424.png')}
						alt='MongoDb'
					/>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'skillsDarkLogoShadow img-fluid'}
						src={require('../../assets/icons/skills/express_original_wordmark_logo_icon_146528.png')}
						alt='Express'
					/>
				</div>

				<div className='mx-1 col-2 text-center'>
					<img
						className={theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'skillsDarkLogoShadow img-fluid'}
						src={require('../../assets/icons/skills/react_original.png')}
						alt='JavaScript'
					/>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'skillsDarkLogoShadow img-fluid'}
						src={require('../../assets/icons/skills/nodejs_original_logo_icon_146411.png')}
						alt='NodeJs'
					/>
				</div>
				<div
					className='col-3'
					ref={ref}>
					{theme === 'darkSide' ? (
						<img
							className='img-fluid'
							src={require('../../assets/img/Death_Star_256.png')}
							alt='deathStar'
						/>
					) : (
						<img
							className={inView ? 'img-fluid laEsquinaTakeOff' : 'img-fluid'}
							src={require('../../assets/img/Imperial_Star_Destroyer.png')}
							alt='imperialStar'
						/>
					)}
				</div>
			</div>
		</div>
	);
}
