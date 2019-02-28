import React, { Component } from "react";
import "./css/style.css";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";
import Index from "./Index/Index";
import { Route, Link, Switch } from "react-router-dom";
import About from "./Index/About/About";
//import Blog from "./Blog/Blog";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar>
          <nav>
            <ul>
              <li>
                <Link to="index.html#about">About</Link>
              </li>
              <li>
                <Link to="index.html#gallery">Gallery</Link>
              </li>
              <li>
                <Link to="blog.html">Blog</Link>
              </li>
              <li>
                <Link to="index.html#contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div>
            <Switch>
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </NavBar>
        {/* <Blog />  */}
        <Index />
        <Footer />
      </div>
    );
  }
}

export default App;
