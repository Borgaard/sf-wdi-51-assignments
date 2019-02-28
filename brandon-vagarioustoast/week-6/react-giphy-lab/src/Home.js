// Developer TODO: Define App component defintion here
import React, { Component } from "react";
import "./App.css";
import SearchContainer from "./SearchContainer";

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Giphy Search</h1>
        <SearchContainer />
      </div>
    );
  }
}

export default Home;
