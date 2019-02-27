import React, { Component } from 'react';

 class Counter extends Component {
  render() {
    // Setting the value of counter to start counting at 0
    let counterValue = 0; 
    return (
      <div>
        <h2>Counter:{counterValue}</h2>
        <button>Decrement</button> <button>Increment</button>
      </div>
    )
  }
}
export default Counter

