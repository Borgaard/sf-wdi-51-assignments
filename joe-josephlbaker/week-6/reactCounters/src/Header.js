import React, { Component } from "react";

class Header extends Component {
  handleIncrease = () => {
    this.props.increaseCounters();
  }

  handleDecrease = () => {
    this.props.decreaseCounters();
    null
  }

  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">React Counters</h1>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </header>
    );
  }
}

export default Header;
