import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LogoMatea from "../../Logo/LogoMatea.png";
import "./styles.css";

export default function DenseAppBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="regular" className="Items-position">
          <img src={LogoMatea} alt="LogoMatea" className="LogoMatea" />
          <Typography variant="h5">Api-Mateify</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
