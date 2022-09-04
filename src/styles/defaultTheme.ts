import { createTheme } from '@mui/material'
import { ptBR } from "@mui/x-data-grid";
import { ptBR as coreBgBG } from "@mui/material/locale";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(255,255,255,0.5)',
    },
    primary: {
      main: '#0181FE',
      light: 'rgb(51, 154, 254)',
      dark: 'rgb(0, 90, 177)',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#02C6FE',
      light: 'rgb(52, 209, 254)',
      dark: 'rgb(1, 138, 177)',
      contrastText: '#fffefe',
    },
    error: {
      main: '#f44336',
      light: '#E57373',
      dark: '#d32f2f',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    info: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
      contrastText: '#fff',
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    divider: 'rgba(123,121,121,0.12)',
  },
},
ptBR,
coreBgBG
)

export default lightTheme