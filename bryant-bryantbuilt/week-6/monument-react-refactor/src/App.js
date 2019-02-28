import React, { Component } from 'react';
import './style.css';
import NavBar from './NavBar/NavBar.js';
import Index from './Index/Index.js';
import Footer from './Footer/Footer.js';
import Blog from './Blog/Blog.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Index />
        <Footer />
      </div>
    );
  }
}

export default App;
