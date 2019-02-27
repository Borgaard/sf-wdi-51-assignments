import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0
    }
    render() {
      return (
          <div className='Counter'>
              <h4>Counter: {this.state.count}</h4>
              <button onClick={this.increaseCount}>Increment</button>
              <button onClick={this.decreaseCount}>Decrement</button>
          </div>
      )
    }
    increaseCount = () => {
        let count = this.state.count + 1;
        this.setState({count});
    }

    decreaseCount = () => {
        let count = this.state.count -1;
        this.setState({count});
    }
  }

export default Counter;
