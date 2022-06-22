import type { ColorPalette } from '../themes/ColorPalette';

declare module '@mui/material/styles/createPalette' {
  export interface Palette {
    crowdforce: ColorPalette;
  }
  export interface PaletteOptions {
    crowdforce: ColorPalette;
  }
}
