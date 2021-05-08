import ImageCard from "./ImageCard"
import Grid from "@material-ui/core/Grid"
import Box from '@material-ui/core/Box';
import React from "react";
import Button from "@material-ui/core/Button";
import Dropdown from "./Dropdown";
import {useHistory} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { withStyles } from "@material-ui/core/styles";


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
        this.state = {
            didUserSelectionChange: null,
            indexes: [0, 0, 0]
        }
    }

    parent_func=(col, index) => {
        console.log(col, index, "ok")
        var updatedIndexes = this.state.indexes
        updatedIndexes[col] = index
        this.setState({didUserSelectionChange: true,
                        indexes: updatedIndexes})
        console.log(this.state.indexes)
    }

    columns = [0,1,2]
    //history = useHistory();
    //navigateToPlaylists = () => history.push('/playlists');
    //navigateToHome = () => history.push('/');
    //classes = useStyles()

    render() {
        const { classes, theme } = this.props;
        return (
            <div className={classes.container}>
                <Box my="6%">
                <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                    {this.columns.map((column => {
                        return <Dropdown column={column} functionCallFromParent = {this.parent_func.bind(this)}/>
                    }))}  
                    </Grid> 
                    <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                    {this.columns.map((column => {
                        return <ImageCard column={column} index={this.state.indexes[column]}/>
                    }))} 
                    </Grid> 
                          
                </Box>
                {/* <Button variant="contained" onClick={navigateToPlaylists} className={classes.primaryButton}>
                    Select another playlist
                </Button>
                <Button variant="contained" onClick={navigateToHome} className={classes.primaryButton}>
                    Start over
                </Button> */}
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Comparison);
