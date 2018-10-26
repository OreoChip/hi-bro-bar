import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Header from 'design-system/components/Header/Header.jsx';
import Button from 'design-system/components/CustomButtons/Button.jsx';
import navbarsStyle from 'design-system/assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx';

const navOptions = [
  { text: 'Home' },
  { text: 'About Us' },
  { text: 'Services' },
  { text: 'Prices' },
  { text: 'Contact' }
];

class Navigation extends React.Component {
  static propTypes = {};

  renderButton = (option, idx) => {
    return (
      <ListItem className={this.props.classes.listItem} key={`nav-${idx}`}>
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
        brand="Hi Bro Bar"
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
