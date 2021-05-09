import React from "react";
import  "./scroll.scss"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Link} from "react-router-dom"
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core/styles";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Box from '@material-ui/core/Box';



const styles = theme => ({
    root: {
      minWidth: 275,
      height: 190,
      borderColor: "#ecc787"
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
    primaryButton: {
    background: "#ecc787",
    fontFamily: "Montserrat",
    fontWeight: "600",
    marginTop: "30px",
    margin: "auto",
    '&:hover': {
        backgroundColor: "#E9BD71",
    },
    display: "inline-block"
    },
    home: {
        display: "flex",
        flexDirection: "column",
        fontFamily: "Montserrat",
        fontWeight: "500",
        padding: "25px",
    },
    box: {
        alignSelf: "center",
        textAlign: "center"
    },
    ok: {
        margin: 'auto'
    }
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
            <div className={classes.home}>
    <section class="timeline">
      <ul>
        <li>
        <Card variant="outlined" className={classes.root}>
        <CardContent>
        <p>
        Let’s start by thinking about how we search and interact with information <strong>physically</strong>. 
        Libraries are a resource open to everyone, with lots of different kinds of books, and 
        librarians help you navigate the space.</p>
        </CardContent>
        </Card>
        </li>
        <li>
        <Card variant="outlined" className={classes.root}>
        <CardContent>
        <p>
        There are <strong>three</strong> important points to note here: 
        </p>
        </CardContent>
        </Card>
        </li>
        <li>
        <Card variant="outlined" className={classes.root}>
        <CardContent>
        <p>
            1. You, and the rest of the public, <strong>have access</strong> to the entire library, whether that be 1 or 7 floors. 
        </p>
        </CardContent>
        </Card>
        </li>
        <li>
        <Card variant="outlined" className={classes.root}>
        <CardContent>
        <p>
        2. Library books, no matter who picks them up, always have the <strong>same content</strong>.<br/>
        </p>
        </CardContent>
        </Card>
        </li>
        <li>
        <Card variant="outlined" className={classes.root}>
        <CardContent>
        <p>
        3. Librarians rely on the <strong>direct information</strong> you provide to give you a recommendation.</p>
        </CardContent>
        </Card>
        </li>
        <li>
        <Card variant="outlined" className={classes.root}>
        <CardContent>
        <p>
        Now moving onto <strong>digital spaces</strong>: the internet.
        </p>
        </CardContent>
        </Card>
        </li>
        <li>
        <Card variant="outlined" className={classes.root}>
        <CardContent>
        <p>
        When we go on the internet, what each of us sees and has access to is <strong>not the same</strong> -- 
        whether that be when you make a search on Youtube, explore Instagram, 
        or want to buy something on Amazon, it's all different because algorithms dictate what you see.</p>
        </CardContent>
        </Card>
        </li>
        <li>
        <Card variant="outlined" className={classes.root}>
        <CardContent>
        <p>
        These algorithms aim to maximize engagement by using a number of factors about you to display 
        content they <strong>predict</strong> you would most likely consume. These factors may 
        include your past interaction history, interests, demographic, locations, etc..
        </p>
        </CardContent>
        </Card>
        </li>
        <li>
        <Card variant="outlined" className={classes.root}>
        <CardContent>
        <p>
        Over time, as you engage more with the algorithmically presented content,
        these platforms become <strong>more personalized</strong>. This leads to a sense of tunnel vision, where you are in your 
        own bubble of information isolated from often any opposing / different content and views.
        </p>
        </CardContent>
        </Card>
        </li>
        <li>
        <Card variant="outlined" className={classes.root}>
        <CardContent>
        <p>
        This phenomenon is called a <strong>filter bubble</strong>: a sense of intellectual isolation from the perspectives you 
        have not already expressed an interest in. In summary and unlike physical spaces:
        </p>
        </CardContent>
        </Card>
        </li>
        <li>
        <Card variant="outlined" className={classes.root}>
        <CardContent>
        <p>
        You, and the rest of the public, <strong>do not</strong> have access to the entire internet
        </p>
        </CardContent>
        </Card>
        </li>
        <li>
        <Card variant="outlined" className={classes.root}>
        <CardContent>
        <p>
        Digital content <strong>changes</strong> based on the user.
        </p>
        </CardContent>
        </Card>
        </li>
        <li>
        <Card variant="outlined" className={classes.root}>
        <CardContent>
        <p>
        Algorithms rely on a number of factors beyond what you directly asked 
        for to make recommendations, with <strong>limited transparency</strong> on how they actually work.
        </p>
        </CardContent>
        </Card>
        </li>
      </ul>
    </section>
    <Box className={classes.box} my="3%">
    <p className={classes.ok}>
    On this site, we will use Youtube recommendations as an example to show you how filter bubbles appear on the internet and their resulting impact.
    </p>
    <Button variant="contained" endIcon={<NavigateNextIcon/>} component={Link} to="/playlists" className={classes.primaryButton}>
    Next</Button>
    </Box>
    </div>
        )
    }

}
export default withStyles(styles, {withTheme: true})(Home);
