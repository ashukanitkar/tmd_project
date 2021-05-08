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

    /**
     * Shuffles array in place.
     * @param {Array} a items An array containing the items.
     */
    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    render() {
        const {classes, theme} = this.props;
        const loadData = () => JSON.parse(JSON.stringify(jsonData));
        let playlists = []
        Object.keys(loadData().users).forEach((key) => {
            let user = []
            let videos = this.shuffle(loadData().users[key].videos)
            videos.slice(0, 7).forEach((video) => {
                user.push(video)
            });
            playlists.push(user);
        })
        return (
            <div className={classes.root}>
                {/* {playlists.map((playlist, idx) => {
                    return (
                        <div className={classes.playlistContainer}>
                            <h2 className={classes.textHeader}>Playlist {idx + 1}</h2>
                            <Carousel
                                className={classes.SecondExample}
                                autoPlay={this.state.autoPlay}
                                animation={this.state.animation}
                                indicators={this.state.indicators}
                                timeout={this.state.timeout}
                                navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                                navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}

                            >
                                {
                                    playlist.map((video => <Project item={video}/>))
                                }
                            </Carousel>

                        </div>
                    )
                })}
                 */}
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
