import ImageCard from "./ImageCard"
import Grid from "@material-ui/core/Grid"
import Box from '@material-ui/core/Box';

export default function Comparison() {
    return (
        <div>
            <Box my="6%">
                <Grid container direction="row" justify="space-evenly" alignItems="center">
                <ImageCard/>
                <ImageCard/>
                </Grid>
            </Box>
        </div>
    )
}
