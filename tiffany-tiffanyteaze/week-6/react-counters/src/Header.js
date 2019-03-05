import React, { Component } from "react";

class Header extends Component {

handleIncrement = () => {
  console.log("You pressed + !");
  this.props.increaseCounters()
}

handleDecrement = () => {
  console.log("You pressed - !");
  this.props.decreaseCounters()
}


  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">React Counters</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>

        
      </header>
    );
  }
}

export default Header;
