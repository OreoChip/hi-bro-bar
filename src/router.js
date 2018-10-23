import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from 'design-system/components/Footer/Footer.jsx';
import Landing from './containers/landing';

export default class RouterContainer extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
              <Route path="/" component={Landing} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
