import React, { Component } from "react";

// create Counter Component
class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <h4>Counter: 0</h4>
        <button>Decrement</button>
        <button>Increment</button>
      </div>
    );
  }
}

//  make counter avaialble
export default Counter;