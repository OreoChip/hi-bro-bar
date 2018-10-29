/**
 * Created by abm on 27/10/18.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card/Card';
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Typography from '@material-ui/core/Typography/Typography';

import image1 from 'assets/threading.jpg';
import image2 from 'assets/waxing.jpg';
import image3 from 'assets/facial.jpg';

const cards = [
  {
    img: image1,
    heading: 'Threading',
    options: [
      { text: 'Eye Brow Threading', price: 10 },
      { text: 'Upper Lip', price: 6 },
      { text: 'Lower Lip', price: 2 },
      { text: 'Forehead', price: 6 },
      { text: 'Chin', price: 8 },
      { text: 'Side Bum', price: 12 },
      { text: 'Full Face', price: 30 },
      { text: ' - with neck (extra)', price: 6 }
    ]
  },
  {
    img: image2,
    heading: 'Wax',
    options: [
      { text: 'Under Arm', price: 10 },
      { text: 'Arm & Under Arm', price: 25 },
      { text: 'Half Arm', price: 20 },
      { text: 'Half Leg', price: 30 },
      { text: 'Full Leg', price: 40 },
      { text: 'Full Leg & Arm', price: 75 },
      { text: 'Full Brazilian', price: 45 },
      { text: 'Bikini Line', price: 25 },
      { text: 'Full Body', price: 160 }
    ]
  },
  {
    img: image3,
    sections: [
      {
        heading: 'Facials',
        options: [
          { text: 'Herbal Facial', price: 45 },
          { text: 'Gold Facial', price: 65 }
        ]
      },
      {
        heading: 'Others',
        options: [
          { text: 'Eye Brow Tinting', price: 15 },
          { text: 'Eyelash Extensions', price: 30 },
          { text: 'Micro Blading', price: 200 }
        ]
      }
    ]
  }
];

export default class services extends Component {
  displayName = 'services';

  static propTypes = {
    classes: PropTypes.object
  };

  renderBlock = (option, i) => {
    const { classes } = this.props;
    return (
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h4">
            {option.heading}
          </Typography>
          {option.options.map((optionDesc, idx) => {
            return (
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
                <Typography key={`block-${i}-${idx}-text`} className={optionDesc.extra ? classes.servicePadded : ''}>{optionDesc.text}</Typography>
                <Typography key={`block-${i}-${idx}-price`}>${optionDesc.price}</Typography>
              </div>
            )
          })}
        </CardContent>
      </CardActionArea>
    );
  };

  renderCard = (option, i) => {
    const { classes } = this.props;
    return (
      <Card className={classes.cardServices} key={`card-${i}`}>
        <CardMedia image={option.img} className={classes.serviceImage} />
        {option.sections
          ? option.sections.map(this.renderBlock)
          : this.renderBlock(option, i)}
      </Card>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.sectionHeading}>Services</div>
        <div className={classes.cardsContainer}>
          {cards.map(this.renderCard)}
        </div>
      </React.Fragment>
    );
  }
}
