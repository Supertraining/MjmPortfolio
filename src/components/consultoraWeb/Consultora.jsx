import React, { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import ThemeContext from '../../context/ThemeContext';
import './consultora.css';

export default function Consultora() {
	const { theme } = useContext(ThemeContext);
	const { ref, inView } = useInView({
		threshold: 0,
	});

	return (
		<div className='my-5 align-items-center row'>
			<div className='col-9'>
				<a
					className={
						theme === 'darkSide'
							? 'text-decoration-none text-white'
							: 'text-decoration-none text-dark w-100'
					}
					href='https://supertraining.github.io/Template_Consultora/'
					target={'_blank'}
					rel='noreferrer'>
					<img
						src={require('../../assets/img/consultoraImg.png')}
						alt='imgConsultoraWeb'
						className='rounded img-fluid'
					/>
				</a>
			</div>
			<div
				className='col-3'
				ref={ref}>
				{theme === 'darkSide' ? (
					<img
						className='img-fluid'
						src={require('../../assets/img/AT-AT_35441.png')}
						alt='allTerrain'
					/>
				) : (
					<img
						className={inView ? 'img-fluid consultoraTakeOff' : 'img-fluid'}
						src={require('../../assets/img/Millenium_Falcon.png')}
						alt='xWing'
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
					<span className='fw-bold'>58.9%</span>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'img-fluid'}
						src={require('../../assets/icons/skills/css-3.png')}
						alt='css'
					/>
					<span className='fw-bold mx-1'>19.2%</span>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'img-fluid'}
						src={require('../../assets/icons/skills/JS.png')}
						alt='JavaScript'
					/>
					<span className='fw-bold mx-1'>4.1%</span>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'img-fluid'}
						src={require('../../assets/icons/skills/sass.png')}
						alt='Sass'
					/>
					<span className='fw-bold mx-1'>17.8%</span>
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
