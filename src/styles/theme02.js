import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    // Primaryカラーを設定
    primary: {
      light: '#54C527',
      main: '#ff9800',
      dark: '#b26a00',
      contrastText: '#000000',
      mainGradient: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    // Secondaryカラーを設定
    secondary: {
      light: '#33eb91',
      main: '#00e676',
      dark: '#00a152',
      contrastText: '#ffffff',