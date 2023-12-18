import { useState } from 'react';
import { createContext } from 'react';
import PropTypes from 'prop-types';

const en = {
	side: 'Choose a side',
	greet: {
		hello: '¡¡Welcome to my portfolio!!',
		myNameIs: 'My name is...',
		name: 'Maranga Matías',
		profession: 'Full Stack Developer MERN',
	},
	contactBtn: 'Contact me',
	formSubmit: 'Send',
	formClose: 'Close',
	aboutMe: {
		text: 'Here you can find some projects in which I have worked, below each one you can see the technologies used to develop them. The backend deploys where made on render.com free service so they may take a moment to load. Feel free to contact me if you have any questions or comments.',
	},
	r2D2: {
		hello: '¡¡Hello',
		msgThx: 'thx for texting me!!',
		msgSent: '¡¡Msg sent! thank you!!'
	},
	links: {
		app: 'Try the App.',
		web: 'Go to the website',
		doc: 'Try the API with Swagger',
		api: 'Try the API',
	},
	dependencies: {
		dep: 'Dependencies',
	},
	description: {
		description: 'Description',
		dalle: 'This Web App uses the OpenAI API to generate images from text.',
		ecommerceBack: 'This RESTful API allows creating, querying, updating, and deleting users, products, and shopping carts. It is documented in Swagger, which allows testing its functionality in the browser.',
		productsAndMssgs: 'This RESTful API includes a simple front-end built with the EJS template engine and Bootstrap, which allows testing some of its functionalities such as creating a user, adding, querying, updating, and deleting products from MySQL database, or leaving a message in the chat room, whose history will be stored in MongoDB. This API uses WebSockets for communication between the client and the server. Also, it allows performing these actions through HTTP requests and additionally provides some extras, such as accessing a very simple mock created with Faker or server information.',
		fincaStore: 'This project involved creating the front-end with React and using Firebase as the database to store the products, and Firestore to store the images.',
		fincaWeb: 'Static website, below you can see the technologies used to develop it.',
		consultora: 'Static website, below you can see the technologies used to develop it.'
	}
};
const es = {
	side: 'Elige un bando',
	greet: {
		hello: '¡¡Bienvenid@ a mi portfolio!!',
		myNameIs: 'Mi nombre es...',
		name: 'Maranga Matías',
		profession: 'Desarrollador Full Stack MERN',
	},
	contactBtn: 'Contactame',
	formSubmit: 'Enviar',
	formClose: 'Cerrar',
	aboutMe: {
		text: 'Aquí podrás encontrar algunos proyectos en los que he trabajado, debajo de cada uno de ellos se pueden observar las tecnologías utilizadas para desarrollarlos. Los deploys de backend fueron realizados en el servicio gratuito de render.com por lo que pueden tomar un momento para cargar. Siéntete libre de contactarme si tienes alguna pregunta o comentario.',
	},
	r2D2: {
		hello: '¡¡Hola',
		msgThx: 'gracias por escribirme!!',
		msgSent: '¡¡Msj enviado!! Gracias!!'
	},
	links: {
		app: 'Probar la App.',
		web: 'Ir al sitio web',
		doc: 'Probar la API con Swagger',
		api: 'Probar la API'
	},
	dependencies: {
		dep: 'Dependencias',
	},
	description: {
		description: 'Descripción',
		dalle: 'Esta Web App utiliza la API de OpenAI para crear imágenes a partir de texto.',
		ecommerceBack: 'Esta API restful permite crear, consultar, actualizar y eliminar usuarios, productos y carritos. La misma esta documentada en Swagger lo que permite probar su funcionalidad en el navegador.',
		productsAndMssgs: 'Esta API RESTful incluye un front sencillo realizado en el motor de plantillas EJS y Bootstrap que permite probar algunas de sus funcionalidades como crear un usuario, agregar, consultar, actualizar y eliminar productos a la base de datos MySQL o dejar un mensaje en la sala de chat, cuyo historial se almacenara en MongoDB. Esta API utiliza WebSockets para la comunicación entre el cliente y el servidor. También, permite realizar estas acciones mediante peticiones HTTP y ademas algunos extras, como acceder a un mock muy sencillo realizado con Faker o a información del servidor.',
		fincaStore: 'Este proyecto incluyo realizar el frontend con React y utilizar Firebase como base de datos para almacenar los productos y Firestore para almacenar las imágenes.',
		fincaWeb: 'Sitio web estático, más abajo podrás observar las tecnologías utilizadas para desarrollarlo.',
		consultora: 'Sitio web estático, más abajo podrás observar las tecnologías utilizadas para desarrollarlo.'
	}
};

export const LanguageContext = createContext();
const initialLanguage = 'en';

export const LanguageProvider = ({ children }) => {
	const [ language, setLanguage ] = useState(initialLanguage);

	const handleLanguage = (e) => {
		if (e.target.value === 'es') {
			setLanguage('es');
		} else {
			setLanguage('en');
		}
	};

	const data = { language, handleLanguage, es, en };

	return <LanguageContext.Provider value={ data }>{ children }</LanguageContext.Provider>;
};

LanguageProvider.propTypes = {
	children: PropTypes.node
} 

export default LanguageProvider;
