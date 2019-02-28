import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">React Counters</h1>
        <button onClick={this.props.increaseFunction}>+</button>
        <button onClick={this.props.decreaseFunction}>-</button>
      </header>
    );
  }
}

export default Header;
