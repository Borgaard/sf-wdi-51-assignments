import React, { Component } from 'react';
import  { Route,  Link,  Switch 
} from 'react-router-dom';
import HelloWorld from './components /helloWorld';
import Search from './components /search';
class Home extends Component {
  render() {
    return (
      <div className="App">
      <HelloWorld />
      <Search />
      </div>
    );
  }
}

export default Home;
