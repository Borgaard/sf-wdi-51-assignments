import React, { Component } from "react";
import Counter from './Counter';

class CounterList extends Component {
    state ={
        numberOfCounters: 0
    };

    render() {
        let list= [];
        for (var i=0; i< 5; i++){
            list.push(<Counter/>)
        }

      return (
        <div className="Counter-row">
            {list}
        </div>
      );


    }
  }
  
  

export default CounterList;