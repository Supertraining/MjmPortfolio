import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const en = {
	side: 'Choose a side',
	greet: {
		hello: 'Hello!!',
		myNameIs: 'My name is...',
		name: 'Maranga Matías',
		profession: 'Full Stack Developer',
	},
	contactBtn: 'Contact me',
	aboutMe: {
		title: 'About me.',
		text: 'In this portfolio, you will be able to see some of the projects I have worked on.',
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
	},
	links: {
		app: 'Go to App.',
		web: 'go to website',
	} 
	
};
const es = {
	side: 'Elige un bando',
	greet: {
		hello: 'Hola!!',
		myNameIs: 'Mi nombre es...',
		name: 'Maranga Matías',
		profession: 'Desarrollador Full Stack',
	},
	contactBtn: 'Contactame',
	aboutMe: {
		title: 'Sobre mí.',
		text: 'En este portafolio podrás ver algunos de los proyectos en los que he trabajado.',
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
	},
	links: {
		app: 'Ir a la App.',
		web: 'Ir al sitio web',
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
