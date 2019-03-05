import React, { Component } from "react";

class Counter extends Component {
    state ={
        count: 0
    };

    increase = () => {
        let count = this.state.count +1; 
        this.setState({
            count
        })
    };

      decrease = () => {
      let count = this.state.count -1;
      this.setState({
          count
      })
  };

    render() {
        
      return (
        <div className="Counter">
            <h4>Counter</h4>
            <div>{this.state.count}</div>
            <button onClick={this.increase}>Increment</button>
            <button onClick={this.decrease}>Decrement</button>

             
        </div>
      );



    }
  }
  
  

export default Counter;