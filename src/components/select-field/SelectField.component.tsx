import React, { FC } from 'react';
import { TextField, MenuItem } from '@mui/material';
import { useField, useFormikContext } from 'formik';

type SelectFieldType = {
  name: string;
  id?: string;
  error?: boolean;
  helperText?: string;
  options: string[];
};

export const SelectField: FC<SelectFieldType> = ({
  name,
  id,
  options,
  ...otherProps
}) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    id,
    ...otherProps,
    select: true,
    fullWidth: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect} placeholder="Select value">
      {options.map((item) => {
        return (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

SelectField.defaultProps = {
  id: undefined,
  error: false,
  helperText: '',
};
