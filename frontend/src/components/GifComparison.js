import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import pug1 from '../assets/pug1.jpeg'
import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "25%",
  },
  controls: {
        alignItems: 'center',
        display: 'flex'
  }
});

class GifComparison extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
        const { classes, theme } = this.props;
        return (
        <Card className={classes.root} variant="outlined">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Pug1"
              height="350"
              image={pug1}
              title="Pug"
            />
          </CardActionArea>
          <CardContent>
            <div className={classes.controls}>
            <Grid container justify="center">
                <IconButton aria-label="previous">
                  {theme.direction === 'rtl' ? <ArrowRightIcon /> : <ArrowLeftIcon />}
                </IconButton>
                <IconButton aria-label="next">
                  {theme.direction === 'rtl' ? <ArrowLeftIcon /> : <ArrowRightIcon />}
                </IconButton>
            </Grid>
            </div>
          </CardContent>
        </Card>
      );
    }
}

export default withStyles(styles, { withTheme: true })(GifComparison);




