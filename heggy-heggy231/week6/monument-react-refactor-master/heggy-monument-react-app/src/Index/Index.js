// import Compenent here! since I am creating component
import React, { Component } from 'react';
import About from './About/About';
import Archive from './Archive/Archive';
import Contact from './Contact/Contact';

// rename to Index
class Index extends React.Component {
  render () {
    return (
      <div>
        <About />
        <Archive />
        <Contact />
      </div>

    )
  }
}

// export 
export default Index;