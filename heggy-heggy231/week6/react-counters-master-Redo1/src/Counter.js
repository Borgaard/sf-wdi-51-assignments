import React, { Component } from 'react';

// class is definition of obj that has data and functions!!

class Counter extends Component {
  // creating a state for Counter
  state = {
    count: 0, 
  }

  increaseCount = () => {
    let count = this.state.count + 1;

    // method from REact that changes the state! .setState().  This saves it up in state.
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

  render() {
    return (
      // I will create Counter UI with +|- button, CSS has class "Counter"
      <div className="Counter">
      {/* get Counter value to get updated by the state!!  */}
        <h4>Counter : {this.state.count}</h4>
        {/* <button>Decrement</button>
        <button>Increment</button> */}
        <button onClick={this.decreaseCount}>Decrement</button>
        <button onClick={this.increaseCount}>Increment</button>
      </div>
    );  // end of the return stamt

  } // end of render
}

export default Counter;