import React, { Component } from 'react';

import Header from './Header.js';
import Navbar from './NavBar.js';
import Main from './Main.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

class Monument extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Main />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Monument;
