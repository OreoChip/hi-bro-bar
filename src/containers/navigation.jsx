import React, { PropTypes } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Header from 'design-system/components/Header/Header.jsx';
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
                href=""
                className={classes.navLink}
                // onClick={e => e.preventDefault()}
                color="transparent"
              >
                Home
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="services"
                className={classes.navLink}
                // onClick={e => e.preventDefault()}
                color="transparent"
              >
                Services
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href=""
                className={classes.navLink}
                // onClick={e => e.preventDefault()}
                color="transparent"
              >
                Specials
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href=""
                className={classes.navLink}
                // onClick={e => e.preventDefault()}
                color="transparent"
              >
                Careers
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href=""
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
