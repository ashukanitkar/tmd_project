import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import {withStyles} from "@material-ui/core/styles";
import {ResponsivePie} from "nivo";

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

    captions = [[[['left-center, left-center,       left ,         NaN, left-center,       left'],
        ['left-center, left-center,         NaN,       left , left-center, left-center'],
        ['left-center, left-center, left-center, left-center,  least bias,  least bias'],
        ['least bias, left-center, left-center,       left , left-center, left-center'],
        ['least bias,  least bias, left-center, left-center,  least bias,  least bias'],
        ['least bias, left-center,         NaN, left-center,  least bias,  least bias'],
        ['left ,        NaN,        NaN,        NaN, least bias, least bias']],
        [['left-center, left-center, left-center, left-center, left-center, left-center'],
            ['left-center, left-center, left-center,  least bias, left-center,       left'],
            ['left-center,  left-center,  left-center,   least bias,  left-center, right-center'],
            ['left , left-center,         NaN,         NaN, left-center,  least bias'],
            ['left-center,  least bias, left-center, left-center,       left , left-center'],
            ['least bias, left-center, left-center,       left ,         NaN, left-center'],
            ['left-center, left-center, left-center,       left ,  least bias,  least bias']
        ]],
        [[['left-center, left-center, left-center, left-center, left-center,       right'],
            ['least bias, left-center, left-center, left-center, left-center, left-center'],
            ['least bias, left-center,  least bias,  least bias, left-center,  least bias'],
            ['least bias, left-center,  least bias, left-center,  least bias,  least bias'],
            ['least bias, left-center,         NaN,  least bias, left-center,       left'],
            ['least bias, left-center, left-center, left-center, left-center,         NaN'],
            ['least bias,  least bias, left-center,  least bias,  least bias,  least bias']], [
            ['left-center, left-center, left-center, left-center, left-center, left-center'],
            ['left-center, left-center, left-center,  least bias, left-center, left-center'],
            ['left-center,  least bias, left-center, left-center, left-center, left-center'],
            ['left-center, left-center, left-center,       left , left-center, left-center'],
            ['left-center, left-center,  least bias, left-center,  least bias, left-center'],
            ['left-center,  least bias, left-center, left-center, left-center, left-center'],
            ['left-center, left-center, left-center, left-center, left-center, left-center']]],
        [[['left-center, left-center,         NaN,       right, left-center,       right'],
            ['left-center,         NaN, left-center,         NaN, left-center,  least bias'],
            ['left ,       right,         NaN,         NaN, left-center,       right'],
            ['left-center,         NaN,       right,       left , left-center,       left'],
            ['left-center,         NaN, left-center, left-center, left-center,         NaN'],
            ['left , left-center, left-center,         NaN, left-center,         NaN'],
            ['NaN, left-center, left-center, left-center,         NaN,         NaN']],
            [['right,       right,       left ,       right, left-center, left-center'],
                ['right, right-center,        right,        right,          NaN, right-center'],
                ['right,        right, right-center,        right,        right, right-center'],
                ['right, right-center,        right,        right,        right, right-center'],
                ['right, right-center, right-center, right-center,        right,        right'],
                ['right,        right,        right,        right,        right, right-center'],
                ['right,         NaN,       right, left-center,       right,       right']]]]

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

        const pieChartData = [[[[{'id': 'Unrated', 'label': 'Unrated', 'value': 1}, {
            'id': 'Left',
            'label': 'Left',
            'value': 2
        }, {'id': 'Left-Center', 'label': 'Left-Center', 'value': 3}], [{
            'id': 'Unrated',
            'label': 'Unrated',
            'value': 1
        }, {'id': 'Left', 'label': 'Left', 'value': 1}, {
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 4
        }], [{'id': 'Least Bias', 'label': 'Least Bias', 'value': 2}, {
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 4
        }], [{'id': 'Least Bias', 'label': 'Least Bias', 'value': 1}, {
            'id': 'Left',
            'label': 'Left',
            'value': 1
        }, {'id': 'Left-Center', 'label': 'Left-Center', 'value': 4}], [{
            'id': 'Least Bias',
            'label': 'Least Bias',
            'value': 4
        }, {'id': 'Left-Center', 'label': 'Left-Center', 'value': 2}], [{
            'id': 'Unrated',
            'label': 'Unrated',
            'value': 1
        }, {'id': 'Least Bias', 'label': 'Least Bias', 'value': 3}, {
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 2
        }], [{'id': 'Unrated', 'label': 'Unrated', 'value': 3}, {
            'id': 'Least Bias',
            'label': 'Least Bias',
            'value': 2
        }, {'id': 'Left', 'label': 'Left', 'value': 1}]], [[{
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 6
        }], [{'id': 'Least Bias', 'label': 'Least Bias', 'value': 1}, {
            'id': 'Left',
            'label': 'Left',
            'value': 1
        }, {'id': 'Left-Center', 'label': 'Left-Center', 'value': 4}], [{
            'id': 'Least Bias',
            'label': 'Least Bias',
            'value': 1
        }, {'id': 'Left-Center', 'label': 'Left-Center', 'value': 4}, {
            'id': 'Right-Center',
            'label': 'Right-Center',
            'value': 1
        }], [{'id': 'Unrated', 'label': 'Unrated', 'value': 2}, {
            'id': 'Least Bias',
            'label': 'Least Bias',
            'value': 1
        }, {'id': 'Left', 'label': 'Left', 'value': 1}, {
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 2
        }], [{'id': 'Least Bias', 'label': 'Least Bias', 'value': 1}, {
            'id': 'Left',
            'label': 'Left',
            'value': 1
        }, {'id': 'Left-Center', 'label': 'Left-Center', 'value': 4}], [{
            'id': 'Unrated',
            'label': 'Unrated',
            'value': 1
        }, {'id': 'Least Bias', 'label': 'Least Bias', 'value': 1}, {
            'id': 'Left',
            'label': 'Left',
            'value': 1
        }, {'id': 'Left-Center', 'label': 'Left-Center', 'value': 3}], [{
            'id': 'Least Bias',
            'label': 'Least Bias',
            'value': 2
        }, {'id': 'Left', 'label': 'Left', 'value': 1}, {
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 3
        }]]], [[[{'id': 'Left-Center', 'label': 'Left-Center', 'value': 5}, {
            'id': 'Right',
            'label': 'Right',
            'value': 1
        }], [{'id': 'Least Bias', 'label': 'Least Bias', 'value': 1}, {
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 5
        }], [{'id': 'Least Bias', 'label': 'Least Bias', 'value': 4}, {
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 2
        }], [{'id': 'Least Bias', 'label': 'Least Bias', 'value': 4}, {
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 2
        }], [{'id': 'Unrated', 'label': 'Unrated', 'value': 1}, {
            'id': 'Least Bias',
            'label': 'Least Bias',
            'value': 2
        }, {'id': 'Left', 'label': 'Left', 'value': 1}, {
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 2
        }], [{'id': 'Unrated', 'label': 'Unrated', 'value': 1}, {
            'id': 'Least Bias',
            'label': 'Least Bias',
            'value': 1
        }, {'id': 'Left-Center', 'label': 'Left-Center', 'value': 4}], [{
            'id': 'Least Bias',
            'label': 'Least Bias',
            'value': 5
        }, {'id': 'Left-Center', 'label': 'Left-Center', 'value': 1}]], [[{
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 6
        }], [{'id': 'Least Bias', 'label': 'Least Bias', 'value': 1}, {
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 5
        }], [{'id': 'Least Bias', 'label': 'Least Bias', 'value': 1}, {
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 5
        }], [{'id': 'Left', 'label': 'Left', 'value': 1}, {
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 5
        }], [{'id': 'Least Bias', 'label': 'Least Bias', 'value': 2}, {
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 4
        }], [{'id': 'Least Bias', 'label': 'Least Bias', 'value': 1}, {
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 5
        }], [{'id': 'Left-Center', 'label': 'Left-Center', 'value': 6}]]], [[[{
            'id': 'Unrated',
            'label': 'Unrated',
            'value': 1
        }, {'id': 'Left-Center', 'label': 'Left-Center', 'value': 3}, {
            'id': 'Right',
            'label': 'Right',
            'value': 2
        }], [{'id': 'Unrated', 'label': 'Unrated', 'value': 2}, {
            'id': 'Least Bias',
            'label': 'Least Bias',
            'value': 1
        }, {'id': 'Left-Center', 'label': 'Left-Center', 'value': 3}], [{
            'id': 'Unrated',
            'label': 'Unrated',
            'value': 2
        }, {'id': 'Left', 'label': 'Left', 'value': 1}, {
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 1
        }, {'id': 'Right', 'label': 'Right', 'value': 2}], [{
            'id': 'Unrated',
            'label': 'Unrated',
            'value': 1
        }, {'id': 'Left', 'label': 'Left', 'value': 2}, {
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 2
        }, {'id': 'Right', 'label': 'Right', 'value': 1}], [{
            'id': 'Unrated',
            'label': 'Unrated',
            'value': 2
        }, {'id': 'Left-Center', 'label': 'Left-Center', 'value': 4}], [{
            'id': 'Unrated',
            'label': 'Unrated',
            'value': 2
        }, {'id': 'Left', 'label': 'Left', 'value': 1}, {
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 3
        }], [{'id': 'Unrated', 'label': 'Unrated', 'value': 3}, {
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 3
        }]], [[{'id': 'Left', 'label': 'Left', 'value': 1}, {
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 2
        }, {'id': 'Right', 'label': 'Right', 'value': 3}], [{
            'id': 'Unrated',
            'label': 'Unrated',
            'value': 1
        }, {'id': 'Right', 'label': 'Right', 'value': 3}, {
            'id': 'Right-Center',
            'label': 'Right-Center',
            'value': 2
        }], [{'id': 'Right', 'label': 'Right', 'value': 4}, {
            'id': 'Right-Center',
            'label': 'Right-Center',
            'value': 2
        }], [{'id': 'Right', 'label': 'Right', 'value': 4}, {
            'id': 'Right-Center',
            'label': 'Right-Center',
            'value': 2
        }], [{'id': 'Right', 'label': 'Right', 'value': 3}, {
            'id': 'Right-Center',
            'label': 'Right-Center',
            'value': 3
        }], [{'id': 'Right', 'label': 'Right', 'value': 5}, {
            'id': 'Right-Center',
            'label': 'Right-Center',
            'value': 1
        }], [{'id': 'Unrated', 'label': 'Unrated', 'value': 1}, {
            'id': 'Left-Center',
            'label': 'Left-Center',
            'value': 1
        }, {'id': 'Right', 'label': 'Right', 'value': 4}]]]]

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
                                data={pieChartData[this.props.column][this.props.index][this.state.current_image_index]}
                                innerRadius={0.5}
                                padAngle={0.7}
                                cornerRadius={3}
                                activeOuterRadiusOffset={8}
                                borderWidth={1}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, {withTheme: true})(ImageCard);




