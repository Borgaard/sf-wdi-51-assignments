import React, { Component } from 'react';
// import './App.css';
import Landing from './Landing/landing';
import { Switch, Route} from 'react-router-dom';
import Blog from './Blog/blog';
// import Header from './Landing/header/navbar';
import Footer from './Landing/Footer/footer';


// class App extends Component {
//   render() {
//     return (
//       <div className="">
//         <Landing />
//         {/* < Blog /> */}
//       </div>
//     );
//   }
// }


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
          
        <Switch>
            <Route path="/" exact render={
            () => {return ( <Landing /> );} }/>

            <Route path="/blog"  exact strict component={Blog}/>
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;

