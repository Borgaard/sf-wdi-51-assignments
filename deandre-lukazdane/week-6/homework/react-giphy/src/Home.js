import React, { Component } from "react";
import "./Home.css";
import HelloMessage from "./HelloMessage";
import Search from "./components/Search/Search";
import GifContainer from "./components/Container/GifContainer";

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
