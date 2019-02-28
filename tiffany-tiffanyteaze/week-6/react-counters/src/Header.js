import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">React Counters</h1>
      <button onClick={this.increaseCounter}>+</button>
        <button>-</button>

        
      </header>
    );
  }
  increaseCounter = () => {
    let counters;
    this.setState(counters)
  }
}

export default Header;
