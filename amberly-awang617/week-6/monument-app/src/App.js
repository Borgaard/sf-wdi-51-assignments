import React, { Component } from 'react';
import NavBar from './Index/Navbar/Navbar'
import Index from './Index/Index'
import Footer from './Index/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />

      <Index />

      <Footer />

      </div>
    );
  }
}

export default App;
