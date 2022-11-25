import { createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(27, 38, 53)',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: 'rgb(27, 38, 53)',
      paper: 'rgb(35, 48, 68)',
    },
  },
});

const defaultTheme = createTheme({

});

export {darkTheme,defaultTheme}
