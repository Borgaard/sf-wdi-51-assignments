import React, { Component } from "react";

class Header extends Component {

  handleIncrement = () => {
    console.log(`increment function called`);
    this.props.increaseCounters()
  }

  handleDecrement = () => {
    console.log(`decrement function called`);
    // where does this code come from?
    this.props.countersCount > 0 ? 
      this.props.decreaseCounters():
      null
  }

  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">React Counters</h1>
        {/* <button>+</button>
        <button>-</button> */}
        <button onClick={ this.handleIncrement }>+</button>
        <button onClick={ this.handleDecrement }>-</button>
      </header>
    );
  }
}

export default Header;
