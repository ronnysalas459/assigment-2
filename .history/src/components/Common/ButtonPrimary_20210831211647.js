import React from 'react'
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import lyrics from "./../../assets/img/lyrics.png";
import back from "./../../assets/img/back.png";


const ButtonPrimary = ({ type, to}) => (
    <Link className="buttonPrimary" to={to}>
        <Button variant="contained" color="secondary">
            <img alt={type === "lyrics" ? "lyrics" : "back"} src={type === "lyrics" ? lyrics : back} />
            { type === "lyrics" ? "lyrics" : "Go back"}
        </Button>


    </Link>
);


export default ButtonPrimary
