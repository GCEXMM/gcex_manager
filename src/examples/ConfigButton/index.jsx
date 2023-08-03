import MUIBox from '../../components/MUIBox';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

const ConfigButton = ({ ...rest }) => (
  <MUIBox
    display="flex"
    justifyContent="center"
    alignItems="center"
    width="3.25rem"
    height="3.25rem"
    bgColor="white"
    shadow="sm"
    borderRadius="50%"
    position="fixed"
    right="2rem"
    bottom="2rem"
    zIndex={99}
    color="dark"
    sx={{ cursor: 'pointer' }}
    // onClick={handleConfiguratorOpen}
  >
    <SettingsRoundedIcon {...rest} fontSize="small" color="inherit" />
  </MUIBox>
);

export default ConfigButton;
