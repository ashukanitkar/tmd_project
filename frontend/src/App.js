import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Findings from "./components/Findings";
import Comparison from "./components/Comparison";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core/styles";
import Playlists from "./components/Playlists";
import Grid from "@material-ui/core/Grid"
import Box from '@material-ui/core/Box';


const styles = theme => ({
    navBar: {
        background: "#131019",
        height: "100px",
    },

    navItems: {
        fontWeight: "700",
        color: "#99a1a3",
        fontSize: "32px",
        fontFamily: "Didot",
    },
    subtitleItems: {
        fontWeight: "600",
        color: "#99a1a3",
        fontSize: "15px",
        fontFamily: "Montserrat",
    }
});


class App extends React.Component {
    render() {
        const {classes, theme} = this.props;
        return (
            <Router>
                <AppBar position="sticky" className={classes.navBar}>
                    <Box pt="1%">

                        <Grid container direction="row" justify="space-evenly" alignItems="flex-start" my="6%">
                            <Typography variant="h4" gutterBottom className={classes.navItems}>
                                Filter Bubbles
                            </Typography>
                        </Grid>

                        <Grid container direction="row" justify="space-evenly" alignItems="flex-start" my="6%">
                            <Typography variant="subtitle1" gutterBottom className={classes.subtitleItems}>
                                A guide to what they are, where they exist, and their impact
                            </Typography>
                        </Grid>

                    </Box>
                </AppBar>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/playlists" component={Playlists}/>
                    <Route path="/compare" render={(props) => <Comparison {...props}/>}/>
                    <Route path="/findings" component={Findings}/>
                </Switch>
            </Router>
        )
    }
}

export default withStyles(styles, {withTheme: true})(App);

