import { useState } from "react";
import { ThemeContext } from ".";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ value: theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
