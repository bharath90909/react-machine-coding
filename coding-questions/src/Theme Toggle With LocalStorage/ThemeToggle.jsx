import React, { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function ThemeToggle() {
  const [theme, setTheme] = useState();
  const { setLocalStorage, getLocalStorage } = useLocalStorage();
  useEffect(() => {
    setTimeout(() => {
      const localTheme = getLocalStorage();
      if (localTheme) {
        setTheme(localTheme);
      } else {
        setTheme("light");
      }
    }, 2000);
  }, []);
  return (
    <div>
      <h1>You are using {theme} theme</h1>
      <button
        onClick={() => {
          setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
          setLocalStorage(theme === "light" ? "dark" : "light");
        }}
      >
        Change Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
