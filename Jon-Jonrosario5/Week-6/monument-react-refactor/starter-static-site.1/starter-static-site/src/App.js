import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Index from './Index/Index';
import Footer from './Footer/Footer';
import Blog from './Blog/Blog';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          {/* <Blog />  */}
          <Index />
          <Footer />
          <Blog />
      </div>
    );
  }
}

export default App;
