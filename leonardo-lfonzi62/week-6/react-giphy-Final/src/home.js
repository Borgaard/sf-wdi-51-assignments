import React, { Component } from 'react';
import  { Route,  Link,  Switch 
} from 'react-router-dom';
import HelloWorld from './components /helloWorld';
import Search from './components /search';
import SearchContainer from './components /searchContainer';
class Home extends Component {
  render() {
    return (
      <div className="App">
      <HelloWorld />
      <SearchContainer />
      </div>
    );
  }
}

export default Home;
