import React, { FC } from 'react';
import { Button, SxProps } from '@mui/material';
import { useFormikContext } from 'formik';

type SubmitButtonType = {
  text: string;
  sx?: SxProps;
  children?: any;
};

export const SubmitButton: FC<SubmitButtonType> = ({ text, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    ...otherProps,
    onClick: handleSubmit,
    fullWidth: true,
  };

  return (
    <Button {...configButton} color="button" variant="contained">
      {text}
    </Button>
  );
};

SubmitButton.defaultProps = {
  sx: null,
  children: null,
};
