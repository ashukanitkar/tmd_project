import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import {withStyles} from "@material-ui/core/styles";
import {ResponsivePie} from "nivo";
import pieChartsData from "./pieChartsData"

const styles = theme => ({
    root: {
        width: "25%",
    },
    controls: {
        alignItems: 'center',
        display: 'flex'
    },
    action: {
        alignItems: "center",
        display: "flex"
    },
    screenshot: {
        height: 500,
        width: "auto"
    },
    caption: {
        fontFamily: "Montserrat",
        textAlign: "center",
        color: "#99a1a3",
        paddingTop: "20px"
    },

    pieChart: {
        background: "pink",
        height: "400px",
        width: "50%"
    }
});

class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current_image_index: 0,
            column: props.column,
            index: props.index
        }
        this.arrowClick = this.arrowClick.bind(this);
    }


    load_image_dir() {
        let url = "Screenshots/"
        let column = this.props.column
        let index = this.props.index //temp
        if (column === 0) {
            url += "Left\ Wing/"
            if (index === 0) {
                url += "benje_left_R"
            } else {
                url += "candice_left_R"
            }
        } else if (column === 2) {
            url += "Control/"
            if (index === 0) {
                url += "cole_control_R"
            } else {
                url += "jaeden_control_R"
            }
        } else {
            url += "Right\ Wing/"
            if (index === 0) {
                url += "derren_right_R"
            } else {
                url += "dongxue_right_R"
            }
        }
        return url
    }

    num_images = 7

    arrowClick(event) {
        if (event.currentTarget.id === "forward") {
            this.setState({
                current_image_index: Math.min(this.state.current_image_index + 1, this.num_images - 1)
            })

        } else {
            this.setState({
                current_image_index: Math.max(this.state.current_image_index - 1, 0)
            })
        }
    }

    render() {
        const {classes, theme} = this.props;
        const image_dir = this.load_image_dir(this.props.column, this.props.index)
        console.log(process.env.PUBLIC_URL + image_dir + (this.state.current_image_index + 1).toString() + '.png')
        return (
            <Card className={classes.root} variant="outlined">
                <CardActionArea className={classes.action}>
                    <CardMedia
                        className={classes.screenshot}
                        component="img"
                        // height="800"
                        image={process.env.PUBLIC_URL + image_dir + (this.state.current_image_index + 1).toString() + '.png'}
                    />
                </CardActionArea>
                <CardContent>
                    <div className={classes.controls}>
                        <Grid container justify="center">
                            <IconButton aria-label="previous" onClick={this.arrowClick} id="backward"
                                        disabled={this.state.current_image_index === 0}>
                                <ArrowBackIcon/>
                            </IconButton>
                            <IconButton aria-label="next" onClick={this.arrowClick} id="forward"
                                        disabled={this.state.current_image_index === this.num_images - 1}>
                                <ArrowForwardIcon/>
                            </IconButton>
                        </Grid>
                    </div>
                    <div style={{background: "black", borderRadius: "20px"}}>
                        <h3 className={classes.caption}>Bias Rating</h3>
                        <div style={{height: "400px"}}>
                        <ResponsivePie
        data={pieChartsData[(2*this.state.column) + this.state.index][this.state.current_image_index]}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        innerRadius={0.5}
        padAngle={2}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'left-center'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'left'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'right-center'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'right'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'least-bias'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'nan'
                },
                id: 'lines'
            }
        ]}
    />
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, {withTheme: true})(ImageCard);




