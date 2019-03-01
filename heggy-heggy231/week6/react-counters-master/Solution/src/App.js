import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";

class App extends Component {
  state = {
    counters: 0
  }

  increaseCounters = () => {
    let counters = this.state.counters + 1
    this.setState({ counters })
  }

  decreaseCounters = () => {
    let counters = this.state.counters - 1
    this.setState({ counters })
  }

  // need to have numberOfCounters
  render() {
    return (
      <div className="App">
        <Header 
          countersCount={this.state.counters}
          increaseCounters={this.increaseCounters} 
          decreaseCounters={this.decreaseCounters} />
        <CounterList 
          counters={this.state.counters} />
      </div>
    );
  }
}

export default App;