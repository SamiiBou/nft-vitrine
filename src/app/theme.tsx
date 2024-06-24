'use client'
import { Theme, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00bcd4',
    },
    background: {
      default: '#0d0d0d',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#00bcd4',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h2: {
      fontWeight: 700,
    },
    body1: {
      lineHeight: 1.6,
    },
  },
});

export default theme;
