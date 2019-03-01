import React, { Component } from 'react';
import './Home.css';
import SearchContainer from './components/SearchContainer';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <SearchContainer /> 
      </div>
    );
  }
}

export default Home;
