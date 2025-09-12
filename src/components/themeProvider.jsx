'use client'

import { createContext, useContext } from "react";
const defaultTheme = {
  color: {
    primary: "#24a566",
    secondary: "#445666",
  },
};

const ThemeContext = createContext(defaultTheme);

export const ThemeProvider = ({children}) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme =()=> useContext(ThemeContext)