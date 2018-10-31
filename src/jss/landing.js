import { container } from 'design-system/assets/jss/material-kit-react';
import image1 from 'assets/image1.jpg';
import image2 from 'assets/image2.jpg';
import image3 from 'assets/image3.jpg';

const slickStyles = {
  slick: {
    height: '600px',
    backgroundSize: '100% 100%'
  },
  slick1: {
    background: `url(${image1})`
  },
  slick2: {
    background: `url(${image2})`
  },
  slick3: {
    background: `url(${image3})`
  }
};

const mastHeadStyles = {
  mastheadContainer: {
    padding: '15px 0'
  },
  mastheadSectionHeading: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '18px',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '500',
    lineHeight: '1.6',
    letterSpacing: '0.0075em',
  }
};

const servicesStyles = {
  services: {
    marginTop: 80,
    marginBottom: 40,
    boxShadow: 'none'
  },
  serviceImage: {
    height: 200
  },
  servicePadded: {
    paddingLeft: 10
  },
  textFont:{
    fontFamily: 'Alegreya Sans, sans-serif'
  },
  servicesHeader:{
    fontFamily: 'Alegreya Sans, sans-serif',
    fontWeight: "bold"
  }
};

const careerStyles = {
  careersCard: {
    background: '#8e8ef3',
    borderRadius: 0
  },
  careersContainer: {
    maxWidth: 700,
    margin: 'auto'
  },
  careers: {
    boxShadow: 'none',
    marginTop: 70
  },
  careerDesc: {
    marginTop: -15,
    marginBottom: 50
  },
  careersHeading: {
    fontWeight: 'bold'
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
    boxShadow: '3px 5px 5px #888888'
  },
  locationContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contactContainer: {
    paddingBottom: 50
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
    margin: '0px 70px 0px',
    borderRadius: '6px',
    boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.14)'
  },
  topRaised: {
    marginTop: -60
  },
  raisedFull: {
    margin: 0
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
    color: 'white',
    background: 'rgba(142, 142, 243, 0.9)',
    padding: 50,
    borderRadius: 5,
    marginTop: 65
  },
  welcomeHeading: {
    marginTop: 0,
    fontSize: 44,
    fontFamily: "'Tillana', cursive",
    fontWeight: 700
  },
  sectionHeading: {
    fontSize: 44,
    color: '#8e8ef3',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 60,
    fontFamily: 'Montserrat Alternates, sans-serif'
  },
  marginBottom20: {
    marginBottom: '20px !important'
  },
  welcomeText: {
    fontSize: 20
  },
  whiteHeading: {
    color: 'white'
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
