import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4854D4',
      contrastText: 'white',
    },
    common: {
      white: 'white',
    },
    secondary: {
      main: '#489ED4',
    },

  },
});
const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
