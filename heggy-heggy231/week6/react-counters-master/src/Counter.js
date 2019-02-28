// Counter component so that it is using state to track the count internally and clicking one of the buttons changes the count number.
import React, { Component } from "react";

// create Counter Component
// Counter component to keep track of the count in state
class Counter extends Component {
  state = {
    // state is where we declare variable and change this
    // nor var let const just put the var name
    count: 0
  };

  // 
  increaseCount = () => {
    //let count = this.state.count + 1;
    console.log(`clickedIncrease?`);
    this.setState({
      count:this.state.count + 1
    });
  }

  decreaseCount = () => {
    //let count = this.state.count - 1;

    this.setState({
      count:this.state.count - 1
    });
  }


  render() {
    debugger;
    return (
      <div className="Counter">
        {/* where do I want my var inside of HTML how to get variable?? 
            user the state variable to get the counter number
        */}
  

        <h4>Counter: { this.state.count }</h4>
        {/* <button>Decrement</button> */}
        <button onClick={this.increaseCount}>Increment</button>
        {/* <button>Increment</button> */}
        <button onClick={this.decreaseCount}>Decrement</button>
      </div>
    );
  }

}

//  make counter available
export default Counter;