import React from 'react';
import autoBind from 'auto-bind';
import {withStyles} from "@material-ui/core/styles";
import {Button} from '@material-ui/core'
import RandomPlaylists from './RandomPlaylists';
import ReactCardFlip from 'react-card-flip'
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';



const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        fontFamily: "Montserrat",
        fontWeight: "500",
        padding: "25px",
    },

    card: {
        width: "400px",
        height: "400px",
        backgroundColor: "yellow"
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

    textBody: {
        alignSelf: "center",
        width: "65%"
    },
    title: {
        fontSize: "32px",
        fontFamily: "Didot"
    }
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
            selectedOption: null,
            isFlipped: [false, false, false]
        }

        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this)

        autoBind(this);
    }

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    handleClick(e) {
        e.preventDefault();
        console.log(e.target.id)
        console.log(parseInt(e.target.id))
        var oldState = this.state.isFlipped
        const index = parseInt(e.target.id)
        console.log(oldState, "before the set")
        oldState[index] = !oldState[index]
        console.log(oldState)
        this.setState({ isFlipped: oldState });
    }

    formSubmit(event) {
        event.preventDefault();
        if (this.state.selectedOption.includes("user")) {
            this.setState({
                isSubmitted: true
            })
        } else {
            console.log("error submitting")
        }
    }

    navigateTo() {
        this.props.history.push({
            pathname: "/compare",
            state: {user: this.state.selectedOption}
        });
    }


    render() {
        const {classes, theme} = this.props;
        return (
            <div className={classes.root}>
                <Box>
                <Grid container direction="row" justify="space-evenly" alignItems="flex-start" my="6%">
                <ReactCardFlip isFlipped={this.state.isFlipped[0]}>
                    <div className={classes.card} onMouseOver={this.handleClick} id="0">
                    <p className={classes.title}> Background </p>

                    </div>

                    <div className={classes.card} onMouseOut={this.handleClick} id="0">
                    <p>
                    When watching any video on YouTube, there is an Up Next section on the right of the screen with
                    videos YouTube curates and recommends for a user to watch next. YouTube heavily personalizes
                    recommended videos
                    for users with different watch histories. For example with regards to political affiliation, users
                    with
                    left wing political content in their watch histories receive recommendations from left wing
                    channels, and vice versa.
                    <br/><br/>

                    The playlists presented below here are a subset of the watch histories from 6 YouTube accounts that
                    have
                    been specifically curated to have view histories with content from different political affiliations:
                    2
                    left and 2 right leaning accounts along with 2 control accounts with more varied mostly
                    non-political
                    content.
                    </p>

                    </div>
                </ReactCardFlip>

                <ReactCardFlip isFlipped={this.state.isFlipped[1]}>
                    <div className={classes.card} onMouseOver={this.handleClick} id="1">
                    <p className={classes.title}> Context </p>

                    </div>

                    <div className={classes.card} onMouseOut={this.handleClick} id="1">
                    <p>
                    By choosing a playlist that most resembles your own watch history, you can use this site as a
                    starting
                    point to understand what your own filter bubble may look like when compared to other accounts with
                    much
                    different interests and preferences.
                    </p>

                    </div>
                </ReactCardFlip>

                <ReactCardFlip isFlipped={this.state.isFlipped[2]}>
                    <div className={classes.card} onMouseOver={this.handleClick} id="2">
                    <p className={classes.title}> Main Task </p>

                    </div>

                    <div className={classes.card} onMouseOut={this.handleClick} id="2">
                    <p>To start with, we have the YouTube watch histories for 6 different users below. Scroll
                                through the videos and choose the playlist of videos which either resembles your own YouTube watch
                                history or most interests you.</p>

                    </div>
                </ReactCardFlip>

                </Grid>
                </Box>

                <br/><br/>
                <RandomPlaylists/>
                <h2 className={classes.textHeader}>Which playlist would you watch?</h2>

                <form onSubmit={this.formSubmit} className={classes.textHeader}>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="user0"
                                checked={this.state.selectedOption === "user0"}
                                onChange={this.onValueChange}
                            />
                            Playlist 1
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="user1"
                                checked={this.state.selectedOption === "user1"}
                                onChange={this.onValueChange}
                            />
                            Playlist 2
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="user2"
                                checked={this.state.selectedOption === "user2"}
                                onChange={this.onValueChange}
                            />
                            Playlist 3
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="user3"
                                checked={this.state.selectedOption === "user3"}
                                onChange={this.onValueChange}
                            />
                            Playlist 4
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="user4"
                                checked={this.state.selectedOption === "user4"}
                                onChange={this.onValueChange}
                            />
                            Playlist 5
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="user5"
                                checked={this.state.selectedOption === "user5"}
                                onChange={this.onValueChange}
                            />
                            Playlist 6
                        </label>
                    </div>

                    <Button variant="contained" onClick={this.navigateTo.bind(this)}
                            disabled={!(this.state.selectedOption != null)} className={classes.primaryButton}>
                        See Results
                    </Button>
                </form>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Playlists);
