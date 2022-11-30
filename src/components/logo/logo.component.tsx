import React, { FC } from 'react';
import { SvgIcon, SxProps } from '@mui/material';
import { ReactComponent as logo } from '../../assets/logo.svg';

type LogoType = {
  sx?: SxProps;
};

export const Logo: FC<LogoType> = ({ ...otherProps }) => {
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
