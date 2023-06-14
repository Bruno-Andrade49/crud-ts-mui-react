import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/context/ThemeContext';
import { MenuLateral } from './shared/components';
import { AppDrawerProvider } from './shared/context';


function App() {
  return (
    <AppThemeProvider>
      <AppDrawerProvider>

        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>

      </AppDrawerProvider>
    </AppThemeProvider>

  );
}

export default App;
