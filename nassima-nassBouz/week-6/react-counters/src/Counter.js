import React, { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
    this.state = {
        count : 0
    };
}
    incrementCount = () =>{
        let count =  this.state.count + 1;
        this.setState({count});
    }
    decrementCount = () =>{
        let count =  this.state.count - 1;
        this.setState({count});
    }
  render() {
    console.log(this.state.count);
    return (
      <div className="Counter">
        <h4>Counter : {this.state.count}</h4>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}

export default Counter;