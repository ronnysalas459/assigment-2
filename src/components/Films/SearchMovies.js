import React from 'react';
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const SearchMovies = ({ validateQuery }) => (
    <Paper className = "paper defaultPaper">
        <TextField
            style={{ borderRadius: 50, padding: 'offset' }}
            id="query"
            label="Title"
            margin="normal"
            variant="outlined"
            onKeyPress = {(e) => validateQuery(e)}
        />
         <IconButton onClick={(e) => validateQuery(e)}>
            <SearchIcon />
        </IconButton>
    </Paper>
);

export default SearchMovies
