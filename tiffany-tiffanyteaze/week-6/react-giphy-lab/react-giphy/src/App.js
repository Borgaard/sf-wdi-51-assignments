import React, { Component } from 'react';
import './App.css';
import Search from './components/Search.js';
import SearchContainer from './components/SearchContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Giphy</h1>
        <SearchContainer />
      </div>
    );
  }
}

export default App;
