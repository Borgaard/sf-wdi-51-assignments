import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  increaseCount = () => {
    let newerCount = this.state.count + 1;
    this.setState({
      count: newerCount
    });
  };

  decreaseCount = () => {
    let newerCount = this.state.count - 1;

    this.setState({
      count: newerCount
    });
  };

  render() {
    return (
      <div className="Counter">
        <h4>Counter: {this.state.count}</h4>
        <button onClick={this.increaseCount}>Increment</button>
        <button onClick={this.decreaseCount}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
