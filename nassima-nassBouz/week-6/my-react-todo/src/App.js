import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
// import Home from './components/Home';
// import TodosContainer from './containers/TodosContainer';
import myRoutes from './config/routes'


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        {/* myRoutes is not a component its a namespace */}
        { myRoutes }
      </div>
    );
  }
}

export default App;
