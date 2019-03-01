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
          <NavBar />
          <Switch>
              <Route path="/blog" component={ Blog } />
              <Route path="/" component={ Index } />
          </Switch>
          <Footer />

                


      </div>
    );
  }
}

export default App;
