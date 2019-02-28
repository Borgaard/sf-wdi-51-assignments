import React from "react";
import Counter from "./Counter";

class CounterList extends React.Component {
  render() {
    let counters = [];
    for (let i = 0; i < this.props.counter; i++) {
      counters.push(<Counter key={i} />);
    }
    return <div className="Counter-row">{counters}</div>;
  }
}

export default CounterList;
