/**
 * Created by abm on 27/10/18.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import ClockIcon from '@material-ui/icons/AccessTime';
import LocationIcon from '@material-ui/icons/LocationOn';
import SpecialIcon from '@material-ui/icons/Gesture';
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";

const options = [
  {
    imgSrc: PeopleIcon,
    heading: 'Experienced Team',
    text: 'A team with 10+ years of experience',
    className: 'experienceIcon'
  },
  {
    imgSrc: ClockIcon,
    heading: 'Timing',
    text: (
      <div>
        10:00AM – 8:00PM (Mon-Sat)
        <br /> 10:00AM – 6:00PM (Sunday)
      </div>
    ),
    className: 'clockIcon'
  },
  {
    imgSrc: LocationIcon,
    heading: 'Location',
    text: 'We are serving in Falls Church and Alexendria',
    className: 'locationIcon'
  },
  {
    imgSrc: SpecialIcon,
    heading: 'Special',
    text: 'Our attraction is $10 eye brow threading',
    className: 'specialIcon'
  }
];

export default class masthead extends Component {
  displayName = 'masthead';

  static propTypes = {
    classes: PropTypes.object
  };

  renderCard = (option, i) => {
    const Icon = option.imgSrc;
    const { classes } = this.props;
    return (
      <Card className={this.props.classes.card} key={`card-${i}`}>
        <CardActionArea>
          <CardContent>
            <Icon
              className={classNames(
                classes.icon,
                classes[option.className] || ''
              )}
            />
            <Typography gutterBottom variant="h6" component="h4">
              {option.heading}
            </Typography>
            <Typography component="p">{option.text}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classNames(classes.container)}>
          <div className={classes.cardsContainer}>
            {options.map(this.renderCard)}
          </div>
        </div>
      </div>
    );
  }
}
