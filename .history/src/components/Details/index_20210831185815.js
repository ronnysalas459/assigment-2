import React, { useContext } from "react";
import { DetailsContext } from "../../contexts/DetailsContext";
import ProgressBar from "./../Common/ProgressBar";
import Message from "./../Common/Messages";
import ButtonPrimary from "./../Common/ButtonPrimary";
import Detail from "./Detail";

const Details = () => {
  const { doneFetchMovie, movie } =
        useContext(DetailsContext);
        console.log("COÑÓOOOOO" + movie);
  return (
    <>
      {doneFetchMovie ? (
        !Array.isArray(movie) ? (
          <Detail movie={movie} />
        ) : (
          <Message text="No Results" />
        )
      ) : (
        <ProgressBar />
      )}
      <ButtonPrimary type="back" to="/" />
    </>
  );
};

export default Details;