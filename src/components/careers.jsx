/**
 * Created by abm on 27/10/18.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const options = [
  {
    texts: [
      'If you have passion for skin care, beauty, and facial treatment, we are looking for you. Full-time or part-time, both types of opportunities are available. Contact us and be part of our ever-growing great team!'
    ],
    style: { marginBottom: 40 }
  },
  {
    heading: 'Threading Specialists',
    texts: [
      'Must have experience or know how to do eyebrow threading with a string.',
      'If you have basic experience, we are open to train you.'
    ]
  },
  {
    heading: 'Waxing/ Cosmetologists Technicians',
    texts: [
      'Must know basic procedures for eyebrow and body waxing, eyebrow tinting, and facial.'
    ]
  },
  {
    texts: [
      <div>
        Please call us at (202) 492-4444, or (703) 618-4464; or{' '}
        <a
          href="mailto:raj.bhanot1@yahoo.com?subject=Interested to join Hi Brow Bar"
          style={{ color: 'white' }}
        >
          email us
        </a>
        !
      </div>
    ],
    style: { marginTop: 40 }
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
      <div
        className={classNames(
          classes.fullPageSection,
          classes.careersContainer
        )}
      >
        <div
          className={classNames(classes.sectionHeading, classes.whiteHeading)}
        >
          Careers
        </div>
        <div className={classes.careersTextColor}>
          {options.map((option, i) => (
            <div style={option.style || {}}>
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
            </div>
          ))}
        </div>
      </div>
    );
  }
}
