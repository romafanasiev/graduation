import React, { FC } from 'react';
import { Box } from '@mui/material';

type WrapperType = {
  children: React.ReactNode[] | React.ReactNode;
};

export const Wrapper: FC<WrapperType> = ({ children }) => {
  return <Box sx={{ margin: '128px 30px 30px' }}>{children}</Box>;
};
