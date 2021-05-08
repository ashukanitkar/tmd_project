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
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "25%",
  },
  controls: {
        alignItems: 'center',
        display: 'flex'
  },
  action: {
    alignItems:"center",
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
    if (column == 0) {
      url += "Left\ Wing/"
      if (index == 0) {
        url += "benje_left_R"
      }
      else {
        url += "candice_left_R"
      }
    }
    else if (column == 2) {
      url += "Control/"
      if (index == 0) {
        url += "cole_control_R"
      }
      else {
        url += "jaeden_control_R"
      }
    }
    else {
      url += "Right\ Wing/"
      if (index == 0) {
        url += "derren_right_R"
      }
      else {
        url += "dongxue_right_R"
      }
    }
    return url 
  }

  //TO DO: Dynamic Captions
  pug_captions = [
    "This text would describe the educational component we are trying to illustrate in the above photograph0.",
    "This text would describe the educational component we are trying to illustrate in the above photograph1.",
    "This text would describe the educational component we are trying to illustrate in the above photograph2.",
    "This text would describe the educational component we are trying to illustrate in the above photograph3.",
    "This text would describe the educational component we are trying to illustrate in the above photograph4.",
    "This text would describe the educational component we are trying to illustrate in the above photograph5.",
    "This text would describe the educational component we are trying to illustrate in the above photograph6."]
    
  num_images = 7
  

  arrowClick(event) {
    if (event.currentTarget.id === "forward") {
      this.setState({
        current_image_index: Math.min(this.state.current_image_index + 1, this.num_images-1)
      })

    } else {
      this.setState({
        current_image_index: Math.max(this.state.current_image_index - 1, 0)
      })
    }
  }

  render() {
        const { classes, theme } = this.props;
        const image_dir = this.load_image_dir(this.props.column, this.props.index)
        console.log(process.env.PUBLIC_URL + image_dir + (this.state.current_image_index+1).toString() + '.png')
        return (
        <Card className={classes.root} variant="outlined">
          <CardActionArea className={classes.action}>
            <CardMedia
              className={classes.screenshot}
              component="img"
              // height="800"
              image={process.env.PUBLIC_URL + image_dir + (this.state.current_image_index+1).toString() + '.png'}
            />
          </CardActionArea>
          <CardContent>
            <div className={classes.controls}>
            <Grid container justify="center">
                <IconButton aria-label="previous" onClick={this.arrowClick} id="backward" disabled={this.state.current_image_index === 0}>
                  <ArrowLeftIcon />
                </IconButton>
                <IconButton aria-label="next" onClick={this.arrowClick} id="forward" disabled={this.state.current_image_index === this.num_images-1}>
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




