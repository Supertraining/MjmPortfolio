import { useState } from 'react';
import { createContext } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const initialTheme = 'lightSide'

const ThemeProvider = ( { children } ) =>  {

    const [theme, setTheme] = useState(initialTheme);
    
    const handleTheme = (e) => {
        if(e.target.value === 'lightSide') {
            setTheme('lightSide');
        } else {
            setTheme('darkSide');
        }
    };

	const data = { theme, handleTheme, setTheme };

    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node
} 

export default ThemeContext;
export { ThemeProvider };
