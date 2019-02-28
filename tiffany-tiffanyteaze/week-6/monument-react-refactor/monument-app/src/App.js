import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './App.css';
import Index from './Index/Index';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Blog from './Blog/Blog';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <Index />
          {/* <Blog /> */}
          <nav>
              <a className="hamburger" href=""><i className="fa fa-bars"></i></a>
              <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#gallery">Gallery</a></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
              
          </nav>
          <NavBar />
          <Footer />

          <div className="main">
                <Switch>
                    <Route path="/blog" component={ Blog } />
                </Switch>
          </div>

      </div>
    );
  }
}

export default App;
