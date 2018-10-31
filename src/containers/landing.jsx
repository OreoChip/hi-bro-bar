import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import PubSub from 'pubsub-js';

import Slider from 'react-slick';
import MastHead from 'components/masthead';
import Services from 'components/services';
import Careers from 'components/careers';
import Contact from 'components/contact';
import Specials from 'containers/specials';

import { styles } from 'jss/landing';

const slickSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

class Landing extends Component {
  overlayText = (
    <div className={this.props.classes.headingText}>
      <div className={this.props.classes.welcomeHeading}>
        Welcome to Hi Brow Bar
      </div>
      <div className={this.props.classes.welcomeText}>
        Hi Brow Bar of Falls Church and Alexandria, offers the best services at
        reasonable prices for your eyebrow threading, facial, waxing, beauty
        treatments, and other needs. <br/> Our excellent staff and facility is proudly
        serving customers for over 10 years. If you need special assistance, let
        us know and we will happy to take care.
      </div>
    </div>
  );

  scrollTo = component => {
    const domNode = ReactDOM.findDOMNode(component);
    if (domNode) domNode.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  componentWillMount() {
    this.scrollSubs = PubSub.subscribe('scrollTo', (topic, componentString) => {
      debugger;
      this.scrollTo(this[componentString]);
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.scrollSubs);
  }

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
        <div
          className={classNames(
            this.props.classes.main,
            this.props.classes.mainRaised,
            this.props.classes.topRaised
          )}
          ref={c => (this.mastHead = c)}
        >
          <div className={classNames(this.props.classes.container)}>
            <MastHead classes={this.props.classes} />
          </div>
        </div>
        <div
          className={classNames(this.props.classes.container)}
          ref={c => (this.services = c)}
        >
          <Services classes={this.props.classes} />
        </div>
        <div
          className={classNames(
            this.props.classes.main,
            this.props.classes.mainRaised,
            this.props.classes.raisedFull
          )}
          ref={c => (this.careers = c)}
        >
          <div className={classNames(this.props.classes.container)}>
            <Careers classes={this.props.classes} />
          </div>
        </div>
        <div
          className={classNames(this.props.classes.container)}
          ref={c => (this.contact = c)}
        >
          <Contact classes={this.props.classes} />
        </div>
        <Specials />
      </div>
    );
  }
}

export default withStyles(styles)(Landing);
