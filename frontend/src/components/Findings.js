import {ResponsiveBar} from '@nivo/bar'
import React from 'react'
import data from './BarChart/data.js'
import "./BarChart/chart.css"
import Card from "@material-ui/core/Card";
import {CardContent, CardMedia} from "@material-ui/core";
import leftImg from '../left_channels.png';
import rightImg from '../right_channels.png';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    textHeader: {
        fontFamily: "Montserrat",
        alignSelf: "center"
    },

    textBody: {
        alignSelf: "center",
        fontFamily: "Montserrat",
        fontWeight: 500,
    },
    pageHeader: {
        fontFamily: "Montserrat",
        alignSelf: "center",
        fontSize: "30px",
        paddingBottom: "20px"
    },
    cardCaptions: {
        alignSelf: "center",
        fontFamily: "Montserrat",
        fontWeight: 500,
        fontSize: "20px"
    }
});

class Findings extends React.Component {

    render() {
        const {classes, theme} = this.props;

        return (
            <div style={{display: "flex", flexDirection: "column"}}>
                <h1 className={classes.pageHeader}>Findings</h1>
                <h3 className={classes.textHeader}>Channel Frequencies</h3>
                <div className={classes.textBody}>
                    The bar graph below shows the frequency of each YouTube channel for each user group.
                    <br/><br/>
                </div>
                <div class="chart">
                    <ResponsiveBar
                        data={data}
                        keys={["left_users", "right_users", "control_users"]}
                        indexBy="channel"
                        margin={{top: 50, right: 130, bottom: 50, left: 60}}
                        padding={0.3}
                        valueScale={{type: 'linear'}}
                        indexScale={{type: 'band', round: true}}
                        colors={{scheme: 'nivo'}}
                        defs={[
                            {
                                id: 'dots',
                                type: 'patternDots',
                                background: 'inherit',
                                color: '#38bcb2',
                                size: 4,
                                padding: 1,
                                stagger: true
                            },
                            {
                                id: 'lines',
                                type: 'patternLines',
                                background: 'inherit',
                                color: '#eed312',
                                rotation: -45,
                                lineWidth: 6,
                                spacing: 10
                            }
                        ]}
                        fill={[
                            {
                                match: {
                                    id: 'fries'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'sandwich'
                                },
                                id: 'lines'
                            }
                        ]}
                        borderColor={{from: 'color', modifiers: [['darker', 1.6]]}}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Channel',
                            legendPosition: 'middle',
                            legendOffset: 32
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Frequency',
                            legendPosition: 'middle',
                            legendOffset: -40
                        }}
                        labelSkipWidth={12}
                        labelSkipHeight={12}
                        labelTextColor={{from: 'color', modifiers: [['darker', 1.6]]}}
                        legends={[
                            {
                                dataFrom: 'keys',
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 120,
                                translateY: 0,
                                itemsSpacing: 2,
                                itemWidth: 100,
                                itemHeight: 20,
                                itemDirection: 'left-to-right',
                                itemOpacity: 0.85,
                                symbolSize: 20,
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                    />
                </div>
                <br/><br/>

                <h3 className={classes.textHeader}>Word Clouds</h3>
                <div className={classes.textBody}>
                    The word clouds below visualize the most commonly occurring channels for left and right-leaning
                    accounts.
                </div>
                <Box mt="6%">
                    <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                        <Card style={{display: "flex", flexDirection: "column"}}>
                            <CardMedia
                                component="img"
                                image={leftImg}>
                            </CardMedia>
                            <CardContent className={classes.cardCaptions}>
                                Left Channels
                            </CardContent>
                        </Card>
                        <Card style={{display: "flex", flexDirection: "column"}}>
                            <CardMedia
                                component="img"
                                image={rightImg}>
                            </CardMedia>
                            <CardContent className={classes.cardCaptions}>
                                Right Channels
                            </CardContent>
                        </Card>
                    </Grid>
                </Box>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Findings);
