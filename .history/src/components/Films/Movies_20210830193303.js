import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Movie from "./Movie";
import Message from "../Common/Messages";

const Movies = () => ({ movies, text }) => (
  <Fragment>
    <p>asdasdasdasdasd</p>
    console.log("COOOOOOOOOOOOOOOOOOOOO"),
    <Message text={text} />
    <div className="root">
      <Grid container spacing={3} justify="center">
        {movies.map((movie) => {
          const {
            id,
            original_title,
            popularity,
            title,
          } = movie;
          return (
            <Movie
              key={id}
              id={id}
              original_title={original_title}
              popularity={popularity}
              title={title}
            />
          );
        })}
      </Grid>
    </div>
  </Fragment>
);

export default Movies;
