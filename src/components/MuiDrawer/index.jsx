import { forwardRef } from "react";
import MuiDrawerRoot from "./MuiDrawerRoot";

const MuiDrawer = forwardRef(({ open, ...rest }, ref) => (
  <MuiDrawerRoot
    ref={ref}
    ownerState={{ open }}
    {...rest}
  />
));

export default MuiDrawer;
