import { Box, Button, makeStyles } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";


const useStyle = makeStyles({
    login: {
        background: '#ffffff',
        color : '2874f0',
    }

})

const HeaderButtons = () => {
    const classes = useStyle();
    return (
        <Box>
            <Button variant= "contained" className={mergeClasses.login}>Login</Button>
        </Box>

    )
};

export default HeaderButtons;
