// import Compenent here! since I am creating component
import React, { Component } from 'react';
import About from './About/About';

// rename to Index
class Index extends React.Component {
  render () {
    return (
      <div>
        <About />
      </div>

    )
  }
}

// export 
export default Index;