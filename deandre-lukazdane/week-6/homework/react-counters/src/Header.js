import React, { Component } from "react";

class Header extends Component {
  handleIncrement = () => {
    this.props.increaseCounters();
  };
  handleDecrement = () => {
    this.props.decreaseCounters();
  };
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">React Counters</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handledecrement}>-</button>
      </header>
    );
  }
}

export default Header;
