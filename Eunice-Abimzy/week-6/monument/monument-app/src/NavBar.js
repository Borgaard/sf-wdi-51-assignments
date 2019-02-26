import React, { Component } from 'react'

class NavBar extends Component {
    render (){
        return (
            <nav>
            <a class="hamburger" href=""><i class="fa fa-bars"></i></a>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        );
    }
}
export default NavBar

