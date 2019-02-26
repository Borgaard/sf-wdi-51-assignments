import React, { Component } from 'react';
// get style for App Component
import './App.css';
// import NavBar component
import NavBar from './NavBar/NavBar';


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
