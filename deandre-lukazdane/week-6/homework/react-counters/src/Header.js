import React, { Component } from "react";
import CounterList from "./CounterList";
class Header extends Component {
  // constructor(props) {
  //   super();
  //   this.increaseCounters = this.increaseCounters.bind(this);
  // }
  handleIncrement = () => {
    this.props.increaseCounters();
  };
  handleDecrement = () => {
    if (this.props.countersCount() > 0) {
      this.props.decreaseCounters();
    }
  };
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">React Counters</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handledecrement}>-</button>
        <CounterList />
      </header>
    );
  }
}

export default Header;
// ---------------------------------
