import React, { useEffect, FC } from 'react';
import { InputLabel, TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { ReactComponent as calendarIcon } from '../../assets/icons/calendar.svg';

type Props = {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => void;
};

export const DateField: FC<Props> = ({ setFieldValue }) => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  useEffect(() => {
    setFieldValue('date', value?.format('MMM DD, YYYY'));
  }, []);

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    setFieldValue('date', value?.format('MMM DD, YYYY'));
  };

  return (
    <>
      <InputLabel htmlFor="date" sx={{ margin: '0 0 6px' }}>
        Date
      </InputLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          disableMaskedInput
          components={{
            OpenPickerIcon: calendarIcon,
          }}
          inputFormat="MMM DD, YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" fullWidth />
          )}
        />
      </LocalizationProvider>
    </>
  );
};
