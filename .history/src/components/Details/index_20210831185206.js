import React, { useContext } from "react";
import { DetailsContext } from "../../contexts/DetailsContext";
import ProgressBar from "./../Common/ProgressBar";
import Message from "./../Common/Message";
import ButtonPrimary from "./../Common/ButtonPrimary";
import Detail from "./Detail";

const Details = () => {
  const { doneFetchMovie, movie } =
    useContext(DetailsContext);
  return (
    <>
      {doneFetchMovie ? (
        !Array.isArray(movie) ? (
          <Details movie={movie} />
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