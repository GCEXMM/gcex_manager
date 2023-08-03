import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import MUIBox from '../../components/MUIBox';
import MUITypography from '../../components/MUITypography';

const Brand = ({ brand, brandName, color, isMiniSidenav }) => {
  const sxBrandLabel = (theme) => {
    const { functions, transitions, typography, breakpoints } = theme;

    const { pxToRem } = functions;
    const { fontWeightMedium } = typography;

    return {
      ml: 1.5,
      fontWeight: fontWeightMedium,
      wordSpacing: pxToRem(-1),
      transition: transitions.create('opacity', {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),

      [breakpoints.up('xl')]: {
        opacity: isMiniSidenav ? 0 : 1,
      },
    };
  };

  return (
    <MUIBox component={NavLink} to="/" display="flex" alignItems="center">
      {brand && <MUIBox component="img" src={brand} alt="Brand" width="2rem" />}
      <MUIBox width={!brandName && '100%'} sx={sxBrandLabel}>
        <MUITypography component="h6" variant="button" fontWeight="medium" color={color}>
          {brandName}
        </MUITypography>
      </MUIBox>
    </MUIBox>
  );
};

Brand.defaultProps = {
  color: 'inherit',
};

Brand.propTypes = {
  brand: PropTypes.string.isRequired,
  brandName: PropTypes.string,
  color: PropTypes.string,
  isMiniSidenav: PropTypes.bool.isRequired,
};

export default Brand;
