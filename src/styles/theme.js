import { createMuiTheme } from '@material-ui/core/styles';

// Custom Our Main Theme in here
export default createMuiTheme({
  palette: {
    primary: {
      main: '#3C3E45',
    },
  },
  div: {
    flexContainerHorizontal: {
      display: 'flex',
      flexDirection: 'row',
    },
    flexContainerVertical: {
      display: 'flex',
      flexDirection: 'column',
    },
  }
});