import ImageCard from "./ImageCard"
import Grid from "@material-ui/core/Grid"
import Box from '@material-ui/core/Box';
import React from "react";
import Button from "@material-ui/core/Button";
import Dropdown from "./Dropdown";
import {useHistory} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom" 

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
        alignSelf: "center"
    },
});


class Comparison extends React.Component {
    
    constructor(props) {
        super(props)
        let selected_user_index = props.location.state.user.slice(-1)
        let initial_indexes = [0,0,0]
        initial_indexes[Math.floor(selected_user_index/2)] = selected_user_index % 2
        this.state = {
            didUserSelectionChange: null,
            
            indexes: initial_indexes
        }
    }

    columns = [0,1,2]

    parent_func=(col, index) => {
        var updatedIndexes = this.state.indexes
        updatedIndexes[col] = index
        this.setState({didUserSelectionChange: true,
                        indexes: updatedIndexes})
    }

    render() {
        const { classes, theme } = this.props;
        return (
            <div className={classes.container}>
                <Box mt="6%">
                <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                    {this.columns.map((column => {
                        return <Dropdown column={column} index={this.state.indexes[column]} functionCallFromParent = {this.parent_func.bind(this)}/>
                    }))}  
                    </Grid> 
                    <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                    {this.columns.map((column => {
                        return <ImageCard column={column} index={this.state.indexes[column]}/>
                    }))} 
                    </Grid> 
                          
                </Box>
                <Box py="3%">
                <Grid container direction="row" justify="space-evenly" alignItems="flex-start" my="6%">
                <Button variant="contained" className={classes.primaryButton} component={Link} to="/findings">
                    Continue to Findings
                </Button>
                <Button variant="contained" className={classes.secondaryButton} component={Link} to="/playlists">
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

export default withStyles(styles, { withTheme: true })(Comparison);
