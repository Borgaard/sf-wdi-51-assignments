import React, { Component } from 'react';
import './Header.css';
import App from '../../App';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <header class="vertical-center">
                    <div>
                        <h1><a href="index.html">Monument</a></h1>
                    </div>
                </header>
                <nav>
                    <a class="hamburger" href=""><i class="fa fa-bars"></i></a>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="/blog.html">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={App}/>
                    </Switch>
                </nav>
            </div>
        )
    }
}

export default Header