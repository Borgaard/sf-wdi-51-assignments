import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <a className="hamburger" href="">
          <i className="fa fa-bars" />
        </a>
        <ul>
          <li>
            <a href="index.html#about">About</a>
          </li>
          <li>
            <a href="index.html#gallery">Gallery</a>
          </li>
          <li>
            <a href="blog.htmcsl">Blog</a>
          </li>cs
          <li>
            <a href="index.html#contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
