/**
 * Created by abm on 27/10/18.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PubSub from 'pubsub-js';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import ClockIcon from '@material-ui/icons/AccessTime';
import LocationIcon from '@material-ui/icons/LocationOn';
import Card from '@material-ui/core/Card/Card';
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Typography from '@material-ui/core/Typography/Typography';

const options = [
  {
    imgSrc: PeopleIcon,
    heading: 'Experienced Specialists',
    text: 'Technicians with 10+ years of experience',
    className: 'experienceIcon',
    onClick: () => PubSub.publish('scrollTo', 'services')
  },
  {
    imgSrc: ClockIcon,
    heading: 'Timings',
    text: (
      <div>
        10:00 AM – 8:00 PM (Mon-Sat)
        <br /> 10:00 AM – 6:00 PM (Sunday)
      </div>
    ),
    className: 'clockIcon'
  },
  {
    imgSrc: LocationIcon,
    heading: 'Locations',
    text: 'Falls Church and Alexendria',
    className: 'locationIcon',
    onClick: () => PubSub.publish('scrollTo', 'contact')
  },
  {
    textSrc: '$10',
    heading: 'Special',
    text: '$10 eyebrow threading – everyday!',
    className: 'specialIcon',
    textStyle: { fontWeight: 900 }
  }
];

export default class masthead extends Component {
  displayName = 'masthead';

  static propTypes = {
    classes: PropTypes.object
  };

  createText = option => {
    const { classes } = this.props;
    return (
      <div
        className={classNames(classes.icon, classes[option.className] || '')}
        style={{ fontFamily: "'Rubik', sans-serif", fontSize: 43 }}
      >
        {option.textSrc}
      </div>
    );
  };

  renderCard = (option, i) => {
    const Icon = option.imgSrc || null;
    const { classes } = this.props;
    return (
      <Card
        className={this.props.classes.card}
        key={`card-${i}`}
        onClick={option.onClick || (() => {})}
      >
        <CardActionArea>
          <CardContent>
            {Icon ? (
              <Icon
                className={classNames(
                  classes.icon,
                  classes[option.className] || ''
                )}
              />
            ) : (
              this.createText(option)
            )}
            <div className={classes.mastheadSectionHeading}>
              {option.heading}
            </div>
            <Typography component="p">
              <div style={option.textStyle || {}}>{option.text}</div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div
        className={classNames(
          classes.cardsContainer,
          classes.mastheadContainer
        )}
      >
        {options.map(this.renderCard)}
      </div>
    );
  }
}
