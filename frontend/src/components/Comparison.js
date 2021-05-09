import ImageCard from "./ImageCard"
import Grid from "@material-ui/core/Grid"
import Box from '@material-ui/core/Box';
import React from "react";
import Dropdown from "./Dropdown";
import {withStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom"
import Button from "@material-ui/core/Button";

//Reference for ordering
//users = ["Benje", "Candice", "Derren", "Dongxue", "Cole", "Jaeden"]


const styles = theme => ({
    primaryButton: {
        background: "#ecc787",
        fontFamily: "Montserrat",
        fontWeight: "600",
        alignSelf: "center",
        marginTop: "30px",
        '&:hover': {
            backgroundColor: "#E9BD71",
        },
        marginRight: "10px",
    },
    secondaryButton: {
        background: "#709956",
        fontFamily: "Montserrat",
        fontWeight: "600",
        alignSelf: "center",
        marginTop: "30px",
        '&:hover': {
            backgroundColor: "#709956",
        },
        marginRight: "10px",
    },
    defaultButton: {
        background: "#deded8",
        fontFamily: "Montserrat",
        fontWeight: "600",
        alignSelf: "center",
        marginTop: "30px",
        '&:hover': {
            backgroundColor: "#deded8",
        },
        marginRight: "10px",
    },

    container: {
        display: "flex",
        flexDirection: "column",
    },

    textHeader: {
        fontFamily: "Montserrat",
        alignSelf: "center"
    },

    textBody: {
        alignSelf: "center",
        width: "65%",
        fontFamily: "Montserrat",
        fontWeight: 500,
    }
});


class Comparison extends React.Component {

    constructor(props) {
        super(props)
        let selected_user_index = props.location.state.user.slice(-1)
        let initial_indexes = [0, 0, 0]
        initial_indexes[Math.floor(selected_user_index / 2)] = selected_user_index % 2
        this.state = {
            didUserSelectionChange: null,

            indexes: initial_indexes
        }
    }

    columns = [0, 1, 2]

    parent_func = (col, index) => {
        var updatedIndexes = this.state.indexes
        updatedIndexes[col] = index
        this.setState({
            didUserSelectionChange: true,
            indexes: updatedIndexes
        })
    }

    render() {
        const {classes, theme} = this.props;

        return (
            <div className={classes.container}>
                <br/>
                <h3 className={classes.textHeader}>Compare Playlists</h3>
                <div className={classes.textBody}>
                    <br/>
                    Here we are comparing the initial search results and subsequent “Up Next” recommendations for each
                    type of user, organized into 3 sections of left wing, control, and right wing.
                    <br/><br/>
                    For each type of user, we start with a screenshot of their initial YouTube search results for “2020
                    election results”. Then, the next 7 screenshots follow the path of recommended videos presented in
                    their Up Next section. Each time, we clicked the top result in the “Up Next” section to generate the
                    next set of recommended videos. You can use the drop down menu in the top right corner to explore
                    the recommendation paths of other user accounts within the same section type.
                    <br/><br/>
                    Below each screenshot are the bias ratings of the YouTube channels present in the screenshot. The
                    bias rating is a reflection of political affiliation, use of loaded words, levels of factual
                    information, well-sourced evidence, and types of content published. The rating ranges from extreme
                    left/right, left/right, left-center/right-center, and least biased.
                    <br/><br/>
                    The value of this guide is in this side by side comparison of different accounts. Even though all
                    users started with the same first video, their subsequent recommendations were unique to them with
                    varying levels of diversity in source and topic.

                </div>

                <Box mt="6%">
                    <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                        {this.columns.map((column => {
                            return <Dropdown column={column} index={this.state.indexes[column]}
                                             functionCallFromParent={this.parent_func.bind(this)}/>
                        }))}
                    </Grid>
                    <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                        {this.columns.map((column => {
                            // console.log("col: ", column)
                            return <ImageCard column={column} index={this.state.indexes[column]}/>
                        }))}
                    </Grid>

                </Box>
                <Box py="3%">
                    <Grid container direction="row" justify="space-evenly" alignItems="flex-start" my="6%">
                        <Button variant="contained" className={classes.primaryButton} component={Link} to="/findings">
                            Continue to Findings
                        </Button>
                        <Button variant="contained" className={classes.secondaryButton} component={Link}
                                to="/playlists">
                            Select Another Playlist
                        </Button>
                        <Button variant="contained" className={classes.defaultButton} component={Link} to="/">
                            Start over
                        </Button>
                    </Grid>
                </Box>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Comparison);
