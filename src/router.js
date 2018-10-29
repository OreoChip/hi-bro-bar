import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from 'design-system/components/Footer/Footer.jsx';
import Landing from 'containers/landing';
import Navbar from 'containers/navigation';

export default class RouterContainer extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" component={Landing} />
          </Switch>
          <Footer
            icons={[
              { icon: 'fab fa-facebook', url: 'https://facebook.com' },
              {
                icon: 'fab fa-yelp',
                url:
                  'https://www.yelp.com/biz/hi-brow-bar-eye-brow-threading-salon-falls-church'
              },
              { icon: 'fas fa-at', url: 'mailto:hello@oreochip.com' }
            ]}
          />
        </div>
      </Router>
    );
  }
}
