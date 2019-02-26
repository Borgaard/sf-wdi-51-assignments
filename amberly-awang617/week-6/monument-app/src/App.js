import React, { Component } from 'react';
import NavBar from './Index/Navbar/Navbar'
import Main from './Index/Main'
import Footer from './Index/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />

      <Main />

      <Footer />

      </div>
    );
  }
}

export default App;
