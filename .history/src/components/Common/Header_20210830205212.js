import React from "react";
import { AppBar } from "@material-ui/core";
import SearchMovies from "./SearchMovies";
import { ReactComponent as Logo } from "./../../assets/img/movie.svg";
import "./../../assets/css/styles.css";
const Header = () => (
  <AppBar position="sticky">
      <SearchMovies />
      <div className="header-container">
            <Logo className="logo-container" />
            &nbsp;&nbsp;
        <h1>Movies Films RS</h1>
      </div>
  </AppBar>
);

export default Header;
