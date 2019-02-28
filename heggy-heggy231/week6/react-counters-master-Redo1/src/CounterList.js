import React, { Component } from 'react';

class CounterList extends Component {
  render() {
    // debugger;
    // you can't put regular debugger inside of  
    //  I need to escape xml by putting { }
    return (

      // remember first curly will take you out into JS
      //  second curly is my regular js code
      <div>
        { this.props.appdata.appCounters }
      </div>
    );
  }

}

export default CounterList;