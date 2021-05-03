import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Playlists from "./Playlists";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    navBar: {
        background: "#a8dadc",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },

    navItems: {
        fontWeight: "700",
        color: "black",
        fontSize: "28px"

    }
})

const Home = () => {
    const classes = useStyles()

    return (
        <div>
            <AppBar position="sticky" className={classes.navBar}>
                <Toolbar>
                    <Typography className={classes.navItems}>
                        YouTube Filter Bubbles - FIX ME
                    </Typography>
                </Toolbar>
            </AppBar>
            <Playlists/>
        </div>
    );
}

export default Home