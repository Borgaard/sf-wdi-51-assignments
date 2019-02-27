import React, { Component } from 'react';

 class Counter extends Component {
  render() {
    // counter value to be done dynamically later
    let counter = ` -5`; 
    return (
      <div>
        <h2>Counter:{counter}</h2>
        <button>Decrement</button> <button>Increment</button>
      </div>
    )
  }
}
export default Counter

