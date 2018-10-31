import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import Footer from 'design-system/components/Footer/Footer.jsx';
import Landing from 'containers/landing';
import Navbar from 'containers/navigation';
import { styles } from './jss/landing'

class RouterContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className={classes.root}>
          <Navbar customClasses={this.props.classes} />
          <Switch>
            <Route path="/" component={props => <Landing {...props} classes={this.props.classes} />} />
          </Switch>
          <Footer
            icons={[
              { icon: 'fab fa-facebook', url: 'https://facebook.com/HiBrowBar/' },
              {
                icon: 'fab fa-yelp',
                url:
                  'https://www.yelp.com/biz/hi-brow-bar-eye-brow-threading-salon-falls-church'
              },
              { icon: 'fas fa-at', url: 'mailto:raj.bhanot1@yahoo.com' }
            ]}
            rightText={"© 2018 Hi Brow Bar"}
            customClasses={this.props.classes}
          />
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(RouterContainer);
