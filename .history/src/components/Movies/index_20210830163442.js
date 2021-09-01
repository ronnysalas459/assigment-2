import React, { Fragment, useContext } from "react";
import { MoviesContext } from "./../../contexts/MoviesContext";
import SearchMovies from "./SearchMovies";
import Movies from "./Movies";
import ProgressBar from "./../Common/ProgressBar";
import  Messages  from "./../Common/Messages";

const Songs = () => {
  const { validateQTrack, doneFetch, tracks, text } = useContext(MoviesContext);

  return (
    <Fragment>
      <SearchMovies validateQTrack={validateQTrack} />
      {doneFetch ? (
        tracks.length ? (
          <Movies text={text} tracks={tracks} />
        ) : (
          <Messages text={text} />
        )
      ) : (
        <ProgressBar />
      )}
    </Fragment>
  );
};

export default Songs;
