import React, { Component } from 'react';
import './App.css';
import Index from './Index/Index';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Blog from './Blog/Blog';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <Index />
          {/* <Blog /> */}
          <NavBar />
          <Footer />
        
      </div>
    );
  }
}

export default App;
