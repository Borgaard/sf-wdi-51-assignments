import React, { Component } from "react";
import "./App.css";
import HelloMessage from "./HelloMessage";
import Search from "./components/Search/Search";
import GifContainer from "./components/GifContainer/GifContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloMessage />
      </div>
    );
  }
}

export default App;
