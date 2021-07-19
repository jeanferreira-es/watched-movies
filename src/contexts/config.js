import React, { createContext, useState, useEffect } from 'react';
import colors from '../styles/colors';

const ConfigContext = createContext({
    darkMode: false,
    setDarkMode: () => {},
    theme: {},
    setTheme: () => {}
});

export const ConfigProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [theme, setTheme] = useState({});

    useEffect(() => {
        // setDarkMode(false);
    },[]);

    useEffect(() => {
        setTheme({
            backgroundColor: darkMode ? colors.black : colors.white,
            cardColor: darkMode ? colors.dracula : colors.white,
            textColor: darkMode ? colors.white : colors.black,
            inputTextColor: darkMode ? colors.black : colors.white,
            opaqueColor: darkMode ? colors.white25 : colors.black25,
            opaqueText: darkMode ? colors.white25 : colors.black25, 
            subTextColor: darkMode ? colors.white50 : colors.black50,
            iconColor: darkMode ? colors.white50 : colors.darkDracula,
            barColor: darkMode ? colors.white25 : colors.black25,
            statusBarColor: darkMode ? colors.black : colors.white,
            statusBarStyle: darkMode ? 'light-content' : 'dark-content'
        });
    },[darkMode]);

    return(
        <ConfigContext.Provider value={{
            darkMode,
            setDarkMode,
            theme,
            setTheme,
        }}>
            {children}
        </ConfigContext.Provider>
    )
}

export default ConfigContext;