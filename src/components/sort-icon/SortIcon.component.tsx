import React, { FC } from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as sort } from '../../assets/icons/sort.svg';

export const SortIcon: FC = () => {
  return (
    <SvgIcon
      component={sort}
      color="icons"
      sx={{ height: '12px' }}
      inheritViewBox
    />
  );
};
