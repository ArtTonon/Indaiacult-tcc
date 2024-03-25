import React from "react";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ToggleThemeButton = () => {
  const [theme, setTheme] = useState("light");
  const [icon, setIcon] = useState(false);
  const toggleTheme = () => {
    setIcon(!icon);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "Light" : "dark");
  };

  return (
    <div>
      <button
        onClick={(event) => {
          handleThemeSwitch(), toggleTheme();
        }}
      >
        {icon ? (
          <Sun
            color="#fff"
            className="dark:border-white"
            strokeWidth={1.5}
            size={44}
          />
        ) : (
          <Moon
            color="#121212"
            className="dark:bg-white"
            size={44}
            strokeWidth={1.5}
          />
        )}
      </button>
    </div>
  );
};

export default ToggleThemeButton;
