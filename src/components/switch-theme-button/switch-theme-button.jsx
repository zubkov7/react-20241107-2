"use client";

import { Button } from "../button/button";
import { useTheme } from "../theme-context/use-theme";

export const SwitchThemeButton = () => {
  const { value, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {value === "dark" ? "Switch to light" : "Switch to dark"}
    </Button>
  );
};
