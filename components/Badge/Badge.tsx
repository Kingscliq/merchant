import React from 'react';
import { Badge as MUIBadge } from '@mui/material';
import type { BadgeProps } from '@mui/material';

interface Props extends BadgeProps {}

export const Badge = ({ children, ...otherProps }: Props) => {
  return <MUIBadge {...otherProps}>{children}</MUIBadge>;
};
