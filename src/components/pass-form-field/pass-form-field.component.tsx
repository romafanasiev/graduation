/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { useField, useFormikContext } from "formik";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

interface PassFormFieldType {
  name: string;
  id?: string;
  placeholder?: string;
  className?: string;
  error?: boolean;
}

type PassInitialValues = {
  password: string;
  showPassword: boolean;
};

const PassFormField: React.FC<PassFormFieldType> = function PassFormField({
  name,
  id,
  placeholder,
  className,
  ...otherProps
}) {
  const [field, meta] = useField(name);
  const [values, setValues] = React.useState<PassInitialValues>({
    password: "",
    showPassword: false,
  });
  const { setFieldValue } = useFormikContext();

  const handleFormikChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const configPassField = {
    ...field,
    fullWidth: true,
    ...otherProps,
    placeholder,
    id,
    className,
    onChange: handleFormikChange,
  };

  const configFormHelperText = {
    id,
    error: false,
  };

  if (meta && meta.touched && meta.error) {
    configFormHelperText.error = true;
    configPassField.error = true;
  }

  return (
    <FormControl fullWidth>
      <OutlinedInput
        {...configPassField}
        type={values.showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              color="icons"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {!!configFormHelperText.error && (
        <FormHelperText {...configFormHelperText}>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
};

PassFormField.defaultProps = {
  id: "password",
  placeholder: "Password",
  className: undefined,
  error: false,
};

export default PassFormField;
