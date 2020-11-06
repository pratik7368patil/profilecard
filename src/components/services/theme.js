// not working from file
import { createMuiTheme } from "@material-ui/core/styles";

const fontStyling = {
  subtitle1: {
    fontWeight: 550,
    fontSize: "18px",
  },
  subtitle2: {
    fontWeight: 550,
    fontSize: "14px",
  },
  body1: {
    fontSize: "13px",
  },
  body2: {
    fontSize: "12px",
  },
};

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#001521",
    },
    secondary: {
      main: "#2b2b20",
    },
    background: { paper: "#FFFFFF" },
  },
  typography: fontStyling,
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#A3ABB2",
    },
    background: { paper: "#001521" },
  },
  typography: fontStyling,
});

export { lightTheme, darkTheme };
