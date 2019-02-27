import React, { Component } from "react";
import "./NavBar.css";

class navbar extends Component {
  render() {
    return (
      <nav>
        <a className="hamburger" href="">
          <i className="fa fa-bars" />
        </a>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="blog.html">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default navbar;
