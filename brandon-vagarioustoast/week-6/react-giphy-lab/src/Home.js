// Developer TODO: Define App component defintion here
import React, { Component } from "react";
import "./App.css";
import Search from "./Search";

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Giphy Search</h1>
        <Search />
      </div>
    );
  }
}

export default Home;
