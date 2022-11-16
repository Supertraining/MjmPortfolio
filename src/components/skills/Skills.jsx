import React from 'react';

export default function Skills() {
	return (
		<div className='my-1 border border-dark p-3 col-10 rounded d-flex justify-content-center'>
			<div className='mx-1'>
				<img
					src={require('../../assets/icons/skills/html-5.png')}
					alt='HTML5'
				/>
				<span className='fw-bold'>85%</span>
			</div>
			<div className='mx-1'>
				<img
					src={require('../../assets/icons/skills/css-3.png')}
					alt='css'
				/>
				<span className='fw-bold mx-1'>6%</span>
			</div>

			<div className='mx-1'>
				<img
					src={require('../../assets/icons/skills/JS.png')}
					alt='JavaScript'
				/>
				<span className='fw-bold mx-1'>9%</span>
			</div>
			<div className='mx-1'>
				<img
					src={require('../../assets/icons/skills/bootstrap.png')}
					alt='JavaScript'
				/>
			</div>
		</div>
	);
}
