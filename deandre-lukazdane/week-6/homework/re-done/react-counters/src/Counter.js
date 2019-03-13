import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div className="Counter">
        <h4>Counter :0</h4>
        <button onClick={this.increaseCount}>Decrement</button>
        <button onClick={this.decreaseCount}>Increment</button>
      </div>
    );
  }
}
increaseCount = () => {
  let count = this.state.count + 1;
  this.setState({
    count
  });
};

decreaseCount = () => {
  let count = this.state.count - 1;

  this.setState({
    count
  });
};
export default Counter;
