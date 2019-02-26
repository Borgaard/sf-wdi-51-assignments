// import Compenent here! since I am creating component
import React, { Component } from 'react';
import MidSection from './MidSection/MidSection';

import Contact from './Contact/Contact';

class Blog extends Component {
  render () {
    return (
      <div>

        <MidSection />
        <Contact />
      </div>

    )
  }
}

export default Blog;