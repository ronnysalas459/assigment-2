import React from 'react'
import { AppBar, Toolbar } from "@material-ui/core";
import { ReactComponent as Logo } from "./../../assets/img/movie.svg";
import "./../../assets/css/styles.css";
const Header = () => (
    <AppBar position="sticky">
        <Toolbar>
            <div className = "logo-container">
            <Logo/>
            &nbsp;&nbsp;
            <h1>Movies Films RS</h1>
            </div>
        </Toolbar>

    </AppBar>

);

export default Header
