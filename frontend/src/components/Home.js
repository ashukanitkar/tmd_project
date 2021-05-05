import React from "react";
import {Button} from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
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
    },

    home: {
        display: "flex",
        flexDirection: "column",
        fontFamily: "Montserrat",
        fontWeight: "500",
        padding: "25px",
    }
});

const Home = () => {
    const history = useHistory();
    const navigateTo = () => history.push('/playlists');
    const classes = useStyles();

    return (
        <div className={classes.home}>
            <br/>
            <br/>
            welcome! we need to add some educational content here that users can read
            through before they go onto selecting playlists
            <br/>
            <br/>
            Click next to get started on selecting a playlist.

            <Button
                variant="contained"
                endIcon={<NavigateNextIcon/>}
                onClick={navigateTo}
                className={classes.primaryButton}>
                Next
            </Button>

        </div>
    );
}

export default Home

