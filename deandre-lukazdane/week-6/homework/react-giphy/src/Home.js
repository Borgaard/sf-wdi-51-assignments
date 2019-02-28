import React, { Component } from "react";
import "./Home.css";
import HelloMessage from "./HelloMessage";
import GifContainer from "./components/GifContainer";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <HelloMessage />
        <GifContainer />
      </div>
    );
  }
}

export default Home;
