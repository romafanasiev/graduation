import React, { FC } from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as filter } from '../../assets/icons/filter.svg';

export const FilterIcon: FC = () => {
  return (
    <SvgIcon
      color="icons"
      component={filter}
      sx={{ height: '12px' }}
      inheritViewBox
    />
  );
};
