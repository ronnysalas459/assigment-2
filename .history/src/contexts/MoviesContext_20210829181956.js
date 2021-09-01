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
        fetch(popularGet())
            .then(res => res.json())
            .then(data => {
                setDoneFetch(true);
                setMovies(data.results);
            })
            .catch(err => console.log(err));
    };

    const getMovies = query => {
        fetch(movieSearch(query))
            .then(res => res.json())
            .then(data => {
                const {results} data;
            })
    };


};

export default MoviesContextProvider;