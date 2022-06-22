import { createTheme } from '@mui/material';
import type { ColorPalette } from './ColorPalette';

const fontFamily = `Poppins, sans-serif`;

const colorPalette: ColorPalette = {
  brand: {
    primary: '#0F375A',
    secondary: '#2CA1CA',
    danger: '#F04438',
    gray100: '#A7A7A7',
    gray200: '#D0D5DD',
    gray300: '#667085',
    gray400: '#101828',
    tertiary: '#FFAB00',
  },
  basic: {
    white: '#FFFFFF',
    red: '#F04438',
  },
  buttons: {
    primary: '#2CA1CA',
    secondary: '#2CA1CA',
    danger: '#F04438',
    tertiary: '#68C9A4',
    white: '#fffF',
  },
  validation: {
    success: '#FFA500',
    error: '#F04438',
    alert: '#FFA500',
    alertBkg: '#FFA500',
  },
};

export const theme = createTheme({
  spacing: (value: number | string) => value,
  shape: {
    borderRadius: 1,
  },
  typography: {
    fontFamily: fontFamily,
    h1: {
      fontFamily,
      fontSize: '2rem',
    },

    h2: {
      fontFamily,
      fontSize: '1.5rem',
    },
  },
  palette: {
    primary: {
      main: colorPalette.brand.primary,
      contrastText: '#fff',
    },
    secondary: {
      main: colorPalette.brand.secondary,
      contrastText: '#fff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
});
