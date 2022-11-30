import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { Logo } from '../logo';

type ModalHeaderType = {
  title: string;
  message?: string;
};

export const ModalHeader: FC<ModalHeaderType> = ({ title, message }) => {
  return (
    <>
      <Logo sx={{ fontSize: '48px' }} />

      <Typography
        variant="h3"
        sx={{
          margin: '12px 0 0',
        }}
      >
        Dashboard Kit
      </Typography>

      <Typography
        variant="h2"
        className="log-in__title"
        sx={{
          margin: '32px 0 0',
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        className="log-in__text"
        sx={{
          margin: '12px 0 0 0',
        }}
      >
        {message}
      </Typography>
    </>
  );
};

ModalHeader.defaultProps = {
  message: undefined,
};
