// import Compenent here! since I am creating component
import React, { Component } from 'react';
import About from './About/About';
import Archive from './Archive/Archive';
import Contact from './Contact/Contact';
import Gallery from './Gallery/Gallery';

// rename to Index
class Index extends React.Component {
  render () {
    return (
      <div>
        <About />
        <Archive />
        <Contact />
        <Gallery />
      </div>

    )
  }
}

// export 
export default Index;