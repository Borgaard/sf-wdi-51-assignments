import React, { Component } from "react";

class Header extends Component {

  // pass callback function as prop
  headerIncrease = () => {
    // pass function as prop into function
    this.props.increaseCounters();
    console.log("Header callback increase")
  }

  headerDecrease = () => {
    this.props.decreaseCounters();
    console.log("Header callback decrease")
  }

  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">React Counters</h1>
        {/* everytime you click button you push another counter into counterlist */}
        <button onClick={this.headerIncrease}>+</button>
        <button onClick={this.headerDecrease}>-</button>
      </header>
    );
  }
}

export default Header;
