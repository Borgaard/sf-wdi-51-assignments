import React, { Component } from "react";

class Header extends Component {
  handleIncrement = () => {
    this.props.increaseCounters();
  };

  handleDecrement = () => {
    if (this.props.countersCount > 0) {
      this.props.decreaseCounters();
    }
  };

  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">React Counters</h1>
        <button className={"increaseCounters"} onClick={this.handleIncrement}>
          +
        </button>
        <button className={"decreaseCounters"} onClick={this.handleDecrement}>
          -
        </button>
      </header>
    );
  }
}

export default Header;
