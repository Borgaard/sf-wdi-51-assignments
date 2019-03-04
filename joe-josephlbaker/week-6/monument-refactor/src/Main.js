import React, { Component } from 'react';
import './css/style.css';
import './css/landing.css';

import Articles from './Articles';
import About from './About';
import Gallery from './Gallery';

class Main extends Component {
  render() {
    return (
      <div className="grid-wrapper articles">
        <Articles />
        <About />
        <Gallery />
      </div>
    );
  }
}

export default Main;
