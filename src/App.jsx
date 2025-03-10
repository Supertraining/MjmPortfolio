import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import Header from "./components/header/Header";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./main/Main.jsx";
import LanguageProvider from "./context/languageContext";
import Background from "./components/background/Background";

function App() {
  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <Router>
            <Background />
            <Header />
            <AboutMe />
            <Main />
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
