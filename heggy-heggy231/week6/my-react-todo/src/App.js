import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import TodosContainer from './containers/TodosContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
      {/* this is my routing for nav bar! */}
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/todos' component={ TodosContainer }/>
        </Switch>
      </div>
    );
  }
}

export default App;