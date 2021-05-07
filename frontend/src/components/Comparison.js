import ImageCard from "./ImageCard"
import Grid from "@material-ui/core/Grid"
import Box from '@material-ui/core/Box';
import React from "react";
import Button from "@material-ui/core/Button";
import Dropdown from "./Dropdown";
import {useHistory} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    primaryButton: {
        background: "#ecc787",
        fontFamily: "Montserrat",
        fontWeight: "600",
        alignSelf: "center",
        marginTop: "30px",
        '&:hover': {
            backgroundColor: "#E9BD71",
        },
        marginRight: "10px",
    },

    container: {
        display: "flex",
        flexDirection: "column",
    },

    textHeader: {
        alignSelf: "center"
    },
});


export default function Comparison(props) {
    // how to access which playlist was selected by the user:
    // props.location.state.playlist

    const history = useHistory();
    const navigateToPlaylists = () => history.push('/playlists');
    const navigateToHome = () => history.push('/');
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Box my="6%">
            <Grid
  container
  direction="row"
  justify="space-evenly"
  alignItems="flex-start"
>
                <Dropdown/>
                <Dropdown/>
                <Dropdown/>   
                </Grid> 
                <Grid
  container
  direction="row"
  justify="space-evenly"
  alignItems="flex-start"
>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>   
                </Grid> 
                      
            </Box>
            <Button variant="contained" onClick={navigateToPlaylists} className={classes.primaryButton}>
                Select another playlist
            </Button>
            <Button variant="contained" onClick={navigateToHome} className={classes.primaryButton}>
                Start over
            </Button>
        </div>
    )
}