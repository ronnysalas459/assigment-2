import React from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ButtonPrimary from "./../Common/ButtonPrimary";
const Detail = ({ movie }) => {
    const { original_title, popularity, title, poster_path } = movie;
    // const { music_genre_list } = primary_genres;
    // const { music_genre_name } = music_genre_list.length && music_genre_list[0].music_genre;
    //const release_date = typeof updated_time === "string" ? new Date(updated_time).toDateString() : "Invalid Date";
    //const lyricsParagraphs = lyrics.split("\n");
    //lyricsParagraphs.splice(lyricsParagraphs.length -3, 3);

    return (
        <Paper className="paper defaultPaper">
            <strong className="title">{`${original_title} - ${title}`}</strong><br></br>
            <Card className="project">
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
      <li>
          <ButtonPrimary type="movies" to={`/movie/${id}`} />
        </li>
    </Card>
        </Paper>
    );
};

export default Detail;