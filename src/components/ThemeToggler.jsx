import { useEffect, useState } from "react";
import { IoSunnySharp } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

function ThemeToggler() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <button onClick={themeToggler} className="btn">
      {theme === "light" ? <IoSunnySharp /> : <IoSunnyOutline />}
    </button>
  );
}

export default ThemeToggler;