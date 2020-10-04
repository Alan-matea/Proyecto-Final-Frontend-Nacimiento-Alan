import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#009688",
    },

    error: {
      main: "#C4C4C4",
    },
  },
  typography: {
    h5: {
      fontSize: "30px",
      fontFamily: "Righteous",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
