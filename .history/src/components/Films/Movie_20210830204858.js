import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";

const Movie = ({ id, original_title, popularity, title, poster_path }) => (
  <Grid item xs={12} sm={8} md={2}>
    <Card className="project">
      <CardHeader
        title= {title}
      />
      <CardMedia
        className="img-wrap"
        image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
          <strong>Movie:</strong>
          <span>{original_title} </span>
          <strong>Popularity:</strong>
          <span>{popularity} </span>
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default Movie;
