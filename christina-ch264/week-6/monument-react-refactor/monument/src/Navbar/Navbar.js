
import React, {Component} from 'react';
import './Navbar.css';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';



class Navbar extends Component {
    render () {
        return (
            <nav>
                <a class="hamburger" href=""><i class="fa fa-bars"></i></a>
                <ul>
                    {/* <li><a href="#about">About</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="#contact">Contact</a></li> */}
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;