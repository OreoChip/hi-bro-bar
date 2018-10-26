import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from 'design-system/components/Footer/Footer.jsx';
import Landing from './containers/landing';
import Navbar from './containers/navigation'
import Services from './containers/services';

export default class RouterContainer extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/services" component={Services} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
