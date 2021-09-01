import React, { Fragment, useContext } from "react";
import { MoviesContext } from "./../../contexts/MoviesContext";
import SearchMovies from "./SearchMovies";
import Tracks from "./Tracks";
import ProgressBar from "./../Common/ProgressBar";
import  Messages  from "./../Common/Messages";

const Songs = () => {
  const { validateQTrack, doneFetch, tracks, text } = useContext(MoviesContext);

  return (
    <Fragment>
      <SearchTracks validateQTrack={validateQTrack} />
      {doneFetch ? (
        tracks.length ? (
          <Tracks text={text} tracks={tracks} />
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
