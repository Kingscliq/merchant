import React from 'react';
import Typography from '@mui/material/Typography';
import type { TypographyProps as MUITypographyProps } from '@mui/material';
interface IParagraph extends MUITypographyProps {
  children: React.ReactNode | string;
  component?: React.ElementType;
  onClick?:
    | ((event: React.MouseEvent<Element, MouseEvent>) => void)
    | undefined;
}

export default function Index({ children, sx, ...otherProps }: IParagraph) {
  return (
    <Typography
      paragraph={true}
      color="#667085"
      sx={{
        fontSize: '14px',
        fontWeight: '400',
        mb: '0px',
        size: { xs: 'small', lg: 'medium' },
        ...sx,
      }}
      {...otherProps}
    >
      {children}
    </Typography>
  );
}
