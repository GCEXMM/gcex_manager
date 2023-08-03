import { createTheme } from '@mui/material';

import colors from './base/colors';
import breakpoints from './base/breakpoints';
import typography from './base/typography';
import boxShadows from './base/boxShadows';
import borders from './base/borders';
import globals from './base/globals';

import boxShadow from './functions/boxShadow';
import hexToRgb from './functions/hexToRgb';
import linearGradient from './functions/linearGradient';
import pxToRem from './functions/pxToRem';
import rgba from './functions/rgba';
import drawer from './components/drawer';
import link from './components/link';
import divider from './components/divider';
import list from './components/list';
import listItem from './components/list/listItem';
import listItemText from './components/list/listItem';
import icon from './components/icon';
import svgIcon from './components/svgIcon';
import button from './components/button';
import switchButton from './components/form/switchButton';
import container from './components/container';
import breadcrumbs from './components/breadcrumbs';
import tableContainer from './components/table/tableContainer';
import tableHead from './components/table/tableHead';
import tableCell from './components/table/tableCell';
import card from './components/card';
import cardContent from './components/card/cardContent';
import cardMedia from './components/card/cardMedia';
import input from './components/form/input';
import inputLabel from './components/form/inputLabel';
import autocomplete from './components/form/autocomplete';
import inputOutlined from './components/form/inputOutlined';
import textField from './components/form/textField';
import stepper from './components/stepper';
import step from './components/stepper/step';
import stepIcon from './components/stepper/stepIcon';
import stepLabel from './components/stepper/stepLabel';
import stepConnector from './components/stepper/stepConnector';
import menu from './components/menu';
import menuItem from './components/menu/menuItem';

export const theme = createTheme({
  mode: 'light',
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container,
      },
    },
    MuiDrawer: { ...drawer },
    MuiLink: { ...link },
    MuiDivider: { ...divider },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiButton: { ...button },
    MuiSwitch: { ...switchButton },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiCard: { ...card },
    MuiCardContent: { ...cardContent },
    MuiCardMedia: { ...cardMedia },
    MuiInput: { ...input },
    MuiAutocomplete: { ...autocomplete },
    MuiInputLabel: { ...inputLabel },
    MuiTextField: { ...textField },
    MuiOutlinedInput: { ...inputOutlined },
    MuiStepper: { ...stepper },
    MuiStepConnector: { ...stepConnector },
    MuiStep: { ...step },
    MuiStepIcon: { ...stepIcon },
    MuiStepLabel: { ...stepLabel },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
  },
});

export default theme;
