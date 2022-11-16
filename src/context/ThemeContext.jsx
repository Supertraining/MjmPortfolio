import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

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

export default ThemeContext;
export { ThemeProvider };
