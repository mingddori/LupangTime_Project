import { createTheme, styled } from '@mui/material/styles';
import {} from '@mui/material';

/* Theme */

export const lightTheme = createTheme({
    palette : {
        mode: 'light',
        main: "#F7F7F7",
        light: "#FFFFFF",
        dark: "#E0E0E0",
        shadow: "#7F7F7F",
        defaultText: "#212121",
        highlightText: "#42A5F5",
        thumb: "#B6DEFF",
        normal: "#64B5F6",
        cancel: "#EF5350",
        hoverEffect: "#E3F2FD",
        hoverShadow: "#EEEEEE"
    },
    components: {
        // datepicker style
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        backgroundColor: "#42A5F5 !important",
                        color: "#FFFFFF",
                        '&:hover': {
                            backgroundColor: "#EEEEEE !important",
                        },
                    },
                    '&:hover': {
                        backgroundColor: "#E3F2FD !important",
                    },
                },
                today: {
                    backgroundColor: "#E3F2FD !important",
                },
            },
        },
    },

});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        main: "#212121",
        light: "#2C2C2C",
        dark: "#171717",
        shadow: "#171717",
        defaultText: "#FFFCF8",
        highlightText: "#FFB74D",
        thumb: "#FFB24F",
        normal: "#FFD54F",
        cancel: "#EF5350",
        hoverEffect: "#6B644E",
        hoverShadow: "#515151"
    },
    components: {
        // datepicker style
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        backgroundColor: "#FFB74D !important",
                        color: "#FFFFFF",
                        '&:hover': {
                            backgroundColor: "#515151 !important",
                        },
                    },
                    '&:hover': {
                        backgroundColor: "#6B644E !important",
                    },
                },
                today: {
                    backgroundColor: "#6B644E !important",
                },
            },
        },
    },
});