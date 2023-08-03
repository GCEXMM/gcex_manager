import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

export default styled(Drawer)(({ theme, ownerState }) => {
  const { boxShadows, functions, transitions } = theme;
  const { isConfiguratorOpened } = ownerState;

  const configuratorWidth = 360;
  const { lg } = boxShadows;
  const { pxToRem } = functions;

  const drawerOpenStyles = () => ({
    width: configuratorWidth,
    left: 'initial',
    right: 0,
    transition: transitions.create('right', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  });

  const drawerCloseStyles = () => ({
    left: 'initial',
    right: pxToRem(-configuratorWidth),
    transition: transitions.create('all', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  });

  return {
    '& .MuiDrawer-paper': {
      height: '100vh',
      margin: 0,
      padding: `0 ${pxToRem(10)}`,
      borderRadius: 0,
      boxShadow: lg,
      overflowY: 'auto',
      ...(isConfiguratorOpened ? drawerOpenStyles() : drawerCloseStyles()),
    },
  };
});
