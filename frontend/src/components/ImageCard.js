import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core/styles";
import {ResponsiveBar} from "@nivo/bar";
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

        // const data = [
        //     {'left-center': 3, 'left': 2, NaN: 1},
        //     {'left-center': 4, 'left': 1, NaN: 1}
        // ];

        // const data = [
        //   {
        //     "id": "left-center",
        //     "label": "left-center",
        //     "value": 3,
        //     "color": "hsl(252, 70%, 50%)"
        //   },
        //   {
        //     "id": "left",
        //     "label": "left",
        //     "value": 2,
        //     "color": "hsl(360, 70%, 50%)"
        //   },
        //   {
        //     "id": "NaN",
        //     "label": "NaN",
        //     "value": 1,
        //     "color": "hsl(134, 70%, 50%)"
        //   }
        // ]

        const pieChartData = [[[[{'id': 'NaN', 'label': 'NaN', 'value': '1'}, {
            'id': 'left',
            'label': 'left',
            'value': '2'
        }, {'id': 'left-center', 'label': 'left-center', 'value': '3'}], [{
            'id': 'NaN',
            'label': 'NaN',
            'value': '1'
        }, {'id': 'left', 'label': 'left', 'value': '1'}, {
            'id': 'left-center',
            'label': 'left-center',
            'value': '4'
        }], [{'id': 'least bias', 'label': 'least bias', 'value': '2'}, {
            'id': 'left-center',
            'label': 'left-center',
            'value': '4'
        }], [{'id': 'least bias', 'label': 'least bias', 'value': '1'}, {
            'id': 'left',
            'label': 'left',
            'value': '1'
        }, {'id': 'left-center', 'label': 'left-center', 'value': '4'}], [{
            'id': 'least bias',
            'label': 'least bias',
            'value': '4'
        }, {'id': 'left-center', 'label': 'left-center', 'value': '2'}], [{
            'id': 'NaN',
            'label': 'NaN',
            'value': '1'
        }, {'id': 'least bias', 'label': 'least bias', 'value': '3'}, {
            'id': 'left-center',
            'label': 'left-center',
            'value': '2'
        }], [{'id': 'NaN', 'label': 'NaN', 'value': '3'}, {
            'id': 'least bias',
            'label': 'least bias',
            'value': '2'
        }, {'id': 'left', 'label': 'left', 'value': '1'}]], [[{
            'id': 'left-center',
            'label': 'left-center',
            'value': '6'
        }], [{'id': 'least bias', 'label': 'least bias', 'value': '1'}, {
            'id': 'left',
            'label': 'left',
            'value': '1'
        }, {'id': 'left-center', 'label': 'left-center', 'value': '4'}], [{
            'id': 'least bias',
            'label': 'least bias',
            'value': '1'
        }, {'id': 'left-center', 'label': 'left-center', 'value': '4'}, {
            'id': 'right-center',
            'label': 'right-center',
            'value': '1'
        }], [{'id': 'NaN', 'label': 'NaN', 'value': '2'}, {
            'id': 'least bias',
            'label': 'least bias',
            'value': '1'
        }, {'id': 'left', 'label': 'left', 'value': '1'}, {
            'id': 'left-center',
            'label': 'left-center',
            'value': '2'
        }], [{'id': 'least bias', 'label': 'least bias', 'value': '1'}, {
            'id': 'left',
            'label': 'left',
            'value': '1'
        }, {'id': 'left-center', 'label': 'left-center', 'value': '4'}], [{
            'id': 'NaN',
            'label': 'NaN',
            'value': '1'
        }, {'id': 'least bias', 'label': 'least bias', 'value': '1'}, {
            'id': 'left',
            'label': 'left',
            'value': '1'
        }, {'id': 'left-center', 'label': 'left-center', 'value': '3'}], [{
            'id': 'least bias',
            'label': 'least bias',
            'value': '2'
        }, {'id': 'left', 'label': 'left', 'value': '1'}, {
            'id': 'left-center',
            'label': 'left-center',
            'value': '3'
        }]]], [[[{'id': 'left-center', 'label': 'left-center', 'value': '5'}, {
            'id': 'right',
            'label': 'right',
            'value': '1'
        }], [{'id': 'least bias', 'label': 'least bias', 'value': '1'}, {
            'id': 'left-center',
            'label': 'left-center',
            'value': '5'
        }], [{'id': 'least bias', 'label': 'least bias', 'value': '4'}, {
            'id': 'left-center',
            'label': 'left-center',
            'value': '2'
        }], [{'id': 'least bias', 'label': 'least bias', 'value': '4'}, {
            'id': 'left-center',
            'label': 'left-center',
            'value': '2'
        }], [{'id': 'NaN', 'label': 'NaN', 'value': '1'}, {
            'id': 'least bias',
            'label': 'least bias',
            'value': '2'
        }, {'id': 'left', 'label': 'left', 'value': '1'}, {
            'id': 'left-center',
            'label': 'left-center',
            'value': '2'
        }], [{'id': 'NaN', 'label': 'NaN', 'value': '1'}, {
            'id': 'least bias',
            'label': 'least bias',
            'value': '1'
        }, {'id': 'left-center', 'label': 'left-center', 'value': '4'}], [{
            'id': 'least bias',
            'label': 'least bias',
            'value': '5'
        }, {'id': 'left-center', 'label': 'left-center', 'value': '1'}]], [[{
            'id': 'left-center',
            'label': 'left-center',
            'value': '6'
        }], [{'id': 'least bias', 'label': 'least bias', 'value': '1'}, {
            'id': 'left-center',
            'label': 'left-center',
            'value': '5'
        }], [{'id': 'least bias', 'label': 'least bias', 'value': '1'}, {
            'id': 'left-center',
            'label': 'left-center',
            'value': '5'
        }], [{'id': 'left', 'label': 'left', 'value': '1'}, {
            'id': 'left-center',
            'label': 'left-center',
            'value': '5'
        }], [{'id': 'least bias', 'label': 'least bias', 'value': '2'}, {
            'id': 'left-center',
            'label': 'left-center',
            'value': '4'
        }], [{'id': 'least bias', 'label': 'least bias', 'value': '1'}, {
            'id': 'left-center',
            'label': 'left-center',
            'value': '5'
        }], [{'id': 'left-center', 'label': 'left-center', 'value': '6'}]]], [[[{
            'id': 'NaN',
            'label': 'NaN',
            'value': '1'
        }, {'id': 'left-center', 'label': 'left-center', 'value': '3'}, {
            'id': 'right',
            'label': 'right',
            'value': '2'
        }], [{'id': 'NaN', 'label': 'NaN', 'value': '2'}, {
            'id': 'least bias',
            'label': 'least bias',
            'value': '1'
        }, {'id': 'left-center', 'label': 'left-center', 'value': '3'}], [{
            'id': 'NaN',
            'label': 'NaN',
            'value': '2'
        }, {'id': 'left', 'label': 'left', 'value': '1'}, {
            'id': 'left-center',
            'label': 'left-center',
            'value': '1'
        }, {'id': 'right', 'label': 'right', 'value': '2'}], [{
            'id': 'NaN',
            'label': 'NaN',
            'value': '1'
        }, {'id': 'left', 'label': 'left', 'value': '2'}, {
            'id': 'left-center',
            'label': 'left-center',
            'value': '2'
        }, {'id': 'right', 'label': 'right', 'value': '1'}], [{
            'id': 'NaN',
            'label': 'NaN',
            'value': '2'
        }, {'id': 'left-center', 'label': 'left-center', 'value': '4'}], [{
            'id': 'NaN',
            'label': 'NaN',
            'value': '2'
        }, {'id': 'left', 'label': 'left', 'value': '1'}, {
            'id': 'left-center',
            'label': 'left-center',
            'value': '3'
        }], [{'id': 'NaN', 'label': 'NaN', 'value': '3'}, {
            'id': 'left-center',
            'label': 'left-center',
            'value': '3'
        }]], [[{'id': 'left', 'label': 'left', 'value': '1'}, {
            'id': 'left-center',
            'label': 'left-center',
            'value': '2'
        }, {'id': 'right', 'label': 'right', 'value': '3'}], [{
            'id': 'NaN',
            'label': 'NaN',
            'value': '1'
        }, {'id': 'right', 'label': 'right', 'value': '3'}, {
            'id': 'right-center',
            'label': 'right-center',
            'value': '2'
        }], [{'id': 'right', 'label': 'right', 'value': '4'}, {
            'id': 'right-center',
            'label': 'right-center',
            'value': '2'
        }], [{'id': 'right', 'label': 'right', 'value': '4'}, {
            'id': 'right-center',
            'label': 'right-center',
            'value': '2'
        }], [{'id': 'right', 'label': 'right', 'value': '3'}, {
            'id': 'right-center',
            'label': 'right-center',
            'value': '3'
        }], [{'id': 'right', 'label': 'right', 'value': '5'}, {
            'id': 'right-center',
            'label': 'right-center',
            'value': '1'
        }], [{'id': 'NaN', 'label': 'NaN', 'value': '1'}, {
            'id': 'left-center',
            'label': 'left-center',
            'value': '1'
        }, {'id': 'right', 'label': 'right', 'value': '4'}]]]]


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
                                <ArrowLeftIcon/>
                            </IconButton>
                            <IconButton aria-label="next" onClick={this.arrowClick} id="forward"
                                        disabled={this.state.current_image_index === this.num_images - 1}>
                                <ArrowRightIcon/>
                            </IconButton>
                            <Typography variant="subtitle1" gutterBottom align="justify">
                                {this.captions[this.props.column][this.props.index][this.state.current_image_index]}
                            </Typography>

                            {/*<div>*/}
                            {/*    <h1>Nivo basic demo</h1>*/}
                            {/*    <div style={{height: "400px"}}>*/}
                            {/*        <ResponsivePie data={pieChartData[this.props.column][this.props.index][this.state.current_image_index]}/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                        </Grid>
                    </div>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, {withTheme: true})(ImageCard);




