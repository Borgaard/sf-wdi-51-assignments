import React, { Component } from "react";
import  Counter from './Counter';

class List extends Component {
    render() {
    //   let numCounters = [<Counter />, <Counter />, <Counter />,<Counter/>,<Counter/>];
    
      let counters = []
        // this.props.counters is the counters variable passed down from the APP component
        // this will determine the amount of times the loop runs
      for(let i = 0; i < this.props.counters; i++) {
          // for each time the loop runs, we are pushing a Counter component inside the counters array
        counters.push(<Counter key={i} />)
      }
      return <div className="list">
      {counters}
      </div>;
    }
  }

  export default List;