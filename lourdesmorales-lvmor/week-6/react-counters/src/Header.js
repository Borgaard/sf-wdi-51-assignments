import React, { Component } from "react";

class Header extends Component {
  
  handleIncrement = () => {
    console.log("you pressed + !")
    this.props.increaseCounters()
  }

  handleDecrement = () => {

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
