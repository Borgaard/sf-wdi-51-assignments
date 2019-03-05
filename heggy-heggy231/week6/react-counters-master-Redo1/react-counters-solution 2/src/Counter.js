import React, { Component } from "react";

class Counter extends Component {
  // need to have counter value (0,1,2,-3)

  state = {
    count: 0
  }

  increment = () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }
  
  decrement = () => {
    let newCount = this.state.count - 1
    this.setState({
      count: newCount
    })  
  }
  render() {

    return (
      <div className='Counter' >
        <h4>Counter: {this.state.count}</h4>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
