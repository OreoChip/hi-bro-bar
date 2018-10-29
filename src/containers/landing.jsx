import React, { Component } from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

import Slider from 'react-slick';
import MastHead from 'components/masthead';
import Services from 'components/services';
import Careers from 'components/careers';
import Contact from 'components/contact';

import { styles } from 'jss/landing';

const slickSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

class Landing extends Component {
  overlayText = (
    <div className={this.props.classes.headingText}>
      <div className={this.props.classes.welcomeHeading}>
        HI Brow Threading Solution
      </div>
      <div>
        <p>
          Hi Brow Bar of Falls Church and Alexandria, offers the best services
          at reasonable prices for your eyebrow threading, facial, waxing,
          beauty treatments, and other needs. Our excellent staff and facility
          is proudly serving customers for over 10 years. If you need special
          assistance, let us know and we will happy to take care.
        </p>
        <p>
          We have great reviews and feedback from our customers, have lot of
          returning clientele, and provide 100% satisfaction for services.
        </p>
        <p>
          Call in or simply walk-in, relax, and let our professional and highly
          trained staff take care of the rest.
        </p>
      </div>
    </div>
  );

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Slider {...slickSettings}>
          <div className={classNames(classes.slick, classes.slick1)} />
          <div className={classNames(classes.slick, classes.slick2)} />
          <div className={classNames(classes.slick, classes.slick3)} />
        </Slider>
        {this.overlayText}
        <div className={classNames(classes.main, classes.mainRaised, classes.topRaised)}>
          <div className={classNames(classes.container)}>
            <MastHead classes={classes} />
          </div>
        </div>
        <div className={classNames(classes.container)}>
          <Services classes={classes} />
        </div>
        <div className={classNames(classes.main, classes.mainRaised, classes.raisedFull)}>
          <div className={classNames(classes.container)}>
            <Careers classes={classes} />
          </div>
        </div>
        <div className={classNames(classes.container)}>
          <Contact classes={classes} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Landing);
