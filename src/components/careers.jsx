/**
 * Created by abm on 27/10/18.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const options = [
  {
    heading: 'Threading Specialist',
    texts: [
      'Must have experience or know how to do eyebrow threading with a string.',
      'If you have basic experience, we are open to train you.'
    ]
  },
  {
    heading: 'Waxing/ Cosmetologists Technician',
    texts: [
      'Must know basic procedures for eyebrow and body waxing, makeup application, manicures, pedicures,\n' +
        'and eyelash extensions.'
    ]
  }
];

export default class careers extends Component {
  displayName = 'careers';

  static propTypes = {
    classes: PropTypes.object
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.sectionHeading}>Careers</div>
        <div style={{ color: 'black' }}>
          <div className={classes.careerDesc}>
            If you have passion for skin care, beauty, and facial treatment, we
            are looking for you. Full-time or part-time, both types of
            opportunities are available. Contact us and be part of our
            ever-growing great team!
          </div>
          {options.map((option, i) => (
            <React.Fragment>
              <div
                className={classes.careersHeading}
                key={`careers-section-${i}`}
              >
                {option.heading}
              </div>
              <div className={classes.careersText}>
                {option.texts.map((text, idx) => (
                  <div key={`careers-section-${i}-${idx}`}>{text}</div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
