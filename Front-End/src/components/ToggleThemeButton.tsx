import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context";

const ToggleThemeButton = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div>
      <button aria-label="botão para mudar de tema" onClick={toggleDarkMode}>
        {darkMode ? (
          <Sun
            color=" #fff"
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
