import React, { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import ThemeContext from '../../context/ThemeContext';
import './laEsquina.css';

export default function LaEsquina() {
	const { theme } = useContext(ThemeContext);
	const { ref, inView } = useInView({
		threshold: 0,
	});

	return (
		<div className='my-5 align-items-center row'>
			<div className='col-10'>
				<a
					className={
						theme === 'darkSide'
							? 'text-decoration-none text-white'
							: 'text-decoration-none text-dark w-100'
					}
					href='https://supertraining.github.io/Templates_2022/TemplateLand&Carr/'
					target={'_blank'}
					rel='noreferrer'>
					<img
						src={require('../../assets/img/imgLaEsquina.png')}
						alt='imgLaEsquina'
						className='rounded img-fluid'
					/>
				</a>
			</div>
			<div
				className='col-2'
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
			<div
				className={
					theme === 'darkSide'
						? 'my-1 border border-light text-white p-3 col-10 rounded d-flex justify-content-evenly align-items-center'
						: 'my-1 border border-dark p-3 col-10 rounded d-flex justify-content-evenly align-items-center'
				}>
				<div className='mx-1 col-2 text-center'>
					<img
						className={theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'img-fluid'}
						src={require('../../assets/icons/skills/html-5.png')}
						alt='HTML5'
					/>
					<span className='fw-bold'>85%</span>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'img-fluid'}
						src={require('../../assets/icons/skills/css-3.png')}
						alt='css'
					/>
					<span className='fw-bold mx-1'>6%</span>
				</div>

				<div className='mx-1 col-2 text-center'>
					<img
						className={theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'img-fluid'}
						src={require('../../assets/icons/skills/JS.png')}
						alt='JavaScript'
					/>
					<span className='fw-bold mx-1'>9%</span>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'img-fluid'}
						src={require('../../assets/icons/skills/bootstrap.png')}
						alt='bootstrap'
					/>
					<span className='fw-bold'>FWK</span>

				</div>
			</div>
		</div>
	);
}
