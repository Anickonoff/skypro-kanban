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
        return JSON.parse(savedTheme);
      } catch {
        localStorage.removeItem("theme");
      }
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const [userCategories, setUserCategories] = useState(() => {
    const savedCategory = localStorage.getItem("categories");
    if (savedCategory) {
      try {
        return JSON.parse(savedCategory);
      } catch {
        localStorage.removeItem("categories");
      }
    }
    return {};
  });

  const mergeCategories = (theme, newCategories) => {
    const fullTheme = {
      ...theme,
      colors: {
        ...theme.colors,
        categories: { ...theme.colors.categories, ...newCategories.categories },
      },
    };
    return fullTheme;
  };

  const updateUserCategories = (category) => {
    setUserCategories(category);
    if (category) {
      localStorage.setItem("categories", JSON.stringify(category));
    } else {
      localStorage.removeItem("categories");
    }
  };

  const toggleTheme = () => {
    setTheme((theme) => {
      const newTheme = theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", JSON.stringify(newTheme));
      return newTheme;
    });
  };

  const fullTheme = theme === "light" ?
    mergeCategories(lightTheme, userCategories || {}) :
    mergeCategories(darkTheme, userCategories || {});

  return (
    <ThemeModeContext.Provider
      value={{ theme, toggleTheme, updateUserCategories }}
    >
      <ThemeProvider theme={fullTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
export default ThemeModeProvider;
