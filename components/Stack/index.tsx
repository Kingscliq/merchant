import React from 'react';
import Stack from '@mui/material/Stack';
import type { StackProps } from '@mui/material/Stack';

interface IFlexProps extends StackProps {}

export default function Index({ children, sx, ...otherProps }: IFlexProps) {
  return (
    <Stack
      gap="2"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      flexWrap="wrap"
      sx={{ width: '100%', ...sx }}
      {...otherProps}
    >
      {children}
    </Stack>
  );
}
