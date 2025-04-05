import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import Header from "./components/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./main/Main.jsx";
import Background from "./components/background/Background";
import Footer from "./components/footer/Footer.jsx";
import { useContext } from "react";
import { LanguageContext } from "./context/languageContext";
import ThemeContext from "./context/ThemeContext";
import Hr from "./components/hr/Hr.jsx";
function App() {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { language, es, en, handleLanguage } = useContext(LanguageContext);
  return (
    <>
      <Router>
        <Background theme={theme} />
        <Header
          theme={theme}
          handleTheme={handleTheme}
          language={language}
          handleLanguage={handleLanguage}
          es={es}
          en={en}
        />
        <Hr theme={theme} />
        <AboutMe
          language={language}
          theme={theme}
          es={es}
          en={en}
        />
        <Hr theme={theme} />
        <Main
          theme={theme}
          language={language}
          es={es}
          en={en}
        />
        <Footer theme={theme} />
      </Router>
    </>
  );
}

export default App;
