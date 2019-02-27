import React, { Component } from "react";

class Header extends Component {
  handleIncrease = () => {
    console.log(this.props.increaseCounters())
    this.props.increaseCounters();
  };

  handleDecrease = () => {
   this.props.decreaseCounters();
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

// CountersCount = {this.state.counters}
// increaseCounters={this.increaseCounters} 
// decreaseCounters={this.decreaseCounters} />