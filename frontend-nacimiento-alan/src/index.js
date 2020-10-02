import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import TableUsers from "./TableUsers";
import TableSongs from "./TableSongs";

ReactDOM.render(
  <React.StrictMode>
    <TableSongs />
    <TableUsers />
  </React.StrictMode>,
  document.getElementById("root")
);
