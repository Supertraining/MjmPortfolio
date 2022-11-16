import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import './fincaJavaScript.css';

export default function FincaJavascript() {
	const { theme } = useContext(ThemeContext);

	return (
		<div className='my-5 align-items-center row'>
			<div className='col-10'>
				<a
					className={
						theme === 'darkSide'
							? 'text-decoration-none text-white'
							: 'text-decoration-none text-dark w-100'
					}
					href='https://supertraining.github.io/desafioFinalCoder/entregaFinal/'
					target={'_blank'}
					rel='noreferrer'>
					<img
						src={require('../../assets/img/imgFincaJavaScript.png')}
						alt='imgFincaWeb'
						className='rounded img-fluid'
					/>
				</a>
			</div>
			<div className='col-2'>
				{theme === 'darkSide' ? (
					<img
						className='img-fluid'
						src={require('../../assets/img/Tie_Defender.png')}
						alt='tieDefender'
					/>
				) : (
					<img
						className='img-fluid fincaJS_ShadowImg'
						src={require('../../assets/img/Republic_Attack_GunShip.png')}
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
					<span className='fw-bold'>7.5%</span>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'img-fluid'}
						src={require('../../assets/icons/skills/css-3.png')}
						alt='css'
					/>
					<span className='fw-bold mx-1'>14.6%</span>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'img-fluid'}
						src={require('../../assets/icons/skills/JS.png')}
						alt='JavaScript'
					/>
					<span className='fw-bold mx-1'>77.9%</span>
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
