import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PubSub from 'pubsub-js';

import Header from 'design-system/components/Header/Header.jsx';
import Button from 'design-system/components/CustomButtons/Button.jsx';

import navbarsStyle from 'design-system/assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx';

const navOptions = [
  { text: 'Home', componentString: 'mastHead' },
  { text: 'Services', componentString: 'services' },
  {
    text: 'Specials',
    onClick: () => {
      PubSub.publish('openSpecials');
    }
  },
  { text: 'Careers', componentString: 'careers' },
  { text: 'Contact', componentString: 'contact' }
];

class Navigation extends Component {
  static propTypes = {};

  renderButton = (option, idx) => {
    return (
      <ListItem
        className={this.props.classes.listItem}
        onClick={e => {
          if (option.onClick) {
            option.onClick(e);
          } else {
            option.componentString &&
              PubSub.publish('scrollTo', option.componentString);
          }
        }}
        key={`nav-${idx}`}
      >
        <Button className={this.props.classes.navLink} color="transparent">
          {option.text}
        </Button>
      </ListItem>
    );
  };

  renderBrand = classes => {
    return (
      <div className={classes.brandContainter}>
        <div className={classes.mainText}>Hi Brow Bar</div>
        <div className={classes.subText}>Threading, Facial, & Waxing Salon</div>
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <Header
        brand={this.renderBrand(classes)}
        color="white"
        fixed
        bioRhyme
        rightLinks={
          <List className={classes.list}>
            {navOptions.map(this.renderButton)}
          </List>
        }
      />
    );
  }
}

export default withStyles(navbarsStyle)(Navigation);
