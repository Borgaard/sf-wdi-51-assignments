import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Index from './Index/Header/Header';
import Main from './Index/Main/Main';
import Footer from './Footer/Footer';
import './Index/Main/Archive/Archive';
import Blog from './Blog/Blog'

class App extends Component {
  render() {
    return (
      <div className = "App">
        <div>
          <Index/>
          <Main/>
          <Footer/>
        </div>
        <div>
          <Blog/>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App;
