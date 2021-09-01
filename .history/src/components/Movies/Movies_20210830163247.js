import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Movie from "./Movie";
import Messages from "../Common/Messages";

const Tracks = () => ({ tracks, text }) => (
  <Fragment>
    <Messages text={text} />
    <div className="root">
      <Grid container spacing={3} justify="center">
        {tracks.map((track) => {
          const {
            commontrack_id,
            track_name,
            album_name,
            artist_name,
          } = track.track;
          return (
            <Movie
              key={commontrack_id}
              commontrack_id={commontrack_id}
              track_name={track_name}
              album_name={album_name}
              artist_name={artist_name}
            />
          );
        })}
      </Grid>
    </div>
  </Fragment>
);

export default Tracks;
