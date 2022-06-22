import React from 'react';

import { ThemeProvider as MUIThemeProvider } from '@mui/material';

import { theme } from '@themes/theme';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;
