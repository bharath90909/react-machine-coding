import React, { useState } from "react";
import useTheme from "./useTheme";
import "./theme.css";
function Theme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`${theme === "light" ? "dark" : "light"}`}>
      <button onClick={toggleTheme}>Theme</button>
    </div>
  );
}

export default Theme;
