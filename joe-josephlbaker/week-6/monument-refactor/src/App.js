import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import DumbContact from './DumbContact';
import DumbGallery from './DumbGallery';
import Blog from './Blog';
import Monument from './Monument';
class App extends Component {

  render() {
    return (
      <div className="navigation">
        <Switch>
          <Route exact path="/" component={Monument} />
          <Route path="/gallery" component={DumbGallery} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={DumbContact} />
        </Switch>
      </div>
    );
  }
}

export default App;
