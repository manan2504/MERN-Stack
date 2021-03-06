
import Carousel from 'react-material-ui-carousel';
import { bannerData } from '../../constants/data';
import { makeStyles, Slide } from '@material-ui/core'



const useStyle = makeStyles({
    image: {
        width: '100%',
        height: 280,
    },
    carousel: {
        marginTop:10,
    }

})

const Banner = () => {
    const classes = useStyle();
    return (
        <Carousel
            autoPlay={true}
            animation='slide'
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style: {
                    background: '#FFFFFF',
                    color: '#494949',
                    borderRadius: 0,
                    margin: 0,
                    width: '46px',
                    height: 104,
                    
                }
            }}
             className={classes.carousel} // for margin space between nav and banner
        >
            {
                bannerData.map(image => (
                    <img src={image} className = {classes.image} />
                ))
            }
        </Carousel>
    )
}
export default Banner;

