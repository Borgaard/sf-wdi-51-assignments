import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchContainer from './SearchContainer';
import Results from './Results'

class App extends Component {
  render() {
    return (
      <div className="App">
          <header>
              <h1>Sick Giphy Searcher</h1>
              <SearchContainer/>
          </header>
      </div>
    );
  }
}

export default App;
