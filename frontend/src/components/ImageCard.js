import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import pug1 from '../assets/pug1.jpeg';
import pug2 from '../assets/pug2.jpeg';
import pug3 from '../assets/pug3.jpeg';
import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
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

class ImageCard extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      current_image_index: 0,
      current_image: pug1
    }
    this.arrowClick = this.arrowClick.bind(this);
  }

  pug_images = [pug1, pug2, pug3]
  pug_captions = [
    "This text would describe the educational component we are trying to illustrate in the above photograph0.",
    "This text would describe the educational component we are trying to illustrate in the above photograph1.",
    "This text would describe the educational component we are trying to illustrate in the above photograph2."]
  
  num_images = this.pug_images.length

  arrowClick(event) {
    if (event.currentTarget.id == "forward") {
      this.setState({
        current_image_index: Math.min(this.state.current_image_index + 1, this.pug_images.length-1),
        current_image: this.pug_images[Math.min(this.state.current_image_index + 1, this.pug_images.length-1)]
      })
      
    } else {
      this.setState({
        current_image_index: Math.max(this.state.current_image_index - 1, 0),
        current_image: this.pug_images[Math.max(this.state.current_image_index - 1, 0)]
      })
    }
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
              image={this.state.current_image}
              title="Pug"
            />
          </CardActionArea>
          <CardContent>
            <div className={classes.controls}>
            <Grid container justify="center">
                <IconButton aria-label="previous" onClick={this.arrowClick} id="backward" disabled={this.state.current_image_index == 0}>
                  <ArrowLeftIcon />
                </IconButton>
                <IconButton aria-label="next" onClick={this.arrowClick} id="forward" disabled={this.state.current_image_index == this.num_images-1}>
                  <ArrowRightIcon />
                </IconButton>
                <Typography variant="subtitle1" gutterBottom align="justify">
                {this.pug_captions[this.state.current_image_index]}
                </Typography>
            </Grid>
            </div>
          </CardContent>
        </Card>
      );
    }
}

export default withStyles(styles, { withTheme: true })(ImageCard);




