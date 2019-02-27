import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };
  increment = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  };
  render() {
    return (
      <div classNAme="Counter">
        <h3>Counter: {this.state.count}</h3>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.increment}>Increment</button>
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
