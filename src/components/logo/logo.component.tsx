/* eslint-disable react/jsx-props-no-spreading */
import { SvgIcon, SxProps } from "@mui/material";
import React from "react";

import { ReactComponent as logo } from "../../assets/logo.svg";

type LogoType = {
  sx?: SxProps;
};

const Logo: React.FC<LogoType> = function Logo({ ...otherProps }) {
  const configLogo = {
    ...otherProps,
  };

  return (
    <SvgIcon
      format="align-center"
      component={logo}
      inheritViewBox
      {...configLogo}
    />
  );
};

Logo.defaultProps = {
  sx: null,
};

export default Logo;
