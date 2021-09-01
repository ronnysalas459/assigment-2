import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { ReactComponent as Logo } from "./../../assets/img/movie.svg";
import "./../../assets/css/styles.css";
const Header = () => (
      <div className="logo-container">
  <AppBar position="sticky">
    <Toolbar>
        <Logo />
        <h1>Movies Films RS</h1>
    </Toolbar>
  </AppBar>
      </div>
);

export default Header;
