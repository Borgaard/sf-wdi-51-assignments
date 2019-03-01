import React, { Component } from 'react';
import NavBar from './Navbar/Navbar'
import Index from './Index/Index'
import Footer from './Footer/Footer'
// import Blog from './Blog/Blog'

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      {/* <Blog /> */}
      <Index />

      <Footer />

      </div>
    );
  }
}

export default App;
