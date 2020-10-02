import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TableUsers from "./TableUsers";
import TableSongs from "./TableSongs";
import AppBar from "./AppBar";
import TitleUsers from "./TitleUsers";
import TitleSongs from "./TitleSongs";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppBar />
    <TitleUsers />
    <TableUsers />
    <TitleSongs />
    <TableSongs />
  </React.StrictMode>,
  document.getElementById("root")
);
