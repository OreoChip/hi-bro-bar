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
  { text: 'Special' },
  { text: 'Careers', componentString: 'careers' },
  { text: 'Contact', componentString: 'contact' }
];

class Navigation extends Component {
  static propTypes = {};

  renderButton = (option, idx) => {
    return (
      <ListItem
        className={this.props.classes.listItem}
        onClick={() => {
          option.componentString &&
            PubSub.publish('scrollTo', option.componentString);
        }}
        key={`nav-${idx}`}
      >
        <Button className={this.props.classes.navLink} color="transparent">
          {option.text}
        </Button>
      </ListItem>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <Header
        brand="Hi Brow Bar"
        color="transparent"
        fixed
        changeColorOnScroll={{
          height: 100,
          color: 'white'
        }}
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
