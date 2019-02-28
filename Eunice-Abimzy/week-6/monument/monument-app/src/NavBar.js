import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Blog from './Blog/Blog';
import App from './App';


class NavBar extends Component {
    render (){
        return (
        <div>
            <nav>
            <a class="hamburger" href=""><i class="fa fa-bars"></i></a>
            <ul>
                {/* <li><Link to="/">About</Link></li> */}
                <li><a href="#about">About</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><Link to="/blog.html">Blog</Link></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
       <Switch>
         <Route exact path="/" component={ App } />
         <Route path="/blog" component={ Blog} />
       </Switch>
       </div>
        );
    }
}
export default NavBar

