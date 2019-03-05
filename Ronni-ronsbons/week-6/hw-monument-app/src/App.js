import React, { Component } from 'react';
import './css/style.css';
import Landing from './Landing/Landing';
// import Blog from './Blog/Blog';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="both">
        <Landing />
        {/* <Blog /> */}
        <Footer />
      </div>
    );
  };
};

export default App;