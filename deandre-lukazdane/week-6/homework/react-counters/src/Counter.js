import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };
  increment = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  };
  decrement = () => {
    let newCount = this.state.count - 1;
    this.setState({
      count: newCount
    });
  };
  render() {
    return (
      <div className="Counter">
        <h4>Counter: {this.state.count}</h4>
        <button onClick={this.decrement}>+</button>
        <button onClick={this.increment}>-</button>
      </div>
    );
  }
  //   increaseCounters = () => {
  //     let count = this.state.count + 1;
  //     this.setState({ count });
  //   };
  //   decreaseCounters = () => {
  //     let count = this.state.count - 1;
  //     this.setState({ count });
  //   };
}

export default Counter;
