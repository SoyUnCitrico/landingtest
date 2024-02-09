// import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// import ExoRegular from '../public/fonts/static/Exo-Regular.ttf';
// import ExoRegular from '../public/';


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: '#f5f5f5',
    }
  },
  typography: {
    fontFamily: 'Exo, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Exo';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('Exo'), url(${'/fonts/static/Exo-Regular.ttf'}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }

        @font-face {
          font-family: 'Exo';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('Exo-Bold'), url(${'/fonts/static/Exo-Bold.ttf'}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }

        @font-face {
          font-family: 'Exo';
          font-style: normal;
          font-display: swap;
          font-weight: 900;
          src: local('Exo-Black'), url(${'/fonts/static/Exo-Black.ttf'}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        
      `,
    },
  },
});

export default theme;
