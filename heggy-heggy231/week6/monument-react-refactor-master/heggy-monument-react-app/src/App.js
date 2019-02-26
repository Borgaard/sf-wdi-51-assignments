// I am exporting Component name from react
import React, { Component } from 'react';
// get style for App Component
import './App.css';
// import NavBar component
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Index from './Index/Index';
import Blog from './Blog/Blog';


class App extends React.Component {
  // what should my component render?
  render() {
    return (
      <div className="App">
      {/* in 3  */}
        <NavBar />
        <Index />
        <Footer />
      </div>
    );
  }
}

export default App;
