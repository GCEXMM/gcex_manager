import { useEffect, useState } from 'react';
import { setIsConfiguratorOpened, setIsMiniSidenav, useUIController } from './context';
import { useLocation } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import themeLight from './assets/theme';
import themeDark from './assets/theme-dark';
import Sidenav from './layouts/Sidenav';
import ConfigButton from './examples/ConfigButton';
import brandLight from './assets/images/brand.png';
import brandDark from './assets/images/brand-dark.png';
import routes from './routes';
import { Routes, Route, Navigate } from 'react-router-dom';
import Configurator from './layouts/Configurator';
import Login from './pages/login';

const App = () => {
  const [controller, dispatch] = useUIController();
  const {
    isMiniSidenav,
    isTransparentSidenav,
    isWhiteSidenav,
    isConfiguratorOpened,
    sidenavColor,
    isDarkMode,
    layout,
  } = controller;
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const { pathname } = useLocation();

  const handleMouseEntered = () => {
    if (isMiniSidenav && !isMouseEntered) {
      setIsMiniSidenav(dispatch, false);
      setIsMouseEntered(true);
    }
  };

  const handleMouseLeft = () => {
    if (!isMiniSidenav && isMouseEntered) {
      setIsMiniSidenav(dispatch, true);
      setIsMouseEntered(false);
    }
  };

  // const handleOpenConfigurator = () => {
  //   setIsConfiguratorOpened(dispatch, !isConfiguratorOpened);
  // };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.items) {
        return getRoutes(route.items);
      }

      if (route.route) {
        return (
          <Route exact path={route.route} element={route.component} key={route.key} />
        );
      }

      return null;
    });

  return (
    <ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
      <CssBaseline />

      <div className="app">
        {layout === 'dashboard' && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={
                (isTransparentSidenav && !isDarkMode) || isWhiteSidenav
                  ? brandDark
                  : brandLight
              }
              brandName="GCEX"
              routes={routes}
              onMouseEnter={handleMouseEntered}
              onMouseLeave={handleMouseLeft}
            />
            <Configurator />
            {/* <ConfigButton onClick={handleOpenConfigurator} /> */}
          </>
        )}

        <main className="content">
          <Routes>
            {getRoutes(routes)}
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Navigate to="/dashboard/asset" />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
