import React, { Component } from 'react';
// import NavBar component
import NavBar from './NavBar/NavBar';
import './App.css';

class App extends Component {
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
