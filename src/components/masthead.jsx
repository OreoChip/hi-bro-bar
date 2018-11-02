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
    heading: 'Experienced Team',
    text: 'Technicians with 10+ years of experience',
    color: 'grey',
    textStyle: { fontSize: "0.92rem" },
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
    textStyle: { fontSize: "0.92rem" },
    color: '#70d470'
  },
  {
    imgSrc: LocationIcon,
    heading: 'Locations',
    text: 'Falls Church and Alexandria',
    color: '#8e8ef3',
    textStyle: { fontSize: "0.92rem" },
    onClick: () => PubSub.publish('scrollTo', 'contact')
  },
  {
    textSrc: '$10',
    text: 'Eyebrow threading – everyday!',
    color: '#e86c6c',
    textStyle: { fontWeight: 900, fontSize: '120%' },
    cardStyle: { boxShadow: '5px 5px 58px #0a0a2f' }
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
        style={{
          fontFamily: "'Rubik', sans-serif",
          fontSize: 43,
          color: option.color
        }}
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
        style={option.cardStyle || {}}
      >
        <CardActionArea>
          <CardContent>
            {Icon ? (
              <Icon
                className={classNames(classes.icon)}
                style={{ color: option.color }}
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
