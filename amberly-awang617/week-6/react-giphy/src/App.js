import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import SearchContainer from './SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <SearchContainer />
      </div>
    );
  }
}

export default App;
