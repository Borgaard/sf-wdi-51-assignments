import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import Gallery from './components/Index/Gallery'
import About from './components/Index/About'
import Contact from './components/Index/Contact';
import Footer from './components/Footer'
import Articles from './components/Index/Articles'
import './components/css/landing.css'
import './components/css/style.css'

class App extends Component {
  render() {
    return (
      <div className = "app">
        <Nav />
        <Articles />
        <About />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
