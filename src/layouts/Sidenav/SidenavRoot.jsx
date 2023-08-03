import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

export default styled(Drawer)(({ theme, ownerState }) => {
  const sideNavWidth = 250;
  const { palette, boxShadows, transitions, breakpoints, functions } = theme;
  const { isMiniSidenav, isTransparentSidenav, isWhiteSidenav, isDarkMode } = ownerState;

  const { transparent, gradients, white, background } = palette;
  const { xxl } = boxShadows;
  const { pxToRem, linearGradient } = functions;

  let backgroundValue =
    isDarkMode === 'dark'
      ? background.sidenav
      : linearGradient(gradients.dark.main, gradients.dark.state);

  if (isTransparentSidenav) {
    backgroundValue = transparent.main;
  } else if (isWhiteSidenav) {
    backgroundValue = white.main;
  }

  const drawerOpenStyles = () => ({
    background: backgroundValue,
    transform: 'translateX(0)',
    transition: transitions.create('transform', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),

    [breakpoints.up('xl')]: {
      boxShadow: isTransparentSidenav ? 'none' : xxl,
      marginButton: isTransparentSidenav ? 0 : 'inherit',
      left: 0,
      width: sideNavWidth,
      transform: 'translateX(0)',
      transition: transitions.create(['width', 'background-color'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }),
    },
  });

  const drawerCloseStyles = () => ({
    background: backgroundValue,
    transform: `translateX(${pxToRem(-320)})`,
    transition: transitions.create('transform', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),

    [breakpoints.up('xl')]: {
      boxShadow: isTransparentSidenav ? 'none' : xxl,
      marginBottom: isTransparentSidenav ? 0 : 'inherit',
      left: '0',
      width: pxToRem(96),
      overflowX: 'hidden',
      transform: 'translateX(0)',
      transition: transitions.create(['width', 'background-color'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),
    },
  });

  return {
    '& .MuiDrawer-paper': {
      boxShadow: xxl,
      border: 'none',

      ...(isMiniSidenav ? drawerCloseStyles() : drawerOpenStyles()),
    },
  };
});
