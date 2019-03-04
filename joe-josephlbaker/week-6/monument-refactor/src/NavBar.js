import React, { Component } from 'react';
import './css/style.css';
import {Link} from 'react-router-dom';
// import Monument from './Monument';
// import Blog from './Blog';

import './css/style.css';
import './css/landing.css';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <a className="hamburger" href=""><i className="fa fa-bars"></i></a>
        <ul>
          {/* <li><a href="#about">About</a></li> */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
