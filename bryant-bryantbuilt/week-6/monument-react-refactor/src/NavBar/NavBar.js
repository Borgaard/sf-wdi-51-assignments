import React, { Component } from 'react';
import Blog from '../Blog/Blog';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <a class="hamburger" href=""><i class="fa fa-bars"></i></a>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><Link to="/blog.html">Blog</Link></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <Switch>
                    <Route path="/blog.html" component={Blog}/>
                </Switch>
            </nav>
        )
    }
}

export default NavBar