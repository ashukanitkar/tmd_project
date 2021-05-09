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
      minHeight: 175,
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
    alignSelf: "center",
    marginTop: "30px",
    '&:hover': {
        backgroundColor: "#E9BD71",
    }
    },
    home: {
        display: "flex",
        flexDirection: "column",
        fontFamily: "Montserrat",
        fontWeight: "500",
        padding: "25px",
    },
    box: {
        alignSelf: "center"
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
        Let’s start by thinking about how we search and interact with information <strong>physically</strong>. 
        Libraries are a resource open to everyone, with lots of different kinds of books, and 
        librarians help you navigate the space.</p>
        </CardContent>
        </Card>
        </li>
      </ul>
    </section>
    <Box className={classes.box} my="3%">
    <Button variant="contained" endIcon={<NavigateNextIcon/>} component={Link} to="/playlists" className={classes.primaryButton}>
    Next</Button>
    </Box>
    </div>
        )
    }

}
export default withStyles(styles, {withTheme: true})(Home);
