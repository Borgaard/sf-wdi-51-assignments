import React, { Component } from 'react';
import Header from './components/Header.js';
import Routes from './config/routes.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        { Routes }
      </div>
    );
  }
}

export default App;
