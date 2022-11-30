import React, { FC } from 'react';
import { Alert } from '@mui/material';

type TextType = {
  text: string;
};

export const AlertMessage: FC<TextType> = ({ text }) => {
  return (
    <Alert severity="error" sx={{ mt: 2 }} color="error">
      {text}
    </Alert>
  );
};
