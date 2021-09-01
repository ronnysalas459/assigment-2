import React, { Fragment, useContext } from "react";
import { MoviesContext } from "./../../contexts/MoviesContext";
import SearchMovies from "./SearchMovies";
import Movies from "./Movies";
import ProgressBar from "./../Common/ProgressBar";
import  Message  from "./../Common/Messages";

const Films = () => {
  const { validateQuery, doneFetch, movies, text } = useContext(MoviesContext);

  return (
    <Fragment>
      <SearchMovies validateQuery={validateQuery} />
      {doneFetch ? (
        movies ? (
          <Movies text={text} movies={movies} />
        ) : (
          <Message text={text} />
        )
      ) : (
        <ProgressBar />
      )}
    </Fragment>
  );
};

export default Films;
