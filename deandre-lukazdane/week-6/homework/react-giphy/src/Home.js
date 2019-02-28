import React, { Component } from "react";
import "./index.css";
import HelloMessage from "./HelloMessage";
import GifContainer from "./components/GifContainer";
import Search from "./components/Search";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <HelloMessage />
        <Search />
        <GifContainer />
      </div>
    );
  }
}

export default Home;
