import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import track from "./../../assets/img/track.png";
import album from "./../../assets/img/album.png";
import ButtonPrimary from "../Common/ButtonPrimary";

const Movie = ({ id, original_title, popularity, title }) => (
  <Grid item xs={12} sm={6}>
    <Paper className="defaultPaper">
      <h3>{title}</h3>
      <ul>
        <li>
          <img src={track} alt="track" />
          <strong>Track:</strong>
          <span>{original_title} </span>
        </li>
        <li>
          <img src={album} alt="album" />
          <strong>Album:</strong>
          <span>{popularity} </span>
        </li>
        <li>
                    <ButtonPrimary type="lyrics" to={`/movie/${id}`}/>
        </li>
      </ul>
    </Paper>
  </Grid>
);

export default Movie;
