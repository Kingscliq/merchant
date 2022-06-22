import React from 'react';
import { Chip as MUIChip } from '@mui/material';
import type { ChipProps } from '@mui/material';

interface Props extends ChipProps {}

export const Chip = ({ sx, ...otherProps }: Props) => {
  return <MUIChip {...otherProps} />;
};
