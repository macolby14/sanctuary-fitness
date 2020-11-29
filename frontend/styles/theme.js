import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import { cardo, cardoBold } from './fonts.js';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4854D4',
      contrastText: '#ffffff',
    },
    common: {
      white: '#ffffff',
    },
    secondary: {
      main: '#489ED4',
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Cardo',
      'serif',
      'sans-serif',
    ].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [cardo, cardoBold],
      },
    },
  },
});
const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
