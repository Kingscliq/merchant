import React from 'react';
import TextField from '@mui/material/TextField';
import type { TextFieldProps as MUIFieldProps } from '@mui/material/TextField';

type TextFieldProps = MUIFieldProps & {};

export const Select = ({ sx, children, ...otherProps }: TextFieldProps) => {
  return (
    <TextField
      select={true}
      sx={{
        width: '100%',
        id: 'outlined-basic',
        borderColor: '#D0D5DD',
        '& .MuiInputBase-root': {
          borderColor: '#D0D5DD',
          outline: 'none',
          borderRadius: '8px',
        },
        '& .MuiInputBase-root.Mui-error': {
          borderColor: 'red',
          outline: 'none',
          borderRadius: '8px',
        },
        '& .MuiOutlinedInput-root.Mui-focused': {
          '& > fieldset': {
            borderColor: '#D0D5DD',
            outline: 'none',
          },
        },
        '& .MuiOutlinedInput-root.Mui-focused.Mui-error': {
          '& > fieldset': {
            borderColor: 'red',
            outline: 'none',
          },
        },
        '& .MuOutlinedInput-root.Mui-hover': {
          '& > fieldset': { borderColor: '#D0D5DD', outline: 'none' },
        },
        ...sx,
      }}
      {...otherProps}
    >
      {children}
    </TextField>
  );
};
