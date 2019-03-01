import React, { Component } from 'react';
import './App.css';
import './style.css';
import './landing.css';
import NavBar from './NavBar/NavBar.js';
import Footer from './Footer/Footer.js';
import Index from './Index/Index.js';
import Blog from './Blog/Blog.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Index />
        {/* <Blog />  */}
        <Footer/>
      </div>
    );
  }
}

export default App;
