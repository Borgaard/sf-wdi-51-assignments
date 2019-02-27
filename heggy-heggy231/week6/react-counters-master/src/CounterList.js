import React, { Component } from "react";
import Counter from "./Counter";
// import App from "./App";

class ContainerList extends Component {
  render() {
    let counters = [];
    // this.props.counters is from index.js data.counters =5  > App.js
    for( let index = 0; index < this.props.counters; index++ ) {
      // counters = [<Item />, <Item />, <Item />, ....];
      counters.push(<Counter />);
    }
    return <div className="Counter-row">{counters}</div>
  }
}

export default ContainerList;