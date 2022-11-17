import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const en = {
	side: 'Choose a side',
	greet: {
		hello: 'Hello!!',
		myNameIs: 'My name is...',
		name: 'Maranga Matías',
		profession: 'Junior front end developer',
	},
	contactBtn: 'Contact me',
	aboutMe: {
		title: 'About me.',
		text: 'In this portfolio, made with React JS you will be able to see some projects I made, to keep my skills sharp, while I look for my first work experience for the IT industry.',
	},
	shipDialogue : {
		up : 'Going up?',
		travel : 'YouuuHHuuu',
		down: 'GoodBye!'
	},
	r2D2 : {
		hello : '¡¡Hello', 
		msgThx: 'thx for texting me!!',
		msgSent: '¡¡Msg sent! thank you!!'
	}
};
const es = {
	side: 'Elige un bando',
	greet: {
		hello: 'Hola!!',
		myNameIs: 'Mi nombre es...',
		name: 'Maranga Matías',
		profession: 'Junior front end developer',
	},
	contactBtn: 'Contactame',
	aboutMe: {
		title: 'Sobre mí.',
		text: 'En este portfolio, realizado con React JS podrá ver algunos proyectos que realicé, para mantener mis habilidades en forma, mientras busco mi primera experiencia laboral para la industria de TI.',
	},
	shipDialogue : {
		up : 'Hacia arriba?',
		travel : 'YouuuHHuuu',
		down: 'Adiós!'
	},
	r2D2 : {
		hello : '¡¡Hola', 
		msgThx: 'gracias por escribirme!!',
		msgSent: '¡¡Msj enviado!! Gracias!!'
	}
};

export const LanguageContext = createContext();
const initialLanguage = 'en';

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(initialLanguage);

	const handleLanguage = (e) => {
		if (e.target.value === 'es') {
			setLanguage('es');
		} else {
			setLanguage('en');
		}
	};

	const data = { language, handleLanguage, es, en };

	return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
