import React, { useState, useEffect } from "react";
import { AppContext } from ".";
const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "light";
};

const AppProvider = ({ initialTheme, children }) => {
  const features = [
    {
      id: 1,
      title: "Home",
      to: "/",
    },
    {
      id: 2,
      title: "Jokes",
      to: "jokes",
    },
    {
      id: 3,
      title: "About",
      to: "about",
    },
  ];

  const [theme, setTheme] = useState(getInitialTheme);
  const [nav, setNav] = useState(false);
  const rawSetTheme = (theme) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);
    localStorage.setItem("color-theme", theme);
  };
  if (initialTheme) {
    rawSetTheme(initialTheme);
  }
  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);
  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,

        nav,
        setNav,
        features,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
