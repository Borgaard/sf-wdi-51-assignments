import React, { Component } from "react";
import Counter from "./Counter";

class CounterList extends Component {
  render() {
    //counterList will contain an array of counters
    let counters = [];
    for (let i = 0; i < this.props.countersgit; i++) {
      counters.push(<Counter key={i} />);
    }
    return <div className="Counter-row">{counters}</div>;
  }
}

export default CounterList;
