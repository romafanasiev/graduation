/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Button, SxProps } from "@mui/material";
import { useFormikContext } from "formik";

type SubmitButtonType = {
  text: string;
  sx?: SxProps;
  children?: any;
};

const SubmitButton: React.FC<SubmitButtonType> = function SubmitButton({
  text,
  ...otherProps
}) {
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

export default SubmitButton;
