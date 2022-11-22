import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
        text: "#eeeeee",
        main: "#212121"
    },
    secondary: {
      text: "#e0e0e0",
      main: "#424242"
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;