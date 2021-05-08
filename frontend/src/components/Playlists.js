import React from 'react';
import autoBind from 'auto-bind';
import {withStyles} from "@material-ui/core/styles";
import {Button} from '@material-ui/core'
import RandomPlaylists from './RandomPlaylists';

const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        fontFamily: "Montserrat",
        fontWeight: "500",
        padding: "25px",
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

                    <Button variant="contained" onClick={this.navigateTo.bind(this)} disabled={!(this.state.selectedOption != null)} className={classes.primaryButton}>
                        See Results
                    </Button>
                </form>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Playlists);
