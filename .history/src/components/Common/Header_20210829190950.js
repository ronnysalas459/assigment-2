import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { ReactComponent as Logo } from "./../../assets/img/movie.svg";
import "./../../assets/css/styles.css";
const Header = () => (
  <AppBar position="sticky">
      <div className="header-container">
        <Logo className = "logo-container"/>
        <h1>Movies Films RS</h1>
      </div>
  </AppBar>
);

export default Header;
