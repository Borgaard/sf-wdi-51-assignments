import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import Gallery from './components/Index/Gallery'
// import Header from '/src/components/Header';
// import Main from '/src/components/Main';
// import Footer from '/src/components/Footer';

class App extends Component {
  render() {
    return (
      <div className = "app">
        <Nav />
        <Gallery />
        {/* <Index />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
