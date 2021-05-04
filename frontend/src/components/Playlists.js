import React from "react";
import {Redirect, withRouter} from "react-router-dom";
import Button from "@material-ui/core/Button";

// TODO - change to actual watch history file later, using small file for now
import jsonData from '../watch_histories_small.json'
import {Typography} from "@material-ui/core";

class Playlists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "React",
            selectedOption: null
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
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
        const renderGifs = () => {
            if (this.state.isSubmitted) {
                return (
                    <div>
                        <Redirect
                            to={{
                                pathname: "compare",
                                state: {playlist: this.state.selectedOption}
                            }}
                        />
                    </div>
                )
            } else {
                const loadData = () => JSON.parse(JSON.stringify(jsonData));
                let playlists = []
                Object.keys(loadData().users).forEach((key) => {
                    let user = []
                    loadData().users[key].videos.forEach((video) => {
                        user.push(video);
                    });
                    playlists.push(user);
                })

                return (
                    <div className="App">
                        {playlists.map((playlist, idx) => {
                            return (
                                <div>
                                    <h2>Playlist {idx + 1}</h2>
                                    {playlist.map(video => {
                                        return (
                                            <div>
                                                <Typography>{video.title}</Typography>
                                                <iframe width="340" height="200" src={video.link}
                                                        title="YouTube video player" frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen>
                                                </iframe>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}

                        <h2>Which playlist would you watch?</h2>

                        <form onSubmit={this.formSubmit}>
                            <div className="radio">
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
                            <div className="radio">
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
                            <Button variant="contained" onClick={this.navigateTo.bind(this)}>
                                See Results
                            </Button>
                        </form>
                    </div>
                )
            }
        }
        return (renderGifs())
    }
}

export default withRouter(Playlists)
