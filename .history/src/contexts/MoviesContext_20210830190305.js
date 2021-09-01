import React, { createContext, useState, useEffect } from "react";
import { popularGet, movieSearch } from "./../constants";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const [doneFetch, setDoneFetch] = useState();
  const [currentQuery, setCurrentQuery] = useState("");
  const [text, setText] = useState("Top Movies");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = () => {
    fetch(popularGet())
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        setDoneFetch(true);
        setMovies(results.results);
      })
      .catch((err) => console.log(err));
  };

  const getMovies = (query) => {
    fetch(movieSearch(query))
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        setDoneFetch(true);
        setText(results.length ? "Results" : "No Results");
        console.log(results);
        setMovies(results.results);

      })
      .catch((err) => console.log(err));
  };

  const validateQuery = (
    e,
    query = document.querySelector("#query").value.toLowerCase().trim()
  ) => {
    if (e.type === "keypress" && e.key !== "Enter") return;
    const words = query.match(/\w+/g);
    query = words && words.join(" ");
    if (query && query !== currentQuery) {
      setCurrentQuery(query);
      setDoneFetch(false);
      getMovies(query);
    }
  };
  return (
    <MoviesContext.Provider value={{ doneFetch, text, movies, validateQuery }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
