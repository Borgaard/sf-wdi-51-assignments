import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import FrustratingSituations from "./components/FrustratingSituations";
class App extends Component {
  render() {
    return (
      <header>
        <h1>Leanring Routing</h1>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <div className="main">
          <Switch>
            <Route path="/" component={FrustratingSituations} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </header>
    );
  }
}

export default App;
