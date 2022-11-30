import { createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(71, 130, 218)',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: 'rgba(255,255,255,0.5)',
    },
    background: {
      default: 'rgb(27, 38, 53)',
      paper: 'rgb(35, 48, 68)',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.95)',
      secondary: 'rgba(255,255,255,0.5)',
    },
    header: {
      main: 'rgb(27, 38, 53)',
      paper: 'rgb(27, 38, 53)',
      primary: 'rgb(27, 38, 53)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: 'none',
          borderBottom: '1px solid rgb(81, 81, 81)',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgb(81, 81, 81)',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(27, 38, 53)',
          input: {
            backgroundColor: 'rgb(27, 38, 53)',
            '&:hover': {
              backgroundColor: 'rgb(18, 26, 36)',
            },
            color: 'rgb(224, 224, 224)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        backgroundColor: 'rgb(35, 48, 68)',
        input: {
          backgroundColor: 'rgb(35, 48, 68)',
          '&:hover': {
            backgroundColor: 'rgb(35, 48, 68)',
          },
        },
      },
    },
  },
});

const defaultTheme = createTheme({
  palette: {
    header: {
      main: 'rgb(255, 255, 255)',
    },
    background: {
      default: 'rgb(247, 249, 252)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
    secondary: {
      main: 'rgba(0, 0, 0, 0.6)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: 'none',
          borderBottom: '1px solid rgb(224, 224, 224)',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgb(224, 224, 224)',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(255, 255, 255)',
          input: {
            backgroundColor: 'rgb(255, 255, 255)',
            '&:hover': {
              backgroundColor: 'rgb(242, 242, 242)',
            },
            color: 'rgb(158 158 158)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        backgroundColor: 'rgb(255, 255, 255)',
        input: {
          backgroundColor: 'rgb(255, 255, 255)',
          '&:hover': {
            backgroundColor: 'rgb(255, 255, 255)',
          },
        },
      },
    },
  },
});

export { darkTheme, defaultTheme };
