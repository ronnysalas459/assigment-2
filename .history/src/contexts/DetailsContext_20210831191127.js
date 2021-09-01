import React, { createContext, useState, useEffect } from "react";
import { moviesGet } from "./../constants";

export const DetailsContext = createContext();

const DetailsContextProvider = ({ children }) => {
    const movie_id = window.location.pathname.split("/")[3];
    console.log(window.location.pathname.split("/")[3]);

  const [doneFetchMovie, setDoneFetchMovie] = useState(false);
  //const [doneFetchDetails, setDoneFetchDetails] = useState(false);
  const [movie, setMovie] = useState([]);
  //const [details, setDetails] = useState([]);

  useEffect(() => getMovie(movie_id), [movie_id]);

  //useEffect(() => getDetails(commontrack_id), [commontrack_id]);

  const getMovie = (movie_id) => {
    fetch(moviesGet(movie_id))
      .then((res) => res.json())
      .then((data) => {
        const { body } = data.message;
        setDoneFetchMovie(true);
        !Array.isArray(body) && setMovie(body);
      })
      .catch((err) => console.log(err));
  };

//   const getDetails = (commontrack_id) => {
//     fetch(trackLyricsGet(commontrack_id))
//       .then((res) => res.json())
//       .then((data) => {
//         const { body } = data.message;
//         setDoneFetchLyrics(true);
//         !Array.isArray(body) && setLyrics(body.lyrics.lyrics_body);
//       })
//       .catch((err) => console.log(err));
//   };

  return (
    <DetailsContext.Provider
      value={{ doneFetchMovie, movie}}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsContextProvider;