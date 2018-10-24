import React, { PropTypes } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Header from 'design-system/components/Header/Header.jsx';
import CustomDropdown from 'design-system/components/CustomDropdown/CustomDropdown.jsx';
import Button from 'design-system/components/CustomButtons/Button.jsx';
import navbarsStyle from 'design-system/assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx';

class Navigation extends React.Component {
  static propTypes = {};

  render() {
    const { classes } = this.props;
    return (
      <Header
        brand="Hi Bro Bar"
        href="home"
        color="transparent"
        fixed
        changeColorOnScroll={{
          height: 100,
          color: 'white'
        }}
        rightLinks={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                href="home"
                className={classes.navLink}
                // onClick={e => e.preventDefault()}
                color="transparent"
              >
                Home
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="cakes"
                className={classes.navLink}
                // onClick={e => e.preventDefault()}
                color="transparent"
              >
                About Us
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="link1"
                className={classes.navLink}
                // onClick={e => e.preventDefault()}
                color="transparent"
              >
                Services
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="link1"
                className={classes.navLink}
                // onClick={e => e.preventDefault()}
                color="transparent"
              >
                Prices
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="link1"
                className={classes.navLink}
                // onClick={e => e.preventDefault()}
                color="transparent"
              >
                Contact
              </Button>
            </ListItem>        
          </List>
        }
      />
    );
  }
}

export default withStyles(navbarsStyle)(Navigation);
