import { container } from 'design-system/assets/jss/material-kit-react';
import image1 from 'assets/desktop/image1.jpg';
import image2 from 'assets/desktop/image2.jpg';
import image3 from 'assets/desktop/image3.jpg';
import mobileImage1 from 'assets/mobile/image1.jpg';
import mobileImage2 from 'assets/mobile/image2.jpg';
import mobileImage3 from 'assets/mobile/image3.jpg';

const assets = {
  image1: window.innerWidth < 991 ? mobileImage1 : image1,
  image2: window.innerWidth < 991 ? mobileImage2 : image2,
  image3: window.innerWidth < 991 ? mobileImage3 : image3
}

const purple = {
  ...assets,
  invertedBg: '#8e8ef3',
  invertedBgOpacity: '#8e8ef3cc',
  invertedTextColor: '#ffffff',
  headingText: {
    right: '6%'
  }
};

const white = {
  ...assets,
  invertedBg: '#000000',
  invertedBgOpacity: '#000000cc',
  invertedTextColor: '#ffffff',
  headingText: {
    left: '10%'
  }
};

const indigo = {
  ...assets,
  invertedBg: '#0a0a2f',
  invertedBgOpacity: '#0a0a2fcc',
  invertedTextColor: '#ffffff',
  headingText: {
    right: '10%'
  },
  root: {
    backgroundColor: '#e9ecff'
  }
};

const themes = {
  purple,
  white,
  indigo
};

let currentTheme = 'purple';
const themeString = window.location.search.replace('?theme=', '');
if (themeString && themes[themeString]) {
  currentTheme = themeString;
}

const slickHeightConstraints = (container = false) => ({
  '@media (min-width: 992px)': {
    maxHeight: 700,
  },
  '@media (max-width: 991px) and (min-width: 700px)': {
    maxHeight: 500,
  },
  '@media (max-width: 699px) and (min-width: 400px)': {
    maxHeight: 300,
    marginTop: container ? 0 : 70
  },
  '@media (max-width: 399px)': {
    maxHeight: 200,
    marginTop: container ? 0 : 70
  }
})

const slickStyles = {
  slickContainer: {
    ...slickHeightConstraints(true)
  },
  slick: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover !important',
    height: '100vh',
    width: '100vw !important',
    ...slickHeightConstraints(false)
  },
  slick1: {
    background: `url(${themes[currentTheme].image2})`
  },
  slick2: {
    background: `url(${themes[currentTheme].image1})`
  },
  slick3: {
    background: `url(${themes[currentTheme].image3})`
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
    fontWeight: '700',
    lineHeight: '1.6',
    letterSpacing: '0.0075em'
  },
  cardPadding: {
    padding: 20
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
  textFont: {
    fontFamily: 'Alegreya Sans, sans-serif',
    fontSize: '1.2rem'
  },
  servicesHeader: {
    fontFamily: 'Alegreya Sans, sans-serif',
    fontWeight: 'bold'
  }
};

const careerStyles = {
  careersCard: {
    background: themes[currentTheme].invertedBg,
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
  marginTop50: {
    marginTop: 50
  },
  careersText: {
    marginBottom: 20
  },
  careersTextColor: {
    color: themes[currentTheme].invertedTextColor
  }
};

const contactStyles = {
  contact: {},
  contactColWrapper: {
    marginBottom: 50
  },
  map: {
    height: 200,
    width: 300,
    boxShadow: '3px 5px 5px #888888',
    margin: 'auto'
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
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '0px 6% 0px',
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
    boxSizing: 'border-box',
    textAlign: 'center',
    height: '100%',
    maxWidth: 300,
    margin: 'auto'
  },
  cardServices: {
    boxSizing: 'border-box',
    textAlign: 'center',
    height: '100%',
    maxWidth: 400,
    margin: 'auto'
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
    "@media (min-width: 992px)": {
      width: '40%',
      position: 'absolute',
      top: 100,
      color: 'white',
      background: themes[currentTheme].invertedBg,
      opacity: 0.8,
      padding: 50,
      borderRadius: 5,
      marginTop: 65,
      ...themes[currentTheme].headingText
    },
    "@media (max-width: 991px)":{
      width: '100%',
      top: 100,
      color: 'white',
      background: themes[currentTheme].invertedBg,
      opacity: 0.8,
      padding: 30,
      borderRadius: 5,
      paddingBottom: 75,
      ...themes[currentTheme].headingText
    },
    '@media (max-width: 700px)': {
      marginTop: 70
    }
  },
  welcomeHeading: {
    marginTop: 0,
    fontSize: 37,
    fontFamily: "'Tillana', cursive",
    fontWeight: 700
  },
  sectionHeading: {
    fontSize: 44,
    color: themes[currentTheme].invertedBg,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 60,
    fontFamily: 'Montserrat Alternates, sans-serif'
  },
  marginBottom20: {
    marginBottom: '20px !important'
  },
  welcomeText: {
    fontSize: 23
  },
  whiteHeading: {
    color: 'white'
  }
};

const headerStyles = {
  appBar: {
    background: `${themes[currentTheme].invertedBg} !important`,
    opacity: 0.8,
    color: themes[currentTheme].invertedTextColor
  },
  brand: {
    color: themes[currentTheme].invertedTextColor
  }
};

const appStyles = {
  root: themes[currentTheme].root || {}
};

export const styles = {
  ...basicStyles,
  ...slickStyles,
  ...mastHeadStyles,
  ...servicesStyles,
  ...careerStyles,
  ...contactStyles,
  ...headerStyles,
  ...appStyles
};
