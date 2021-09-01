import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonPrimary from "../Common/ButtonPrimary";

const Movie = ({ id, original_title, popularity, title, poster_path }) => (
  <Grid item xs={12} sm={6}>
    <div className="project">
    <div class="image-wrap">
         <img src={poster_path} />
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
        <li>
                    <ButtonPrimary type="movies" to={`/movie/${id}`}/>
        </li>
      </ul>
    </div>
  </Grid>
);

export default Movie;
