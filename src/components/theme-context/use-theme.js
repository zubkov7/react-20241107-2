"use client";

import { useContext } from "react";
import { ThemeContext } from ".";

export const useTheme = () => {
  return useContext(ThemeContext);
};
