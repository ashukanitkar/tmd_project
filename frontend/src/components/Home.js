import React from "react";
import {Button} from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {useHistory} from "react-router-dom";

const Home = () => {
    const history = useHistory();
    const navigateTo = () => history.push('/playlists');

    return (
        <div>
            <h2>
                welcome! we need to add some educational content here that users can read
                through before they go onto selecting playlists

                <br/>
                <br/>

                Click next to get started on selecting a playlist.
            </h2>

            <Button variant="contained" endIcon={<NavigateNextIcon/>} onClick={navigateTo}>
                Next
            </Button>

        </div>
    );
}

export default Home

