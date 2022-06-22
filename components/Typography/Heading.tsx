import React from 'react';
import Typography from '@mui/material/Typography';
import type { TypographyProps as MUITypographyProps } from '@mui/material';
interface HeadingProps extends MUITypographyProps {
  children: React.ReactNode | string;
  component?: React.ElementType;
}

export default function Heading({ children, sx, ...otherProps }: HeadingProps) {
  // @ts-ignore - components exist in Typography, but MUI typings don't have it

  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: '24px',
        color: '#101828',
        mb: '12px',
        fontWeight: 'bold',
        textAlign: { xs: 'center', lg: 'left' },
        ...sx,
      }}
      {...otherProps}
    >
      {children}
    </Typography>
  );
}
