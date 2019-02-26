import React, { Component } from 'react';
import './App.css';
import './style.css';

import Nav from './nav.js';
import Header from './Header.js';
import Main from './Main.js';
import About from './About.js';
import Guide from './VisualGuide.js';
import Contact from './Contact.js'
import Footer from './Footer.js';
import Articles from './Articles.js';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
        <Nav/>
       
        <About/>
        <Articles/>
        <Contact/>
        <Guide/>
        <Footer/>
      </div>
    );
  }
}

export default App;
