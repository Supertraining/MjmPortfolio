import React, { useContext } from 'react';
import { LanguageContext } from '../../context/languageContext';
import ThemeContext from '../../context/ThemeContext';
import './AboutMe.css';

export default function AboutMe() {
	const { theme } = useContext(ThemeContext);
	const { language, es, en } = useContext(LanguageContext);

	return (
		<section
			id='aboutMe'
			className={
				theme === 'darkSide'
					? `row text-center text-white rounded p-3 aboutMeBorder ${theme}`
					: 'row text-center bg-light rounded p-3 lightSide aboutMeBorder'
			}>
			<h2>{language === 'es' ? es.aboutMe.title : en.aboutMe.title}</h2>
			<p>{language === 'es' ? es.aboutMe.text : en.aboutMe.text}</p>
		</section>
	);
}
