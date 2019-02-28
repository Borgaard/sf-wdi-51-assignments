import React, { Component } from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';
// import './NavBar.css';


  
  import Blog from '../Blog/Blog'

class NavBar extends Component {
    render() {
        return(
            {/* <nav>
                <a className="hamburger" href=""><i className="fa fa-bars"></i></a>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                
            </nav> */}
            );
        }
    }

    export default NavBar;