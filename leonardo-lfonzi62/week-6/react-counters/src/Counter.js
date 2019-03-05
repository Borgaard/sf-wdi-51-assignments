import React, { Component } from "react";

class Counter extends Component {
    state = {
        count:0
    }
        increaseCount = () => {
            this.setState({
                // setting the state of the counter to increment by 1 when function is called
                count: this.state.count + 1
            });
        }

        decreaseCount = () => {
            this.setState({
                // decreasing the state of the counter by -1 when function is called
                count: this.state.count - 1
            });
        }
    render() {
        return(
        <div className="Counter">
        <h4>Counter {this.state.count}</h4>
        <button onClick={this.decreaseCount}>Decrement</button>
        <button onClick={this.increaseCount}>Increment</button>
      </div>
        )
    }
}




export default Counter;