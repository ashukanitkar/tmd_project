import React from "react";
import {Button} from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {useHistory} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    primaryButton: {
        background: "#ecc787",
        fontFamily: "Montserrat",
        fontWeight: "600",
        alignSelf: "center",
        marginTop: "30px",
        '&:hover': {
            backgroundColor: "#E9BD71",
        },
    },

    home: {
        display: "flex",
        flexDirection: "column",
        fontFamily: "Montserrat",
        fontWeight: "500",
        padding: "25px",
    }
});

const Home = () => {
    const history = useHistory();
    const navigateTo = () => history.push('/playlists');
    const classes = useStyles();

    return (
        <div className={classes.home}>
            <br/>
            <br/>
            Let’s start by thinking about how we search and interact with information, physically. 
            Libraries are a resource open to everyone, with lots of different kinds of books, and librarians 
            to help you navigate the space.
            <br/>
            <br/>
            There are a couple important points to note here. 
            
            <ol>
            <li>You, and the rest of the public, have access to the entire library, whether that be 1 or 7 floors. </li>
            <li>Library books, no matter who picks them up, always have the same content. </li>
            <li>When asking librarians for help, they rely on the direct information you provide to give you a recommendation.</li>
            </ol>

            <p>Now moving onto <strong>digital spaces</strong>: the internet.</p>

            <p>When we go on the internet, what each of us sees and has access to is not the same. 
            Algorithms decide what to show you every time you access the internet. 
            Whether that be when you make a search on Youtube, explore Instagram, catch up with friends on Facebook, 
            or want to buy something on Amazon. </p>

            <p>
            These algorithms aim to maximize engagement by using a number of factors about you to display content 
            they predict you would most likely consume (what you would like to see, what you would most likely click on, 
            what would lead you to engage more with the platform). These factors may include your past interaction 
            history, interests, demographic, locations, etc…
            </p>

            <p>
            Over time, as you engage more and more with the content that the algorithms have catered and presented, 
            these platforms become more personalized. This leads to a sense of tunnel vision, where you are in your own
            bubble of information isolated from often any opposing or different content and views.</p>

            <p>
            This phenomenon is called a <strong>filter bubble</strong>: a sense of intellectual isolation from the perspectives you have
            not already expressed an interest in. </p>

            <p>
            On this site, we will use Youtube recommendations as an example to show you how filter bubbles appear on the
            internet and their resulting impact.
            </p>

            <Button
                variant="contained"
                endIcon={<NavigateNextIcon/>}
                onClick={navigateTo}
                className={classes.primaryButton}>
                Next
            </Button>

        </div>
    );
}

export default Home

