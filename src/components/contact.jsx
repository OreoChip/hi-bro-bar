/**
 * Created by abm on 28/10/18.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const locationsAndTimings = [
  {
    title: 'Timings',
    timing: (
      <div>
        10:00 AM – 8:00 PM (Mon-Sat)
        <br /> 10:00 AM – 6:00 PM (Sunday)
      </div>
    ),
    classes: 'col-lg-12 d-lg-none'
  },
  {
    title: 'Falls Church',
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
    ),
    classes: 'col-lg-4 col-xs-12'
  },
  {
    title: 'Alexandria',
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
    ),
    classes: 'col-lg-4 col-xs-12'
  },
  {
    title: 'Falls Church',
    address: (
      <div>
        6134-E, Arlington Blvd
        <br />
        Falls Church, VA 22041
        <br />
        <span style={{ color: 'rgb(232, 108, 108)' }}>Coming Soon!</span>
        <br />
        &nbsp;
      </div>
    ),
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6212.941935256778!2d-77.1468888479885!3d38.86746523156118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b462e1dc451b%3A0x800b498be46781b4!2s6134%20Arlington%20Blvd%2C%20Seven%20Corners%2C%20VA%2022044!5e0!3m2!1sen!2sus!4v1573234267960!5m2!1sen!2sus"
        title={'alexandria'}
        frameBorder="0"
        style={{ border: 0, width: '100%', height: '100%' }}
        allowFullScreen
      />
    ),
    classes: 'col-lg-4 col-xs-12'
  }
];

const locationsBold = { fontWeight: 900 };

export default class contact extends Component {
  displayName = 'contact';

  static propTypes = {
    classes: PropTypes.object
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classNames(classes.fullPageSection)}>
        <div
          className={classNames(classes.sectionHeading, classes.marginBottom20)}
        >
          Contact
        </div>
        <div style={{ color: '#2d2d2d', textAlign: 'center' }}>
          <div className={classes.careerDesc}>
            Proudly Serving <span style={locationsBold}>Falls Church</span> and{' '}
            <span style={locationsBold}>Alexandria</span> locations, 7 days a
            week!
            <br />
            <div className={classNames(classes.careersHeading, classes.marginTop50)}>Timings</div>
            <div>
              10:00 AM – 8:00 PM (Mon-Sat)
              <br /> 10:00 AM – 6:00 PM (Sunday)
            </div>
          </div>
          <div
            className={classNames(
              classes.locationContainer,
              'row',
              'flex-row',
              'flex-wrap'
            )}
          >
            {locationsAndTimings.map((location, i) => (
              <div
                key={`contact-section-${i}`}
                className={classNames(
                  location.classes,
                  classes.contactColWrapper
                )}
              >
                <div className={classes.careersHeading}>{location.title}</div>
                <div className={classes.careersText}>
                  {location.address ? location.address : location.timing}
                </div>
                {location.iframe ? (
                  <div className={classes.map}>{location.iframe}</div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
