// theme.js
import { createTheme } from '@sanity/ui';

export const theme = createTheme({
  name: 'biovaultTheme',
  title: 'BioVault Studio Theme',
  base: 'light',

  color: {
    default: {
      primary: '#017f7c',
      secondary: '#05b9b5',
      focusRing: '#017f7c',
      link: '#05b9b5',
    },
    transparent: {
      primary: '#017f7c',
      secondary: '#05b9b5',
    },
    solid: {
      primary: {
        enabled: '#017f7c',
        pressed: '#016c6a',
        disabled: '#a0d1d0',
      },
      secondary: {
        enabled: '#05b9b5',
        pressed: '#049a98',
        disabled: '#c7e6e5',
      },
    },
  },

  font: {
    body: {
      family: "'Poppins', system-ui, sans-serif",
      weight: 400,
    },
    heading: {
      family: "'Poppins', system-ui, sans-serif",
      weight: 700,
    },
    code: {
      family: 'monospace',
      weight: 400,
    },
  },
});
