import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes";
import { lightTheme } from "./shared/themes";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
