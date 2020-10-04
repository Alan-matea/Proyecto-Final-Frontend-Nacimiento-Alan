import React from "react";
import { Typography, Toolbar, AppBar } from "@material-ui/core";
import LogoMatea from "../../Logo/LogoMatea.png";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

export default function DenseAppBar() {
  const classes = useStyles();
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
