import React, { Component } from 'react';
import SearchContainer from './components/SearchContainer.js';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Giphy Search</h1>
        <h4>The true source for all things giphy...</h4>
        <SearchContainer />
      </div>
    );
  }
}

export default Home;
