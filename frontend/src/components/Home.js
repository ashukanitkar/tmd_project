// import React from "react";
// import {Button} from "@material-ui/core";
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import {useHistory} from "react-router-dom";
// import makeStyles from "@material-ui/core/styles/makeStyles";

// const useStyles = makeStyles({
//     primaryButton: {
//         background: "#ecc787",
//         fontFamily: "Montserrat",
//         fontWeight: "600",
//         alignSelf: "center",
//         marginTop: "30px",
//         '&:hover': {
//             backgroundColor: "#E9BD71",
//         },
//     },

//     home: {
//         display: "flex",
//         flexDirection: "column",
//         fontFamily: "Montserrat",
//         fontWeight: "500",
//         padding: "25px",
//     }
// });

// const Home = () => {
//     const history = useHistory();
//     const navigateTo = () => history.push('/playlists');
//     const classes = useStyles();

//     return (
//         <div className={classes.home}>
//             <br/>
//             <br/>
//             Let’s start by thinking about how we search and interact with information, physically. 
//             Libraries are a resource open to everyone, with lots of different kinds of books, and librarians 
//             to help you navigate the space.
//             <br/>
//             <br/>
//             There are a couple important points to note here. 
            
//             <ol>
//             <li>You, and the rest of the public, have access to the entire library, whether that be 1 or 7 floors. </li>
//             <li>Library books, no matter who picks them up, always have the same content. </li>
//             <li>When asking librarians for help, they rely on the direct information you provide to give you a recommendation.</li>
//             </ol>

//             <p>Now moving onto <strong>digital spaces</strong>: the internet.</p>

//             <p>When we go on the internet, what each of us sees and has access to is not the same. 
//             Algorithms decide what to show you every time you access the internet. 
//             Whether that be when you make a search on Youtube, explore Instagram, catch up with friends on Facebook, 
//             or want to buy something on Amazon. </p>

//             <p>
//             These algorithms aim to maximize engagement by using a number of factors about you to display content 
//             they predict you would most likely consume (what you would like to see, what you would most likely click on, 
//             what would lead you to engage more with the platform). These factors may include your past interaction 
//             history, interests, demographic, locations, etc…
//             </p>

//             <p>
//             Over time, as you engage more and more with the content that the algorithms have catered and presented, 
//             these platforms become more personalized. This leads to a sense of tunnel vision, where you are in your own
//             bubble of information isolated from often any opposing or different content and views.</p>

//             <p>
//             This phenomenon is called a <strong>filter bubble</strong>: a sense of intellectual isolation from the perspectives you have
//             not already expressed an interest in. </p>

//             <p>
//             On this site, we will use Youtube recommendations as an example to show you how filter bubbles appear on the
//             internet and their resulting impact.
//             </p>

//             <Button
//                 variant="contained"
//                 endIcon={<NavigateNextIcon/>}
//                 onClick={navigateTo}
//                 className={classes.primaryButton}>
//                 Next
//             </Button>

//         </div>
//     );
// }

// export default Home

import React from "react";
import  "./scroll.scss"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import CardActions from '@material-ui/core/CardActions';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {withStyles} from "@material-ui/core/styles";


const styles = theme => ({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
        this.callbackFunc = this.callbackFunc.bind(this);
    }

    //items = document.querySelectorAll(".timeline li");

    isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    }

    callbackFunc() {
        console.log("in callback")
        console.log("items", this.state.items)
    for (var i = 0; i < this.state.items.length; i++) {
        if (this.isElementInViewport(this.state.items[i])) {
        if(!this.state.items[i].classList.contains("in-view")){
            this.state.items[i].classList.add("in-view");
        }
        } else if(this.state.items[i].classList.contains("in-view")) {
            this.state.items[i].classList.remove("in-view");
        }
    }
    }
    
    componentDidMount = () => {
        let newItems = document.querySelectorAll(".timeline li");
        this.state.items = newItems
        console.log("items", this.state.items, "in mount")
        window.addEventListener("load", this.callbackFunc);
        window.addEventListener("scroll", this.callbackFunc);
    }

    componentWillUnmount = () => {
        window.removeEventListener("load", this.callbackFunc);
        window.removeEventListener("scroll", this.callbackFunc)
    }
    
    render() {
        const {classes, theme} = this.props;

        return (
    <section class="timeline">
      <ul>
        <li>
        <Card className={classes.root}>
        <CardContent>
        <p>
        Let’s start by thinking about how we search and interact with information <strong>physically</strong>. 
        Libraries are a resource open to everyone, with lots of different kinds of books, and 
        librarians help you navigate the space.</p>
        </CardContent>
        </Card>
        </li>
        <li>
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          benevolent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </li>
        <li>
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          benevolent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </li>
        <li>
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          benevolent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </li>
        <li>
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          benevolent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </li>
        <li>
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          benevolent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </li>
        <li>
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          benevolent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </li>
        <li>
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          benevolent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </li>
        <li>
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          benevolent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </li>
        <li>
          <div>
            <time>1905</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>
                Principle of Relativity
              </p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Albert Einstein</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1905</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>
                Photo electric effect
              </p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Albert Einstein</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1942</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>
                Nuclear Reactor
              </p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Anrico Fermi</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
        )
    }

}
//export default Home;
export default withStyles(styles, {withTheme: true})(Home);
