import React, { Component } from 'react';
// nodejs library that concatenates classes
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';

// @material-ui/icons

// core components
import Slider from 'react-slick';
import image from 'assets/parallax.jpg'
import image1 from 'assets/image2.jpg'
import image2 from 'assets/image3.jpg'
import { container } from 'design-system/assets/jss/material-kit-react.jsx';

import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  slick1: {
    height: "600px",
    background: `url(${image})`,
    backgroundSize: "100% 100%"
  },
  slick2: {
    height: "600px",
    background: `url(${image1})`,
    backgroundSize: "100% 100%"
  },
  slick3: {
    height: "600px",
    background: `url(${image2})`,
    backgroundSize: "100% 100%"
  },
  container: {
    zIndex: '12',
    color: '#FFFFFF',
    padding: 20,
    ...container
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  fontColor: {
    color: 'black',
    padding: "20px 0px",
    textAlign: 'center'
  },
  fontColor1: {
    color: 'black',
    paddingBottom: "20px",
    textAlign: 'center'
  },
  media: {
    height: 0,
    paddingTop: '50%'
  },
  card: {
    width: "30%",
    margin: "3%" 
  },
  cardsContainer:{
    display: "flex",
    flexDirection: "row"
  }
});

class Landing extends Component {
  render() {
    const { classes } = this.props;
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className={classes.slick1}>
          </div>
          <div className={classes.slick2}>
          </div>
          <div className={classes.slick3}>
          </div>
        </Slider>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classNames(classes.container)}>
            <h2 className={classes.fontColor}> Welcome to Hi Brow Bar Threading Salon</h2>
            <Typography className={classes.fontColor1} variant="h5">
              We are offering you reasonable and best service for eye brow threading, facial & wax. You should visit any of our salons one time you will surely come next time, our experienced staff provides you 100% satisfaction, its our main goal to satisfy each and every customer whether its about eye brow threading, facial or waxing. You can contact us on any of the above numebers. We are known for excellent service at affordable price, we appreciate your interest in our service. We are serving two locations Falls Church and Alexendria.
            </Typography>
            <h2 className={classes.fontColor}> Our Services</h2>
            <div className={classes.cardsContainer}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={require('assets/eyeBrow.jpeg')}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Eye Brow Threading
                  </Typography>
                    <Typography component="p">
                    We recommend eyebrow threading as the best way to shape, trim and groom eyebrows. You get sharp, picture perfect eyebrows as a result.
                  </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                </Button>
                  <Button size="small" color="primary">
                    Learn More
                </Button>
                </CardActions>
              </Card>

              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={require('assets/waxing.jpg')}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Waxing
                  </Typography>
                    <Typography component="p">
                    There’s a ton of beauty salons that provide waxing services, yet our standards can be felt and seen from the moment you enter. 
                  </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                </Button>
                  <Button size="small" color="primary">
                    Learn More
                </Button>
                </CardActions>
              </Card>

              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={require('assets/facial.jpg')}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Facial
                  </Typography>
                    <Typography component="p">
                    Looking for an everyday facial without the need to overpay? BTW, we only serve women so you can relax in full privacy. You can book an appointment right away.
                  </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                </Button>
                  <Button size="small" color="primary">
                    Learn More
                </Button>
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default withStyles(styles)(Landing);
