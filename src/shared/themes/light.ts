import { createTheme } from "@mui/material"
import { cyan, green } from "@mui/material/colors";

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: green[600],
            dark: green[800],
            light: green[500],
            contrastText: '#ffffff'
        },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#ffffff'
        },
        background: {
            paper: "#ffffff",
            default: "#f7f6f3"
        }
    }
});