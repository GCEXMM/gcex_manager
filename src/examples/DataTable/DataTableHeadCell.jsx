import React from 'react';
import { useUIController } from '../../context';
import MUIBox from '../../components/MUIBox';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import PropTypes from 'prop-types';

const DataTableHeadCell = ({ width, sorted, align, children, ...rest }) => {
  const [controller] = useUIController();
  const { isDarkMode } = controller;

  return (
    <MUIBox
      component="th"
      width={width}
      py={1.5}
      px={3}
      sx={({ palette: { light }, borders: { borderWidth } }) => ({
        borderBottom: `${borderWidth[1]} solid ${light.main}`,
      })}
    >
      <MUIBox
        {...rest}
        position="relative"
        textAlign={align}
        color={isDarkMode ? 'white' : 'secondary'}
        opacity={0.7}
        sx={({ typography: { size, fontWeightBold } }) => ({
          fontSize: size.xxs,
          fontWeight: fontWeightBold,
          textTransform: 'uppercase',
          cursor: sorted && 'pointer',
          userSelect: sorted && 'none',
        })}
      >
        {children}
        {sorted && (
          <MUIBox
            position="absolute"
            top={0}
            right={align !== 'right' ? '16px' : 0}
            left={align === 'right' ? '-5px' : 'unset'}
            sx={({ typography: { size } }) => ({
              fontSize: size.lg,
            })}
          >
            <MUIBox
              position="absolute"
              top={-6}
              color={sorted === 'asce' ? 'text' : 'secondary'}
              opacity={sorted === 'asce' ? 1 : 0.5}
            >
              <ArrowDropUpRoundedIcon />
            </MUIBox>
            <MUIBox
              position="absolute"
              top={0}
              color={sorted === 'desc' ? 'text' : 'secondary'}
              opacity={sorted === 'desc' ? 1 : 0.5}
            >
              <ArrowDropDownRoundedIcon />
            </MUIBox>
          </MUIBox>
        )}
      </MUIBox>
    </MUIBox>
  );
};

DataTableHeadCell.defaultProps = {
  width: 'auto',
  sorted: 'none',
  align: 'left',
};

// Typechecking props for the DataTableHeadCell
DataTableHeadCell.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
  sorted: PropTypes.oneOf([false, 'none', 'asce', 'desc']),
  align: PropTypes.oneOf(['left', 'right', 'center']),
};

export default DataTableHeadCell;
