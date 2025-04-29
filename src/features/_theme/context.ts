import React from "react";
import { Theme } from "./type";

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeStateInitial: ThemeState = {
  theme: 'system',
  setTheme: () => null,
};

export const ThemeContext = React.createContext<ThemeState>(ThemeStateInitial);