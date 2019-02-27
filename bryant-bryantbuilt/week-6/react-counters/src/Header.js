import React, { Component } from "react";
import App from './App'
import CounterList from './CounterList';

class Header extends Component {

    addACounter = () => {
      this.props.addCounter();
    }

    removeACounter = () => {
      this.props.removeCounter();
    }

    render() {
      return (
        <header className="App-header">
          <h1 className="App-title">React Counters</h1>
          <button onClick={this.addACounter}>+</button>
          <button onClick={this.removeACounter}>-</button>
        </header>
        
      );
  }
}

export default Header;
