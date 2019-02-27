import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decreaseCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="Counter">
        <h4>Counter: {this.state.count}</h4>
        <button className={"increaseButton"} onClick={this.increaseCount}>
          Increment
        </button>
        <button className={"decreaseButton"} onClick={this.decreaseCount}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
