import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import Slider from 'react-slick';
import image from 'assets/parallax.jpg';
import image1 from 'assets/image2.jpg';
import image2 from 'assets/image3.jpg';
import { container } from 'design-system/assets/jss/material-kit-react.jsx';
import MastHead from 'components/masthead';
import Services from 'components/services';

const styles = () => ({
  slick1: {
    height: '600px',
    background: `url(${image})`,
    backgroundSize: '100% 100%'
  },
  slick2: {
    height: '600px',
    background: `url(${image1})`,
    backgroundSize: '100% 100%'
  },
  slick3: {
    height: '600px',
    background: `url(${image2})`,
    backgroundSize: '100% 100%'
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
    padding: '10px 0px',
    textAlign: 'center'
  },
  fontColor1: {
    color: 'black',
    paddingBottom: '20px',
    textAlign: 'center'
  },
  media: {
    height: 0,
    paddingTop: '50%'
  },
  card: {
    width: '25%',
    margin: 20,
    boxSizing: 'border-box',
    textAlign: 'center'
  },
  cardServices: {
    width: '33%',
    margin: 20,
    boxSizing: 'border-box',
    textAlign: 'center'
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  icon: {
    color: '#000',
    fontSize: 50,
    margin: 20
  },
  locationIcon: {
    color: '#8e8ef3'
  },
  specialIcon: {
    color: '#e86c6c'
  },
  clockIcon: {
    color: '#70d470'
  },
  experienceIcon: {
    color: 'grey'
  },
  headingText: {
    width: '50%',
    position: 'absolute',
    top: 100,
    left: '10%',
    color: 'black',
    background: 'rgba(255, 255, 255, 0.60)',
    padding: 50,
    borderRadius: 5
  },
  h4: {
    marginTop: 0,
    textTransform: 'uppercase',
    fontSize: 35
  },
  services: {
    marginTop: 80,
    boxShadow: 'none'
  },
  serviceImage: {
    height: 200
  sectionHeading: {
    fontSize: 40,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 60
  },
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
      arrows: false
    };
    return (
      <div>
        <Slider {...settings}>
          <div className={classes.slick1} />
          <div className={classes.slick2} />
          <div className={classes.slick3} />
        </Slider>
        <div className={classes.headingText}>
          <h4 className={classes.h4}>
            Welcome to
            <br />
            Hi Brow Threading Solution
          </h4>
          <div>
            <p>
              Hi Brow Bar of Falls Church and Alexandria, offers the best
              services at reasonable prices for your eyebrow threading, facial,
              waxing, beauty treatments, and other needs. Our excellent staff
              and facility is proudly serving customers for over 10 years. If
              you need special assistance, let us know and we will happy to take
              care.
            </p>
            <p>
              We have great reviews and feedback from our customers, have lot of
              returning clientele, and provide 100% satisfaction for services.
            </p>
            <p>
              Call in or simply walk-in, relax, and let our professional and
              highly trained staff take care of the rest.
            </p>
          </div>
        </div>
        <MastHead classes={classes} />
        <Services classes={classes} />
      </div>
    );
  }
}

export default withStyles(styles)(Landing);
