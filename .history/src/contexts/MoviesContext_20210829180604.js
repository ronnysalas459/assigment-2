import React, { createContext, useState, useEffect } from 'react';
import { popularGet, movieSearch } from "./../constants"

export const MoviesContext = createContext();

const MoviesContextProvider = ({ }) => {

    const [doneFetch, setDoneFetch] = useState();
    const [currentQuery, setCurrentQuery] = useState("");
    const [text, setText] = useState("Top Movies");
    const [movies, setMovies] = useState([]);

    useEffect(() => {

    }, []);

    const getPopularMovies = () => {

    }


};

export default MoviesContextProvider;