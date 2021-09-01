import React from "react";
import Grid from "@material-ui/core/Grid";
import ButtonPrimary from "../Common/ButtonPrimary";

const Movie = ({ id, original_title, popularity, title, poster_path }) => (
  <Grid item xs={12} sm={8} md={3}>

    <div className="image-wrap">
        <img src={`https://image.tmdb.org/t/p/w500/${ poster_path }`} alt={poster_path} />
    </div>
      <h3>{title}</h3>
      <ul>
        <li>
          <strong>Movie:</strong>
          <span>{original_title} </span>
        </li>
        <li>
          <strong>Popularity:</strong>
          <span>{popularity} </span>
        </li>
      </ul>

  </Grid>
);

export default Movie;
