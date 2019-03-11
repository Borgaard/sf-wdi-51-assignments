import React, { Component } from 'react';
import './App.css';
import './style.css';
//  import the routing components  app is wrap router now we can bring in 
//   app.js 
// Route is used to connect paths to components
// Link is used to create links to Route paths.
// Switch will find the first route to match a given path. Once found, it will stop looking, just like a Javascript switch statement
//  import the routing components  app is wrap router now we can bring in 
//   app.js 
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav>
        <a className="hamburger" href="">
          <i className="fa fa-bars" />
        </a>
        <ul>
  {/* <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li> 
      <Link to="/topics">Topics</Link>    
  */}
          <li>
            {/* <a href="index.html#about">About</a> */}
            <Link to="/about">About</Link>
          </li>
          <li>
            {/* <a href="index.html#gallery">Gallery</a> */}
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            {/* <a href="blog.html">Blog</a> */}
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            {/* <a href="index.html#contact">Contact</a> */}
            <Link to="/contact">Contact</Link>
          </li>
        </ul>


      </nav>
    );
  }
}

export default Nav;
