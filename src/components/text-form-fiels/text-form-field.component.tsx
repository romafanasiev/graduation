/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import TextField from "@mui/material/TextField";
import { useField } from "formik";

interface TextFormFieldType {
  name: string;
  id?: string;
  placeholder?: string;
  className?: string;
  error?: boolean;
  helperText?: string;
}
const TextFormField: React.FC<TextFormFieldType> = function TextFormField({
  name,
  id,
  placeholder,
  className,
  ...otherProps
}) {
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    fullWidth: true,
    ...otherProps,
    placeholder,
    id,
    className,
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <TextField {...configTextField} variant="outlined" />;
};

TextFormField.defaultProps = {
  id: undefined,
  placeholder: undefined,
  className: undefined,
  error: false,
  helperText: "",
};

export default TextFormField;
