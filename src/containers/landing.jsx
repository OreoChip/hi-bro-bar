import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PubSub from 'pubsub-js';

import Slider from 'react-slick';
import MastHead from 'components/masthead';
import Services from 'components/services';
import Careers from 'components/careers';
import Contact from 'components/contact';
import Specials from 'containers/specials';

const slickSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

export const locationsBold = { fontWeight: 900, fontStyle: 'italic' };

export default class Landing extends Component {
  overlayText = (
    <div
      className={classNames(
        this.props.classes.headingText,
        'd-none',
        'd-lg-block'
      )}
    >
      <div className={this.props.classes.welcomeHeading}>
        Welcome to Hi Brow Bar
      </div>
      <div
        className={classNames(
          this.props.classes.welcomeText,
          'd-none',
          'd-lg-block'
        )}
      >
        <div style={{ marginBottom: 10 }}>
          Hi Brow Bar of <span style={locationsBold}>Falls Church</span> and{' '}
          <span style={locationsBold}>Alexandria</span>, offers the best
          services at reasonable prices for your eyebrow threading, facial,
          waxing, beauty treatments, and other needs.
        </div>
        <div>
          Our excellent staff and facility is proudly serving customers for over
          10 years. If you need special assistance, let us know and we will
          happy to take care.
        </div>
      </div>
    </div>
  );

  scrollTo = component => {
    const domNode = ReactDOM.findDOMNode(component);
    if (domNode) domNode.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  componentWillMount() {
    this.scrollSubs = PubSub.subscribe('scrollTo', (topic, componentString) => {
      this.scrollTo(this[componentString]);
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.scrollSubs);
  }

  render() {
    const { classes } = this.props;
    return (
      <div ref={c => (this.home = c)}>
        <Slider {...slickSettings} className={classes.slickContainer}>
          <div className={classNames(classes.slick, classes.slick1)} />
          <div className={classNames(classes.slick, classes.slick2)} />
          <div className={classNames(classes.slick, classes.slick3)} />
        </Slider>
        {this.overlayText}
        <div
          className={classNames(
            classes.main,
            classes.mainRaised,
            classes.topRaised
          )}
          ref={c => (this.mastHead = c)}
        >
          <div className={classNames(classes.container)}>
            <MastHead classes={classes} />
          </div>
        </div>
        <div
          className={classNames(classes.container)}
          ref={c => (this.services = c)}
        >
          <Services classes={classes} />
        </div>
        <div
          className={classNames(
            classes.main,
            classes.mainRaised,
            classes.raisedFull,
            classes.careersCard
          )}
          ref={c => (this.careers = c)}
        >
          <div className={classNames(classes.container)}>
            <Careers classes={classes} />
          </div>
        </div>
        <div
          className={classNames(classes.container, classes.contactContainer)}
          ref={c => (this.contact = c)}
        >
          <Contact classes={classes} />
        </div>
        <Specials />
      </div>
    );
  }
}
