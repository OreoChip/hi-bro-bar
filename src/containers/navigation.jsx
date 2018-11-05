import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PubSub from 'pubsub-js';

import Header from 'design-system/components/Header/Header.jsx';
import Button from 'design-system/components/CustomButtons/Button.jsx';

import navbarsStyle from 'design-system/assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx';

const navOptions = [
  { text: 'Home', componentString: 'home' },
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
  static propTypes = {
    customClasses: PropTypes.object
  };

  static defaultProps = {
    customClasses: {}
  };

  renderButton = (option, idx) => {
    return (
      <ListItem
        className={this.props.classes.listItem}
        onClick={e => {
          PubSub.publish('close-menu-drawer');
          if (option.onClick) {
            option.onClick(e);
          } else {
            option.componentString &&
              PubSub.publish('scrollTo', option.componentString);
          }
        }}
        key={`nav-${idx}`}
      >
        <Button
          className={classNames(
            this.props.classes.navLink,
            this.props.classes.hiBrowFontSize
          )}
          color="transparent"
        >
          {option.text}
        </Button>
      </ListItem>
    );
  };

  renderBrand = (classes, customClasses) => {
    return (
      <div
        className={classNames(classes.brandContainter, customClasses.brand)}
        onClick={() => PubSub.publish('scrollTo', 'home')}
      >
        <div className={classes.mainText}>Hi Brow Bar</div>
        <div className={classNames(classes.subText, 'd-none', 'd-md-block')}>
          Threading, Facial, & Waxing Salon
        </div>
      </div>
    );
  };

  render() {
    const { classes, customClasses } = this.props;
    return (
      <Header
        brand={this.renderBrand(classes, customClasses)}
        color="white"
        fixed
        bioRhyme
        rightLinks={
          <List className={classes.list}>
            {navOptions.map(this.renderButton)}
          </List>
        }
        customClasses={customClasses}
      />
    );
  }
}

export default withStyles(navbarsStyle)(Navigation);
