import React, { Component } from 'react';
import NavBar from './Navbar/Navbar'
import Index from './Index/Index'
import Footer from './Footer/Footer'
import Blog from './Blog/Blog'
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      {/* <Blog /> */}
      {/* <Index /> */}

      <Switch>
        <Route exact path='/' component={Index}></Route>
        <Route path='/blog' component={Blog}></Route>
      </Switch>
      <Footer />

      </div>
    );
  }
}

export default App;
