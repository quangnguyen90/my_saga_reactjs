import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#D32F2F',
    secondary: '#00BCD4',
    error: '#E64A19',
    textColor: '#FFFFFF',
    defaultTextColor: '#000000',
    hover: 'rgba(144,144,144, 0.23)',
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#7C4DFF',
    textColor: '#FFFFFF',
    borderColor: '#CCCCCC',
  },
});

export default theme;
