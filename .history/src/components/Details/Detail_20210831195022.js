import React from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const Detail = ({ movie }) => {
  const { original_title, overview, title, poster_path } = movie;
  // const { music_genre_list } = primary_genres;
  // const { music_genre_name } = music_genre_list.length && music_genre_list[0].music_genre;
  //const release_date = typeof updated_time === "string" ? new Date(updated_time).toDateString() : "Invalid Date";
  //const lyricsParagraphs = lyrics.split("\n");
  //lyricsParagraphs.splice(lyricsParagraphs.length -3, 3);

  return (
    <Paper>
      <Card className="movie-details">
        <CardActionArea>
          <br />
          <CardMedia
            className="movie-details-img"
            image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {original_title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  );
};

export default Detail;
