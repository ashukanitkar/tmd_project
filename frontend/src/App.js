import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Findings from "./components/Findings";
import Comparison from "./components/Comparison";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core/styles";
import Playlists from "./components/Playlists";

const styles = theme => ({
    navBar: {
        background: "#131019",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: "100px",
    },

    navItems: {
        fontWeight: "700",
        color: "white",
        fontSize: "28px",
        fontFamily: "Didot",
    }
});


class App extends React.Component {
    render() {
        const { classes, theme } = this.props;
        return (
            <Router>
                <AppBar position="sticky" className={classes.navBar}>
                    <Toolbar>
                        <Typography className={classes.navItems}>
                            YouTube Filter Bubbles - FIX ME
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/playlists" component={Playlists}/>
                    <Route path="/compare" render={(props) => <Comparison {... props}/>}/>
                    <Route path="/findings" component={Findings}/>
                </Switch>
            </Router>
        )
    }
}

export default withStyles(styles, { withTheme: true })(App);

