import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#5E785F',
    },
    secondary: {
      light: '#A3A3A3',
      main: '#000',
    },
    danger: {
      main: '#EC2227',
    },
    border: { main: '#f0f0f0', dark: '#00000047' },
  },
  shape: { borderRadius: '0.6rem' },
  spacing: 1,
  typography: {
    fontSize: 12,
    fontFamily: 'Merriweathersans, sans-serif',
    // fontWeightRegular: 500,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Merriweathersans, sans-serif',
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});
