"use client";

import { ThemeProvider } from "@material-tailwind/react";
import { StyledEngineProvider } from '@mui/material';

export default function MaterialTailwindThemeProvider({ children }) {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
