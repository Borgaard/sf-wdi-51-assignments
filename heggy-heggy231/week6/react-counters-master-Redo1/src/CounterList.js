import React, { Component } from 'react';
import Counter from "./Counter";

class CounterList extends Component {
  render() {
    let counters = [];
    // this.props.appdata.appCounters is 5
    for (let i = 0; i < this.props.appdata.appCounters; i++) {
      // push the entire html I wrote inside of Counter.js
      counters.push(<Counter />);
    }
    // debugger;
    // you can't put regular debugger inside of  
    //  I need to escape xml by putting { }
    return (

      // remember first curly will take you out into JS
      //  second curly is my regular js code
      <div className="Counter-row">
      {/* now pass in the array upthere in line 6. counters:0 +|- show up here 5 times */}
        { counters }
      </div>
    );
  }

}

export default CounterList;