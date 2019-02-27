import React, { Component } from 'react';
import './blog.css';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';



class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Blog;