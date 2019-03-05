import React, { Component } from "react";

class Counter extends Component {
  // setting each counter's starting point to 0
  state = {
    count: 0,
  };

  // function to increase count in event listener
  increaseCount = (event) => {
    event.preventDefault();
    let increasedCount = this.state.count + 1;

    this.setState({
      count: increasedCount,
    });
  };

  // function to decrease count in event listener
  decreaseCount = (event) => {
    event.preventDefault();
    let decreasedCount = this.state.count - 1;

    this.setState({
      count: decreasedCount,
    });
  };

  render() {
    return (
      <div className="counter col-sm border border-info bg-secondary">
        {/* displays starting state and then revised state */}
        <h4 className="text-white-50">Counter: {this.state.count}</h4>
        {/* event listeners on each button */}
        <button onClick={this.increaseCount} className="rounded">+</button>
        <button onClick={this.decreaseCount} className="rounded">-</button>
      </div>
    );
  };
};

export default Counter;
