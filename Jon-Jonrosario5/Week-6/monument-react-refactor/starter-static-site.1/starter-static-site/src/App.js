import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Index from './Index/Index';
import Footer from './Footer/Footer';
import {
  Switch,
  Route
} from 'react-router-dom';
import Blog from './Blog/Blog';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">

          <NavBar />

          <Switch>
            <Route path="/blog" component={ Blog } />
            <Route path="/" component={ Index } />
            
          </Switch>

          <Footer />
          {/* <Blog /> */}
      </div>
    );
  }
}

export default App;
