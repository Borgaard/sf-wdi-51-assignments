import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


import {
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Index from './Index/Header/Header';
import Main from './Index/Main/Main';
import Footer from './Footer/Footer';
import './Index/Main/Archive/Archive';
import Blog from './Blog/Blog'
import Navbar from './Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className = "App">
        <div>
          <Navbar />
          <Index/>
        </div>
        <div>
            <switch>
              {/* in order to go to page the path has to exactly match! otherwise it continues down the switch component */}
              {/* <Route exact path="/" component={ Gallery }></Route> */}
              {/* pass in component you want in place */}
              {/* <Route exact path="/about" component={ About } /> */}
              <Route exact path="/blog" component={ Blog } />
              {/* <Route exact path="/about" component={ Contact } /> */}
              <Route exact path="/" component={ Main } />
            </switch>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App;
