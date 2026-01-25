import { useState } from "react";
import { ThemeModeContext } from "./ThemeModeContext";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../theme/GlobalStyles";
import { lightTheme, darkTheme } from "../theme/theme";

const ThemeModeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      try {
        return savedTheme ? JSON.parse(savedTheme) : "light";
      } catch {
        localStorage.removeItem("theme");
        return "light";
      }
    } else {
      return "light";
    }
  });

  const toggleTheme = () => {
    setTheme((theme) => {
      const newTheme = theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", JSON.stringify(newTheme));
      return newTheme;
    });
  };
  return (
    <ThemeModeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
export default ThemeModeProvider;
