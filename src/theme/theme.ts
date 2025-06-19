import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#001C55",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#0E6BA8",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Rubik, Arial, sans-serif",
  },
});

export default theme;
