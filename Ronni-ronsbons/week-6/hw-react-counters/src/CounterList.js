import React, { Component } from "react";
import Counter from './Counter.js';

class CounterList extends Component {
  render() {
    let numOfCounters = [];
    // add a Counter component for as many are in <CounterList counter={this.state.counters} />
    // instead of i < array.length, you're getting the number of counters from the amount set in App -   state = { counters: 5, };
    for (var i = 0; i < this.props.counter; i++) {
      // adding each Counter component's HTML block to empty array of numOfCounters
      numOfCounters.push(<Counter />);
    };

    return (
      <div className="counter-wrapper row">
        {numOfCounters}
      </div>
    );
  };
};

export default CounterList;
