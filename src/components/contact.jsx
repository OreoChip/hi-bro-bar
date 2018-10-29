/**
 * Created by abm on 28/10/18.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const locations = [
  {
    location: 'Falls Church',
    address: (
      <div>
        3817-D, S George Mason Drive
        <br />
        Falls Church, VA 22041
        <br />
        (703) 618-4464
        <br />
        (703) 931-0680
      </div>
    )
  },
  {
    location: 'Alexandria',
    address: (
      <div>
        510-A, S Van Dorn Street
        <br />
        Alexandria, VA 22304
        <br />
        (703) 618-4464
        <br />
        (703) 623-2241
      </div>
    )
  }
];

export default class contact extends Component {
  displayName = 'contact';

  static propTypes = {
    classes: PropTypes.object
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classNames(classes.fullPageSection, classes.smallWidth)}>
        <div className={classes.sectionHeading}>Contact</div>
        <div style={{ color: 'black' }}>
          <div className={classes.careerDesc}>
            Proudly Serving Falls Church and Alexandria locations, 7 days a
            week!
          </div>
          <div className={classes.locationContainer}>
          {locations.map((location, i) => (
            <div key={`contact-section-${i}`}>
              <div className={classes.careersHeading}>
                {location.location}
              </div>
              <div className={classes.careersText}>{location.address}</div>
              <div className={classes.map}>MAP HERE</div>
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }
}
