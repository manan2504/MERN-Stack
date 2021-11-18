
import { Box, makeStyles } from "@material-ui/core";
//components...
import NavBar from "./NavBar";
import Banner from "./Banner";


const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'

    }
})

const Home = () => {
    const classes = useStyle();
    return (
        <div>
            <NavBar />
            <Box className = {classes.component} >
        <Banner />
        </Box>
        </div>
    )
};

export default Home;