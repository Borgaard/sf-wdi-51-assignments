import React, { Component } from "react";
import CounterList from './CounterList';

class Header extends Component {

  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">React Counters</h1>
        <button onClick={CounterList.addCounter}>+</button>
        <button onClick={CounterList.removeCounter}>-</button>
      </header>
    );
  }
}

export default Header;
