import { createContext, useContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

const UIContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'MINI_SIDENAV':
      return { ...state, isMiniSidenav: action.payload };

    case 'TRANSPARENT_SIDENAV':
      return { ...state, isTransparentSidenav: action.payload };

    case 'WHITE_SIDENAV':
      return { ...state, isWhiteSidenav: action.payload };

    case 'SIDENAV_COLOR':
      return { ...state, sidenavColor: action.payload };

    case 'FIXED_APPBAR':
      return { ...state, isFixedAppbar: action.payload };

    case 'TRANSPARENT_APPBAR':
      return { ...state, isTransparentAppbar: action.payload };

    case 'OPEN_CONFIGURATOR':
      return { ...state, isConfiguratorOpened: action.payload };

    case 'DARK_MODE':
      return { ...state, isDarkMode: action.payload };

    case 'LAYOUT':
      return { ...state, layout: action.payload };

    default:
      throw new Error(`Unhandled action type: ${action.payload}`);
  }
};

const UIControllerProvider = ({ children }) => {
  const initialState = {
    isMiniSidenav: false,
    isTransparentSidenav: false,
    isFixedAppbar: true,
    isTransparentAppbar: false,
    isConfiguratorOpened: false,
    sidenavColor: 'info',
    isWhiteSidenav: true,
    isDarkMode: false,
    layout: 'dashboard',
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

const useUIController = () => useContext(UIContext);

const setIsMiniSidenav = (dispatch, payload) =>
  dispatch({ type: 'MINI_SIDENAV', payload });
const setIsTransparentSidenav = (dispatch, payload) =>
  dispatch({ type: 'TRANSPARENT_SIDENAV', payload });
const setIsWhiteSidenav = (dispatch, payload) =>
  dispatch({ type: 'WHITE_SIDENAV', payload });
const setIsDarkMode = (dispatch, payload) => dispatch({ type: 'DARK_MODE', payload });
const setIsConfiguratorOpened = (dispatch, payload) =>
  dispatch({ type: 'OPEN_CONFIGURATOR', payload });
const setSidenavColor = (dispatch, payload) =>
  dispatch({ type: 'SIDENAV_COLOR', payload });
const setIsFixedAppbar = (dispatch, payload) =>
  dispatch({ type: 'FIXED_APPBAR', payload });
const setIsTransparentAppbar = (dispatch, payload) =>
  dispatch({ type: 'TRANSPARENT_APPBAR', payload });
const setLayout = (dispatch, payload) => dispatch({ type: 'LAYOUT', payload });

UIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  UIControllerProvider,
  useUIController,
  setIsMiniSidenav,
  setIsTransparentSidenav,
  setIsWhiteSidenav,
  setIsFixedAppbar,
  setIsTransparentAppbar,
  setIsConfiguratorOpened,
  setSidenavColor,
  setIsDarkMode,
  setLayout,
};
