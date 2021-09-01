import React from "react";
import { AppBar } from "@material-ui/core";
import SearchMovies from "./../../components/Films/SearchMovies";
import { MoviesContext } from "./../../contexts/MoviesContext";
import { ReactComponent as Logo } from "./../../assets/img/movie.svg";
import "./../../assets/css/styles.css";
const Header = () => {
  const { validateQuery } = useContext(MoviesContext);
  <AppBar position="sticky">
    <div className="header-container">
      <SearchMovies />
      <Logo className="logo-container" />
      &nbsp;&nbsp;
      <h1>Movies Films RS</h1>
    </div>
  </AppBar>
};

export default Header;
