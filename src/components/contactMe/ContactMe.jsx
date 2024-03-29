import React from 'react';
import { useContext, useState } from 'react';
import { LanguageContext } from '../../context/languageContext';
import './contactMe.css';

export default function ContactMe({ setRenderForm }) {
	const [name, setName] = useState('');
	const [msg, setMsg] = useState('');
	const [r2D2, setR2D2] = useState(false);
	const { language, es, en } = useContext(LanguageContext)

	const getData = () => {
		fetch('https://formsubmit.co/ajax/maranga_matias@hotmail.com', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				name: name,
				message: msg,
			}),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	};

	return (
		<>
			<form className='d-flex flex-column w-100 bg-white rounded p-2'>
				<div className='d-flex align-items-center'>
					<div className={'col-2'}>
						<img
							className='img-fluid'
							src='https://res.cloudinary.com/marangadev/image/upload/v1696600621/portfolio/r2d2_128_bnldyd_yw4qmi.webp'
							alt=''
						/>
					</div>
					<>
						{(name) && (language === 'en') ? `${en.r2D2.hello} ${name} ${en.r2D2.msgThx}` : '...'}
						{(name) && (language === 'es') ? `${es.r2D2.hello} ${name} ${es.r2D2.msgThx}` : '...'}
						{(r2D2 === true && language === 'en') ? `${en.r2D2.msgSent}` : ''}
						{(r2D2 === true && language === 'es') ? `${es.r2D2.msgSent}` : ''}
					</>
				</div>

				<div className='d-flex align-items-end'>
					<div className='d-flex flex-column my-1'>
						<a
							className='m-1 d-flex align-items-center text-decoration-none text-primary Linkedin'
							href='https://www.linkedin.com/in/matias-maranga/'
							target='_blank'
							rel='noreferrer'>
							<img
								className='form_Div_Img mx-1 rounded-5'
								src='https://res.cloudinary.com/marangadev/image/upload/v1696600602/portfolio/icons/linkedin_o993nl_xhn58x.png'
								alt='Linkedin'
							/>
							Linkedin
						</a>
						<input
							className='rounded col-10'
							type='text'
							id='nombre'
							name='nombre'
							placeholder='Name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<div className='d-flex flex-column'>
						<div className='m-1 d-flex align-items-center'>
							<img
								className='form_Div_Img mx-1'
								src='https://res.cloudinary.com/marangadev/image/upload/v1696600602/portfolio/icons/emailx32_nis0ny_lttytm.png'
								alt='e-mail'
							/>{' '}
							marangamatias@gmail.com
						</div>
						<a
							className='m-1 d-flex align-items-center text-decoration-none text-dark whatsapp'
							href='https://wa.me/+5491150111375'
							target='_blank'
							rel='noreferrer'>
							<img
								className='form_Div_Img mx-1'
								src='https://res.cloudinary.com/marangadev/image/upload/v1696600614/portfolio/icons/whatsappx32_abgwck_i1nptm.png'
								alt='whapp'
							/>{' '}
							+5491150111375
						</a>
					</div>
				</div>
				<textarea
					className='rounded'
					name='mensaje'
					id='mensaje'
					cols='30'
					rows='8'
					placeholder='Your message...'
					value={msg}
					onChange={(e) => setMsg(e.target.value)}
					required
				/>
				<div className='d-flex justify-content-evenly'>
					<button
						className='rounded'
						type='submit'
						onClick={(e) => {
							if (msg && name) {
								e.preventDefault();
								getData();
								setTimeout(() => {
									setRenderForm(false);
								}, 3000);
								setR2D2(true);
								setTimeout(() => {
									setR2D2(false);
								}, 5000);
								setName('');
								setMsg('');
							}
						}}>
						{language === 'en' ? en.formSubmit : es.formSubmit}
					</button>
					<button
						className='text-decoration-none rounded form_HideForm'
						onClick={() => {
							setRenderForm(false);
						}}>
						{language === 'en' ? en.formClose : es.formClose}

					</button>
				</div>
			</form>
		</>
	);
}
