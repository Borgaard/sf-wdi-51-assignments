import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";

class App extends Component {
  state = {
    numberOfCounters: 0
  };

  increaseCounters = () => {
    let counters = this.state.numberOfCounters + 1;
    this.setState({
      counters
    });
  };

  decreaseCounters = () => {
    let counters = this.state.numberOfCounters - 1;
    this.setState({
      counters
    });
  };
  render() {
    return (
      <div className="App">
        <Header
          countersCount={this.state.numberOfCounters}
          increaseCounters={this.increaseCounters}
          decreaseCounters={this.decreaseCounters}
        />
        <CounterList counter={this.state.numberOfCounters} />
      </div>
    );
  }
}

export default App;
