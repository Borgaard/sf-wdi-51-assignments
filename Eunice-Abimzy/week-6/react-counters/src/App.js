import React, { Component } from 'react';
import Header from './Header';
import Counter from './Counter';
import CounterList from './CounterList';

 class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div><CounterList /></div>
        <Counter />
      </div>
    )
  }
}
export default App