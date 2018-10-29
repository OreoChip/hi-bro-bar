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
    ),
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.6228186356466!2d-77.11888842822806!3d38.84109818124534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b3ee7e444e15%3A0x467faf683aa41f4a!2s3817+S+George+Mason+Dr%2C+Falls+Church%2C+VA+22041%2C+USA!5e0!3m2!1sen!2sin!4v1540838605864"
        title={'falls church'}
        frameBorder="0"
        style={{ border: 0, width: '100%', height: '100%' }}
        allowFullScreen
      />
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
    ),
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.139142481263!2d-77.1340592845694!3d38.806364979584735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b24f28154e2f%3A0x24a52602a720f3b1!2s510+S+Van+Dorn+St%2C+Alexandria%2C+VA+22304%2C+USA!5e0!3m2!1sen!2sin!4v1540838749798"
        title={'alexandria'}
        frameBorder="0"
        style={{ border: 0, width: '100%', height: '100%' }}
        allowFullScreen
      />
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
                <div className={classes.map}>
                  {location.iframe}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
