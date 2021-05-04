import React from "react";
import {Redirect, withRouter} from "react-router-dom";
import Button from "@material-ui/core/Button";

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

    // benje.roy12@gmail.com
    titles = ["https://www.youtube.com/embed/S7xdgMoFWdk", "https://www.youtube.com/embed/eiqaqrHPixw",
        "https://www.youtube.com/embed/BjzDJhZDw3M", "https://www.youtube.com/embed/C_fEIVwjrew",
        "https://www.youtube.com/embed/EQfO7p05iVU", "https://www.youtube.com/embed/v-43wPyblUA"]

    // aleeha.hashim11@gmail.com
    titles2 = ["https://www.youtube.com/embed/ZwULdrDijbI", "https://www.youtube.com/embed/Yn2tHcZEnF0",
        "https://www.youtube.com/embed/J6Yy9eFTPak", "https://www.youtube.com/embed/gGrRMGr90qw",
        "https://www.youtube.com/embed/EQfO7p05iVU", "https://www.youtube.com/embed/pFnQYgCPJyo"]

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
                return (
                    <div className="App">
                        <h2>Playlist 1</h2>
                        {this.titles.map(function (name, index) {
                            return <iframe width="340" height="200" src={name}
                                           title="YouTube video player" frameBorder="0"
                                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                           allowFullScreen></iframe>;
                        })}

                        <h2>Playlist 2</h2>
                        {this.titles2.map(function (name, index) {
                            return <iframe width="340" height="200" src={name}
                                           title="YouTube video player" frameBorder="0"
                                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                           allowFullScreen></iframe>;
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

export default withRouter (Playlists)
