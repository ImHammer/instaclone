
import { createContext } from "react";
import WhiteTheme from './white.json';
import BlackTheme from './black.json';

type ThemesType = {
    [key: string]: Object
}

export const Themes: ThemesType = {
    white: WhiteTheme,
    black: BlackTheme
}
export const DefaultThemeName = 'white';
export const UseThemeProvider = createContext(Themes.default);