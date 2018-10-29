import image1 from 'assets/image2.jpg';
import image2 from 'assets/image3.jpg';
import image from 'assets/parallax.jpg';
import { container } from 'design-system/assets/jss/material-kit-react';

const slickStyles = {
  slick: {
    height: '600px',
    backgroundSize: '100% 100%'
  },
  slick1: {
    background: `url(${image})`
  },
  slick2: {
    background: `url(${image1})`
  },
  slick3: {
    background: `url(${image2})`
  }
};

const mastHeadStyles = {
  mastheadContainer: {
    paddingTop: 30
  }
};

const servicesStyles = {
  services: {
    marginTop: 80,
    boxShadow: 'none'
  },
  serviceImage: {
    height: 200
  },
  servicePadded: {
    paddingLeft: 20
  }
};

const careerStyles = {
  careersContainer: {
    maxWidth: 700,
    margin: 'auto'
  },
  careers: {
    boxShadow: 'none',
    marginTop: 70
  },
  careerDesc: {
    fontSize: 16,
    marginBottom: 20
  },
  careersHeading: {
    fontWeight: 'bold',
    marginBottom: 10
  },
  careersText: {
    marginBottom: 20
  }
};

const contactStyles = {
  contact: {},
  map: {
    height: 200,
    width: 300,
    border: '1px solid'
  },
  locationContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};

const basicStyles = {
  hr: {
    margin: '80px 80px 50px',
    borderColor: '#e8e8ea'
  },
  container: {
    zIndex: '12',
    color: '#FFFFFF',
    padding: 20,
    ...container
  },
  smallWidth: {
    paddingLeft: 100,
    paddingRight: 100
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 70px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  fontColor: {
    color: 'black',
    padding: '10px 0px',
    textAlign: 'center'
  },
  fontColor1: {
    color: 'black',
    paddingBottom: '20px',
    textAlign: 'center'
  },
  media: {
    height: 0,
    paddingTop: '50%'
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  fullPageSection: {
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  card: {
    width: '25%',
    margin: 20,
    boxSizing: 'border-box',
    textAlign: 'center'
  },
  cardServices: {
    width: '33%',
    margin: 20,
    boxSizing: 'border-box',
    textAlign: 'center'
  },
  icon: {
    color: '#000',
    fontSize: 50,
    margin: 20
  },
  locationIcon: {
    color: '#8e8ef3'
  },
  specialIcon: {
    color: '#e86c6c'
  },
  clockIcon: {
    color: '#70d470'
  },
  experienceIcon: {
    color: 'grey'
  },
  headingText: {
    width: '50%',
    position: 'absolute',
    top: 100,
    left: '10%',
    color: 'black',
    background: 'rgba(255, 255, 255, 0.60)',
    padding: 50,
    borderRadius: 5
  },
  h4: {
    marginTop: 0,
    textTransform: 'uppercase',
    fontSize: 35
  },
  sectionHeading: {
    fontSize: 40,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 60
  }
};

export const styles = {
  ...basicStyles,
  ...slickStyles,
  ...mastHeadStyles,
  ...servicesStyles,
  ...careerStyles,
  ...contactStyles
};
