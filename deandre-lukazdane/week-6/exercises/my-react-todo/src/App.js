import React, { Component } from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import TodosContainer from "./containers/TodosContainer";
import MyRoutes from "./config/routes";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>{MyRoutes}</Switch>
      </div>
    );
  }
}

export default App;
