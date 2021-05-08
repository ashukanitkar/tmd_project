import React from 'react';
import Carousel from 'react-material-ui-carousel';
import jsonData from '../watch_histories.json'
import {Paper, Typography} from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";
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

class RandomPlaylists extends React.Component {
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

    shouldComponentUpdate() {
        return false
    }


    render() {
        const {classes, theme} = this.props;
        const loadData = () => JSON.parse(JSON.stringify(jsonData));
        let playlists = []
        // Left Winged Users: Benje, Candice
        // Right Winged Users: Derren, Dongxue
        // Control Users: Cole, Jaeden
        Object.keys(loadData().users).forEach((key) => {
            let user = []
            let videos = this.shuffle(loadData().users[key].videos)
            videos.slice(0, 7).forEach((video) => {
                user.push(video)
            });
            playlists.push(user);
        })
        return ( <div>
            {playlists.map((playlist, idx) => {
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
        </div>)
    }
}


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



export default withStyles(styles, { withTheme: true })(RandomPlaylists);
