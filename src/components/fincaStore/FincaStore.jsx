import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import './fincaStore.css';

export default function FincaStore() {
	const { theme } = useContext(ThemeContext);

	return (
		<div className='my-5 align-items-center row'>
			<div className='col-9'>
				<a
					className={
						theme === 'darkSide'
							? 'text-decoration-none text-white'
							: 'text-decoration-none text-dark w-100'
					}
					href='https://effortless-bienenstitch-3d5aa3.netlify.app/'
					target={'_blank'}
					rel='noreferrer'>
					<img
						src={require('../../assets/img/fincaStore.png')}
						alt='imgFincaWeb'
						className='rounded img-fluid'
					/>
				</a>
			</div>
			<div className='col-3'>
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
			<div
				className={
					theme === 'darkSide'
						? 'my-1 border border-light text-white p-3 col-10 rounded d-flex justify-content-evenly align-items-center'
						: 'my-1 border border-dark p-3 col-10 rounded d-flex justify-content-evenly align-items-center'
				}>
				<div className='mx-1 col-2 text-center'>
					<img
						className={
							theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'img-fluid'
						}
						src={
							theme === 'darkSide'
								? require('../../assets/icons/skills/react_original.png')
								: require('../../assets/icons/skills/react.png')
						}
						alt='React'
					/>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={
							theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'img-fluid'
						}
						src={require('../../assets/icons/skills/html-5.png')}
						alt='HTML5'
					/>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={
							theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'img-fluid'
						}
						src={require('../../assets/icons/skills/css-3.png')}
						alt='css'
					/>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={
							theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'img-fluid'
						}
						src={require('../../assets/icons/skills/bootstrap.png')}
						alt='bootstrap'
					/>
				</div>
				<div className='mx-1 col-2 text-center'>
					<img
						className={
							theme === 'darkSide' ? 'skillsLogoShadow img-fluid' : 'img-fluid'
						}
						src={require('../../assets/icons/skills/firebase.png')}
						alt='Firebase'
					/>
				</div>
			</div>
		</div>
	);
}
