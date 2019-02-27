import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };
  render() {
    return (
      <div classNAme="Counter">
        <h3>Counter: 0</h3>
        <button onClick={this.increaseCount}>Decrement</button>
        <button onClick={this.decreaseCount}>Increment</button>
      </div>
    );
  }
  increaseCount = () => {
    let count = this.state.count + 1;
    this.setState({ count });
  };
  decreaseCount = () => {
    let count = this.state.count - 1;
    this.setState({ count });
  };
}

export default Counter;
