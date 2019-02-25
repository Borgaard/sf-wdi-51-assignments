import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // what should my component render?
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
