import ImageCard from "./ImageCard"
import Grid from "@material-ui/core/Grid"
import Box from '@material-ui/core/Box';
import React from "react";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";

export default function Comparison(props) {
    // how to access which playlist was selected by the user:
    // props.location.state.playlist

    const history = useHistory();
    const navigateToPlaylists = () => history.push('/playlists');
    const navigateToHome = () => history.push('/');

    return (
        <div>
            <Box my="6%">
                <Grid container direction="row" justify="space-evenly" alignItems="center">
                <ImageCard/>
                <ImageCard/>
                </Grid>
            </Box>

            <Button variant="contained" onClick={navigateToPlaylists}>
                Select another playlist
            </Button>
            <Button variant="contained" onClick={navigateToHome}>
                Start over
            </Button>
        </div>
    )
}
