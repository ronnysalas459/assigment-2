import React from "react";
import Paper from "@material-ui/core/Paper";

const Details = ({ movie }) => {
    const { original_title, popularity, title, poster_path } = movie;
    // const { music_genre_list } = primary_genres;
    // const { music_genre_name } = music_genre_list.length && music_genre_list[0].music_genre;
    //const release_date = typeof updated_time === "string" ? new Date(updated_time).toDateString() : "Invalid Date";
    //const lyricsParagraphs = lyrics.split("\n");
    //lyricsParagraphs.splice(lyricsParagraphs.length -3, 3);

    return (
        <Paper className="paper defaultPaper">
            <strong className="title">{`${original_title} - ${title}`}</strong><br></br>
            {/* {
              lyricsParagraphs.map((lyricsParagraph, index) =>
                lyricsParagraph === "" || lyricsParagraph === "..." ?
                    <br key={index} />
                :
                    <p key={index}>{lyricsParagraph}</p>)
            } */}
            <ul>
                <li>
                    <strong>Album ID: </strong>
                    <span>{popularity}</span>
                </li>
                {/* {
                    music_genre_name &&
                    <li>
                        <strong>Song Genre: </strong>
                        <span>{ music_genre_name }</span>
                    </li>
                }
                <li>
                    <strong>Explicit Words: </strong>
                    <span>{explicit === 0 ? "Yes" : "No"}</span>
                </li>
                {
                    release_date !== "Invalid Date" &&
                    <li>
                        <strong>Release Date: </strong>
                        <span>{ release_date }</span>
                    </li>
                } */}
            </ul>
        </Paper>
    );
};

export default Details;