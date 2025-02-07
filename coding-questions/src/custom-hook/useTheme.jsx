import React, { useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(JSON.parse(localStorage.getItem("theme")) || "light");
  }, []);
  const toggleTheme = () => {
    console.log("Theme toggle");
    localStorage.setItem(
      "theme",
      JSON.stringify(theme === "light" ? "dark" : "light")
    );
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return {
    theme,
    toggleTheme,
  };
}

export default useTheme;
