import { createTheme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      text: grey[50],
      main: grey[500],
      base: grey[900]
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


export const darkTheme = createTheme({
  palette: {
    primary: {
      "50": grey[50],
      "100": grey[100],
      "200": grey[200],
      "500": grey[500],
      "900": grey[900],
      button: grey[50],
      text: grey[900],
      base: "black"
    }

  }
})

