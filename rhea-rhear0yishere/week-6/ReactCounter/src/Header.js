import React, { Component } from "react";
import CounterList from './CounterList';


class Header extends Component {
  state ={
    numberOfCounters: 0
  };

  increase = () => {
    let numberOfCounters = this.state.numberOfCounters +1; 
    this.setState({
      numberOfCounters
    })
};

  decrease = () => {
  let numberOfCounters = this.state.numberOfCounters -1;
  this.setState({
    numberOfCounters
  })
};
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">React Counters</h1>
        <button className={"button"} onClick={this.increase}>+</button>
        <button className={"button"} onClick={this.decrease}>-</button>

      </header>
    );
  }
}

export default Header;
