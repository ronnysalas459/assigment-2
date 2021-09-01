import React from 'react'
import { AppBar, Toolbar } from "@material-ui/core";
import { ReactComponent as Logo } from "./../../assets/img/movie.svg";

const Header = () => (
    <AppBar position="sticky">
        <Toolbar>
            <Logo/>
            &nbsp;&nbsp;
            <h1>Nutritional App</h1>
        </Toolbar>

    </AppBar>

);

export default Header
