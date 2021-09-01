import React from 'react'
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import back from "./../../assets/img/back.png";


const ButtonPrimary = ({ to}) => (
    <Link className="buttonPrimary" to={to}>
        <Button variant="contained" color="secondary">
            <img alt={"back"} src={back} />
            { "Go back"}
        </Button>


    </Link>
);


export default ButtonPrimary
