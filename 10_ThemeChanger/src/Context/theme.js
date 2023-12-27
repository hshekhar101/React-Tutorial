import {createContext } from "react";

export const ThemeContext = createContext(
    {
        theme: "light",
        setTheme: () => {}
    }
);

export const ThemeProvider = ThemeContext.Provider;
