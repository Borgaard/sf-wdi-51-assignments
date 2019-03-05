import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchContainer from './SearchContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h1>I hate Gifs</h1>
        <SearchContainer />
      </div>
    );
  }
}

export default App;
