import './App.css';
import AboutMe from './components/aboutMe/AboutMe';
import Header from './components/header/Header';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter as Router} from 'react-router-dom';
import Main from './components/main/Main';
import LanguageProvider from './context/languageContext';

function App() {
	return (
		<>
			<ThemeProvider>
				<LanguageProvider>
					<Router>
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
