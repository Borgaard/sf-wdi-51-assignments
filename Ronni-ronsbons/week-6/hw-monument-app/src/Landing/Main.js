import React, { Component } from 'react';
import Header from './Header';
import Archive from './Archive';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';


class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Archive />
        <About />
        <Gallery />
        <Contact />
      </div>
    );
  };
};

export default Main;