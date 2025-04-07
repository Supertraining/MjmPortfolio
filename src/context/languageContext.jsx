import { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";

const en = {
  side: "Choose a side",
  greet: {
    hello: "¡¡Welcome to my portfolio!!",
    myNameIs: "My name is Maranga Matías",
    profession: "Full Stack Developer",
  },
  inputPlaceholder: "Write your name",
  contactTextArea: "Start typing and receive an AI text suggestion",
  use: "Use",
  dismiss: "Dismiss",
  prompt: {
    textArea:
      "Suggest a single message to write in a portfolio contact form to get in touch with Matías, the message should not have more than 140 characters, starting with: Hello Matías and ending with these three lines that are not within the 140 characters that say greetings!, Email: [yourEmail] and Phone [yourPhone] (optional). If you can add emojis to the message",
    greet: (name) => `say a nice greet short (max 10 words) to ${name}, and add emojis please`,
    forgotEnterName: `say one friendly short (max 10 words) message letting the user know that user didn't enter their name, use emojis please.`,
    suggestYourMssg: (aiSuggestion) =>
      `you have just suggested this text: "${aiSuggestion}", say one short (max 10 words) friendly message suggesting the user to use your suggestion, dont refer to it as "that text" for example, as its your text, use emojis please`,
    congratulateUsingSuggestion: (name) =>
      `congratulate ${name} for using your suggestion (max 10 words), and add emojis please`,
    msgSent:
      "say one short (max 10 words) message thanking the user for sending the message and goodbye, use emojis please",
  },
  contactBtn: "Contact me",
  formSubmit: "Send",
  formClose: "Close",
  aboutMe: {
    title: "About me",
    text: "Full Stack Developer with experience in JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, MySQL, and MongoDB. I have worked on fintech applications and freelance projects, implementing secure APIs, efficient databases, and scalable applications.",
  },
  links: {
    app: "App.",
    web: "Go to the website",
    doc: "Try the API with Swagger",
    api: "Try the API",
  },
  dependencies: {
    dep: "Dependencies",
  },
  description: {
    description: "Description",
    clubManager: {
      description:
        "Allow your users to stay updated on the latest news and reserve courts anytime, anywhere.",
      functionalities: {
        title: "Functionalities",
        user: {
          title: "User functionalities:",
          createAccount: "Create an account",
          createReservation: "Reserve any court offered by the club",
          deleteReservation: "Delete a reservation",
          viewProfile: "Vew my profile",
          editProfile: "Edit my personal information",
          reservationHistory: "Check reservation history",
        },
        admin: {
          title: "Admin functionalities:",
          createUser: "Create, update and delete users",
          getAllUsers:
            "Obtain a list of all users with relevant data, and access each user´s complete information",
          manageReservation: "Manage court reservations",
          createEvents: "Create events to be held at the club such as birthdays, meals, or others",
          activities:
            "Create, edit, and delete activity cards with names, descriptions, images, and the days and times they occur. This cards will be displayed on the main page of the application.",
        },
      },
    },
    cleanArchitectureApi:
      "RESTful API built with TypeScript following the principles of Clean Architecture.",
    ecommerceBack:
      "This RESTful API allows creating, querying, updating, and deleting users, products, and shopping carts.",
    productsAndMssgs:
      "This RESTful API includes a simple front-end built with the EJS template engine and Bootstrap, which allows testing some of its functionalities such as creating a user, adding, querying, updating, and deleting products from MySQL database, or leaving a message in the chat room, whose history will be stored in MongoDB. This API uses WebSockets for communication between the client and the server. Also, it allows performing these actions through HTTP requests and additionally provides some extras, such as accessing a very simple mock created with Faker or server information.",
    fincaStore:
      "This project involved creating the front-end with React and using Firebase as the database to store the products, and Firestore to store the images.",
    trelloJsonToCsv: "¡Download your Trello board in JSON and convert it to CSV!",
    fincaWeb: "Static website, below you can see the technologies used to develop it.",
    consultora: "Static website, below you can see the technologies used to develop it.",
  },
};
const es = {
  side: "Elige un bando",
  greet: {
    hello: "¡¡Bienvenid@ a mi portfolio!!",
    myNameIs: "Mi nombre es Maranga Matías",
    profession: "Desarrollador Full Stack",
  },
  inputPlaceholder: "Escribe tu nombre",
  contactTextArea: "Comienza a escribir y recibe un texto sugerido por IA",
  use: "Usar",
  dismiss: "Descartar",
  prompt: {
    textArea:
      "Sugiere un único mensaje para escribir en un formulario de contacto de un portfolio para ponerse en contacto con Matías, el mensaje no debe tener mas de 140 caracteres, comenzando con: Hola Matías y finalizando con estas tres lineas que no estan dentro de los 140 caracteres que digan saludos!, Email: [tuEmail] y Teléfono[tuTeléfono](opcional). Si puedes agrega emojis al mensaje",
    greet: (name) =>
      `Dí un lindo corto (max 10 palabras) mensaje de bienvenida a ${name} y agrega emojis por favor`,
    forgotEnterName:
      "Dí un mensaje amistoso corto (max 10 palabras) diciendo que el usuario no ingreso su nombre, usa emojis por favor.",
    suggestYourMssg: (aiSuggestion) =>
      `acabas de sugerir este texto: "${aiSuggestion}", di un mensaje corto (máximo 10 palabras) sugiriendo amablemente al usuario que use tu sugerencia, no te refieras a él como "ese texto", por ejemplo, ya que es tu texto, usa emojis por favor`,
    congratulateUsingSuggestion: (name) =>
      `festeja (max 10 palabras) que ${name} uso tu sugerencia, usa emojis por favor`,
    msgSent:
      "Dí un mensaje corto (max 10 palabras) agradeciendo al usuario por enviar el mensaje y despidete, usa emojis por favor",
  },
  contactBtn: "Contactame",
  formSubmit: "Enviar",
  formClose: "Cerrar",
  aboutMe: {
    title: "Sobre mi",
    text: "Desarrollador Full Stack con experiencia en JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, MySQL y MongoDB. He trabajado en aplicaciones fintech y proyectos freelance, implementando APIs seguras, bases de datos eficientes y aplicaciones escalables.",
  },
  links: {
    app: "App.",
    web: "Ir al sitio web",
    doc: "Probar la API con Swagger",
    api: "Probar la API",
  },
  dependencies: {
    dep: "Dependencias",
  },
  description: {
    description: "Descripción",
    clubManager: {
      description:
        "Permite a tus usuarios mantenerse actualizados con las actividades del club y reservar canchas desde cualquier lugar",
      functionalities: {
        title: "Functionalities",
        user: {
          title: "User functionalities:",
          createAccount: "Crear una cuenta",
          createReservation: "Reservar cualquier cancha ofrecida por el club",
          deleteReservation: "Borrar reservas",
          viewProfile: "Ver mi perfil",
          editProfile: "Editar mi información personal",
          reservationHistory: "Chequear mi historial de reservas",
        },
        admin: {
          title: "Admin functionalities:",
          createUser: "Crear, actualizar y borrar usuarios",
          getAllUsers:
            "Obtener una lista de todos los usuarios con informacion relevante, y acceder a la informacion completa de cada uno de ellos",
          manageReservation: "Manejar las reservas de cada cancha",
          createEvents:
            "Crear eventos sociales que van a ser llevados a cabo en el club, como cumpleaños, cenas, reuniones, u otros",
          activities:
            "crear, editar y eliminar tarjetas de actividades con nombres, descripciones, imágenes y los días y horas en que ocurren. Estas tarjetas se mostrarán en la página principal de la aplicación.",
        },
      },
    },
    cleanArchitectureApi:
      "RESTful API construida con TypeScript siguiendo los principios de Clean Architecture.",
    ecommerceBack:
      "Esta API restful permite crear, consultar, actualizar y eliminar usuarios, productos y carritos.",
    productsAndMssgs:
      "Esta API RESTful incluye un front sencillo realizado en el motor de plantillas EJS y Bootstrap que permite probar algunas de sus funcionalidades como crear un usuario, agregar, consultar, actualizar y eliminar productos a la base de datos MySQL o dejar un mensaje en la sala de chat, cuyo historial se almacenara en MongoDB. Esta API utiliza WebSockets para la comunicación entre el cliente y el servidor. También, permite realizar estas acciones mediante peticiones HTTP y ademas algunos extras, como acceder a un mock muy sencillo realizado con Faker o a información del servidor.",
    fincaStore:
      "Este proyecto incluyo realizar el frontend con React y utilizar Firebase como base de datos para almacenar los productos y Firestore para almacenar las imágenes.",
    trelloJsonToCsv: "¡Descarga tu tablero en Trello en formato JSON y conviertelo en CSV!",
    fincaWeb:
      "Sitio web estático, más abajo podrás observar las tecnologías utilizadas para desarrollarlo.",
    consultora:
      "Sitio web estático, más abajo podrás observar las tecnologías utilizadas para desarrollarlo.",
  },
};

export const LanguageContext = createContext();
const initialLanguage = "en";

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);

  const handleLanguage = (e) => {
    if (e.target.value === "es") {
      setLanguage("es");
    } else {
      setLanguage("en");
    }
  };

  const data = { language, handleLanguage, es, en };

  return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>;
};

LanguageProvider.propTypes = {
  children: PropTypes.node,
};

export default LanguageProvider;
