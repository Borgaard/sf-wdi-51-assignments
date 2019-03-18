import React, { Component } from 'react';
import './App.css';
import './style.css';

// Route is used to connect paths to components
// Link is used to create links to Route paths.
// Switch will find the first route to match a given path. Once found, it will stop looking, just like a Javascript switch statement
//  import the routing components  app is wrap router now we can bring in 
//   app.js 
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import CommentForm from './CommentForm';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        {/* <Main />
        <CommentForm />
        <Footer /> */}

        

        <Switch>
          {/* controller user is going to  */}
          {/* <Route path="/" component={ About } /> */}
          {/* take you bakd to home page  home page exact keyword both pages will show it will keep going switch
              it keeps matching --exact --- keyword is important!!
          */}
          <Route exact path="/" component={ Main } />
          <Route path="/about" component={ Footer } />
          <Route path="/gallery" component={ CommentForm } />
          <Route path="/about" component={Main} />
          <Route path = "/blog" exact component = {Footer}/>
        </Switch>

      </div>
    );
  }
}

export default App;

{/* <Route path = "/" exact render = {
            // return back home
            () => {return ( <Index />;) }/> */}