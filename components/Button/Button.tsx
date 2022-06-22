import React from 'react';
// import Button from '@mui/material/Button';
import type { LoadingButtonProps } from '@mui/lab/LoadingButton';
import LoadingButton from '@mui/lab/LoadingButton';
// import type { SxProps, Theme } from '@mui/material';

export default function Index({
  children,
  sx,
  ...otherProps
}: LoadingButtonProps) {
  return (
    <LoadingButton
      variant="contained"
      color="primary"
      fullWidth={true}
      sx={{
        color: 'white',
        width: '100%',
        py: '16.5px',
        fontWeight: '500',
        borderRadius: '8px',
        my: { xs: '24px', md: '40px' },
        '& .MuiLoadingButton-root.Mui-disabled': {
          opacity: '0.5',
          cursor: 'not-allowed',
        },
        ...sx,
      }}
      {...otherProps}
    >
      {children}
    </LoadingButton>
  );
}
