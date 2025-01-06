"use client";

import { ThemeProvider } from "@material-tailwind/react";
import { StyledEngineProvider } from '@mui/material';

import { lightTheme, darkTheme } from "./Styles";

export default function MaterialTailwindThemeProvider({ children }) {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={lightTheme}>
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
