import React from "react";
import "./App.scss";
import UserInfo from "./components/UserInfo";
import ProgressDetails from "./components/ProgressDetails";
import LastActivity from "./components/LastActivity";
import Graph from "./components/Graph";
import GraphDropdown from "./components/GraphDropdown";
import { Paper, Divider, Typography, Switch } from "@material-ui/core";
import {
  graphData,
  horizantalBarData,
  userData,
  menuData,
} from "./components/data/data.js";
import {
  ThemeProvider,
  createMuiTheme,
  useTheme,
} from "@material-ui/core/styles";

function App() {
  const [isDark, setIsDark] = React.useState(false);

  const defaultTheme = useTheme();

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
    shadows: [...defaultTheme.shadows, "0px -1px 10px rgba(0, 21, 33, 0.1)"],
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
    shadows: [...defaultTheme.shadows, "0px -1px 10px rgba(0, 21, 33, 0.1)"],
    typography: fontStyling,
  });

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <div className="dark-mode-switch">
        <Switch checked={isDark} onChange={() => setIsDark(!isDark)} />
        <Typography>Dark Mode {isDark ? "On" : "Off"}</Typography>
      </div>
      <Paper className="profile-main" elevation={25}>
        <UserInfo data={userData} />
        <Divider />
        <ProgressDetails horizantalBarData={horizantalBarData} />
        <Divider />
        <LastActivity />
        <Divider />
        <GraphDropdown menuData={menuData} />
        <Graph iniData={graphData} />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
