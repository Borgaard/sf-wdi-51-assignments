// Counter component so that it is using state to track the count internally and clicking one of the buttons changes the count number.
import React, { Component } from "react";

// create Counter Component
// Counter component to keep track of the count in state
class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    debugger;
    return (
      <div className="Counter">
        <h4>Counter: 0</h4>
        {/* <button>Decrement</button> */}
        <button onClick={this.increaseCount}>Increment</button>
        {/* <button>Increment</button> */}
        <button onClick={this.decreaseCount}>Decrement</button>
      </div>
    );
  }

  increaseCount = () => {
    let count = this.state.count + 1;

    this.setState({
      count
    });
  }

  decreaseCount = () => {
    let count = this.state.count - 1;

    this.setState({
      count
    });
  }
}

//  make counter available
export default Counter;