//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar'
//import Footer from './Footer/Footer'
import Index from './Index/Index';
//import Blog from './Blog/Blog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
         <Index/> 
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;


