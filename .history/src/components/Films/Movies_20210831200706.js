import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';
import Movie from "./Movie";
import Message from "../Common/Messages";

const Movies = ({ movies, text }) => (
  <Fragment>
    <Message text={text} />
    <div className="root">
      <Grid container spacing={3} justify="center">
        <Link>
        {movies.map((movie) => {
          const {
            id,
            original_title,
            popularity,
            title,
            poster_path,
          } = movie;
          return (
            <Movie
              key={id}
              id={id}
              original_title={original_title}
              popularity={popularity}
              title={title}
              poster_path = {poster_path}
            />
          );
        })}
          </Link>
      </Grid>
    </div>
  </Fragment>
);

export default Movies;
