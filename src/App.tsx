import { useEffect, useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { DefaultThemeName, Themes, UseThemeProvider } from './services/themes';

const SetThemeReducer = (state: any, action: { type: string, payload: any }) => {
    switch(action.type) {
        case 'set':
            return action.payload;
        default:
            return state;
    }
}

export default function App() {

    const [selectedThemeName, dispatchTheme] = useReducer(SetThemeReducer, Themes[DefaultThemeName])

    // let theme = Themes.default;

    useEffect(() => {
        const storedTheme = window.localStorage.getItem("theme");
        if (storedTheme !== null) {
            if (Themes[storedTheme] !== undefined) dispatchTheme({ type: 'set', payload: Themes[storedTheme] });
        }
    }, []);

    return (
        <ThemeProvider theme={selectedThemeName}>
            <UseThemeProvider.Provider value={selectedThemeName}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                    </Routes>
                </BrowserRouter>
            </UseThemeProvider.Provider>
        </ThemeProvider>
    )
}