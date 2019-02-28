import React, { Component } from "react";
import Counter from './Counter'

class CounterList extends Component {
    // state = {
    //     counters: this.props.counters
    // }
    render() {
    //   let list = [<Counter />, <Counter />, <Counter />];
        let list = [];
        for (var i=0; i < this.props.counters; i++) {
            list.push(<Counter key={i}/>)
        }
  
      return (
        <div className="Counter-row">
            {list}
        </div>
      )
    }
  }

export default CounterList;
