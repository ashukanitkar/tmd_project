import React from 'react';
import Carousel from 'react-material-ui-carousel';
import autoBind from 'auto-bind';
import jsonData from '../watch_histories.json'
import {withStyles} from "@material-ui/core/styles";
import {Paper, Button, Typography} from '@material-ui/core'
import RandomPlaylists from './RandomPlaylists';

const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        fontFamily: "Montserrat",
        fontWeight: "500",
        padding: "25px",
    },

    SecondExample: {
        width: "50%",
        margin: "auto"
    },

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

    playlistContainer: {
        display: "flex",
        flexDirection: "column",
    },

    textHeader: {
        alignSelf: "center"
    },
});

class Playlists extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: false,
            animation: "slide",
            indicators: true,
            timeout: 500,
            navButtonsAlwaysVisible: true,
            navButtonsAlwaysInvisible: false,
            selectedOption: null
        }

        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);

        autoBind(this);
    }

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    formSubmit(event) {
        event.preventDefault();
        if (this.state.selectedOption === "playlist1" || this.state.selectedOption === "playlist2") {
            this.setState({
                isSubmitted: true
            })
        } else {
            console.log("error submitting")
        }
    }

    navigateTo() {
        this.props.history.push("/compare");
    }


    render() {
        const {classes, theme} = this.props;
        return (
            <div className={classes.root}>
                <RandomPlaylists/>
                <h2 className={classes.textHeader}>Which playlist would you watch?</h2>

                <form onSubmit={this.formSubmit} className={classes.textHeader}>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="playlist1"
                                checked={this.state.selectedOption === "playlist1"}
                                onChange={this.onValueChange}
                            />
                            Playlist 1
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="playlist2"
                                checked={this.state.selectedOption === "playlist2"}
                                onChange={this.onValueChange}
                            />
                            Playlist 2
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="playlist3"
                                checked={this.state.selectedOption === "playlist3"}
                                onChange={this.onValueChange}
                            />
                            Playlist 3
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="playlist4"
                                checked={this.state.selectedOption === "playlist4"}
                                onChange={this.onValueChange}
                            />
                            Playlist 4
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="playlist5"
                                checked={this.state.selectedOption === "playlist5"}
                                onChange={this.onValueChange}
                            />
                            Playlist 5
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="playlist6"
                                checked={this.state.selectedOption === "playlist6"}
                                onChange={this.onValueChange}
                            />
                            Playlist 6
                        </label>
                    </div>

                    <Button variant="contained" onClick={this.navigateTo.bind(this)} className={classes.primaryButton}>
                        See Results
                    </Button>
                </form>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Playlists);
