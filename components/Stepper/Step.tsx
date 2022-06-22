import React from 'react';
import type { StepProps as MUIStepProps } from '@mui/material/Step';
import Step from '@mui/material/Step';

type StepProps = MUIStepProps;
export default function Index({ children, sx, ...otherProps }: StepProps) {
  return (
    <Step
      sx={{
        ...sx,
      }}
      {...otherProps}
    >
      {children}
    </Step>
  );
}
