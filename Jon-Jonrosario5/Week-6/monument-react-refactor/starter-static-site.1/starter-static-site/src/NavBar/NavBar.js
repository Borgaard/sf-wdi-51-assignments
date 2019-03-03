import React, {Component} from 'react';
import './NavBar.css';
import Blog from "../Blog/Blog"
import {Link} from "react-router-dom";


class NavBar extends Component {
    render(){
        return(
            <nav>
		        <a class="hamburger" href=""><i class="fa fa-bars"></i></a>
		        <ul>
		            <li><a href="#about">About</a></li>
		            <li><a href="#gallery">Gallery</a></li>
		            <li><Link to = "/blog">Blog</Link></li>
		            <li><a href="#contact">Contact</a></li>
		        </ul>
	        </nav>
        )
    }
}

export default NavBar;