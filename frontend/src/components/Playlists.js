import React from 'react';
import Carousel from 'react-material-ui-carousel';
import autoBind from 'auto-bind';
// // TODO - change to actual watch history file later, using small file for now
import jsonData from '../watch_histories_small.json'
import { withStyles } from "@material-ui/core/styles";

import {
    Paper,
    Button,
    Typography
} from '@material-ui/core'

const styles = theme => ({
    root: {
      width: "25%",
    },
    SecondExample: {
        width: "50%",
        margin: "auto"
    }
  });
  
function Project(props) {
    return (
        <Paper
            className="Project"
            style={{
                width: "50%",
                margin: "auto",
                textAlign: "center"
            }}
            elevation={10}
        >
            <div 
            style={{
                margin: "auto"
            }}>
                 <Typography>{props.item.title}</Typography>
                 <iframe width="340" height="200" src={props.item.link}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
        </Paper>
    )
}

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
        const { classes, theme } = this.props;
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
            <div style={{ marginTop: "50px", color: "#494949"}}>
                {playlists.map((playlist, idx) => {
                    return (
                        <div>
                            <h2>Playlist {idx + 1}</h2>
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
                                    playlist.map( (video => <Project item={video} /> ))
                                }
                            </Carousel>

                        </div>
                    )})}
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
export default withStyles(styles, { withTheme: true })(Playlists);
