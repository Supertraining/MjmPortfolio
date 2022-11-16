import React, { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import './fincaWeb.css';
import ThemeContext from '../../context/ThemeContext';

export default function FincaWeb() {
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
					href='https://supertraining.github.io/FincaElBoleado/'
					target={'_blank'}
					rel='noreferrer'>
					<img
						src={require('../../assets/img/imgFincaWeb.png')}
						alt='imgFincaWeb'
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
						src={require('../../assets/img/Tie_Fighter_-_02_35418.png')}
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
					<span className='fw-bold'>66.2%</span>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'img-fluid'}
						src={require('../../assets/icons/skills/css-3.png')}
						alt='css'
					/>
					<span className='fw-bold mx-1'>16.1%</span>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'img-fluid'}
						src={require('../../assets/icons/skills/JS.png')}
						alt='JavaScript'
					/>
					<span className='fw-bold mx-1'>2.6%</span>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'img-fluid'}
						src={require('../../assets/icons/skills/sass.png')}
						alt='Sass'
					/>
					<span className='fw-bold mx-1'>15.1%</span>
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
