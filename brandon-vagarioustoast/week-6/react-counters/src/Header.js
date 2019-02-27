import React, { Component } from "react";

class Header extends Component {
  incrementCounter = () => {
    this.props.increaseCounters();
  };

  decrementCounter = () => {
    this.props.countersCount > 0 ? this.props.decreaseCounters() : null;
  };

  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">React Counters</h1>
        <button onClick={this.incrementCounter}>+</button>
        <button onClick={this.decrementCounter}>-</button>
      </header>
    );
  }
}

export default Header;
