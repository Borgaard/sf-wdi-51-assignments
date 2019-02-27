import React, { Component } from 'react';
import Counter from './Counter';

 class CounterList extends Component {
  render() {
    let counterArray= [];
    for(i = 0; i < this.props.counter; i++) {
      counterArray.push(<Counter />);
    }
    return (
      <div>{counterArray}</div>
    )
  }
}
export default CounterList
