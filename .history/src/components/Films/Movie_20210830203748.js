import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";

const Movie = ({ id, original_title, popularity, title, poster_path }) => (
  <Grid item xs={12} sm={8} md={2}>
    <Card className="project">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={poster_path}
      />

    </Card>
  </Grid>
);

export default Movie;
