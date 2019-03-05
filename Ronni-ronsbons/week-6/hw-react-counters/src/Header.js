import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title text-info">React Counters</h1>
        {/* <Header increase={this.increaseCounters} decrease={this.decreaseCounters} /> */}
        <button onClick={this.props.increase} className="rounded">+</button>
        <button onClick={this.props.decrease} className="rounded">-</button>
      </header>
    );
  }
}

export default Header;
