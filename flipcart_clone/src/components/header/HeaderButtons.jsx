import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import {ShoppingCart} from '@material-ui/icons';



const useStyle = makeStyles({
    login: {
        background: '#FFFFFF',
        color: '#2874F0',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
       boxShadow: 'none',
    },
    wrapper: {
        margin: ' 0 7% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            fontSize: 12,
            alignItems: 'centre',
        }
    },
    container: {
        display: 'flex',

        
    }


})

const HeaderButtons = () => {
    const classes = useStyle();
    return (
        <Box className={classes.wrapper}>
            <Button variant="contained" className={classes.login}>Login</Button>
            <Typography style={{marginTop:5}}>More</Typography>
            <Box className={classes.container}>

                <Badge badgeContent={2} color="secondary">
                    <ShoppingCart />
                </Badge>
                 <Typography style={{marginLeft: 10}}>Cart</Typography>
            </Box>
        </Box>

    )
};

export default HeaderButtons;
