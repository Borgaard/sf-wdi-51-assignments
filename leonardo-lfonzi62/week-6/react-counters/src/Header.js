import React, { Component } from "react";
// import CounterList from './CounterList';
import  Counter from './Counter';

class Header extends Component {
  
  handleIncrement = () => {
    this.props.increaseCounters()
  }

  handleDecrement = () => {
    // if current state is greater than 0 that, decreaseCounters function runs, if not, then function does not run
    // if conditional is not present in the code, countersCount will be negative
    console.info(this.props.countersCount);
    this.props.countersCount > 0 ?
    this.props.decreaseCounters():
    null
  }
  
  
  render() {


    return (
      <header className="App-header">
        <h1 className="App-title">React Counters</h1>
        <button onClick={ this.handleIncrement }>+</button>
        <button onClick={ this.handleDecrement }>-</button>
      </header>
    );
  }
}

export default Header;
