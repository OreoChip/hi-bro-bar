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
    paddingTop: 30,
    textAlign: 'center'
  },
});

class Landing extends Component {
  render() {
    const { classes } = this.props;
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
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
          <div className={classes.slick}>
          </div>
          <div className={classes.slick}>
          </div>
        </Slider>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classNames(classes.container)}>
            <h2 className={classes.fontColor}> Best Sellers</h2>
          </div>
        </div>
      </div >
    );
  }
}

export default withStyles(styles)(Landing);
