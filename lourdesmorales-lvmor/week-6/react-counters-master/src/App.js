import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";

class App extends Component {
  state = {
    counters: 0,
    color: "blue"
  };

  increaseCounters = () => {
    this.setState({ counters: this.state.counters + 1, color: "green" });
  };

  decreaseCounters = () => {
    this.setState({ counters: this.state.counters - 1, color: "red" });
  };

  render() {
    return (
      <div className="App" style={{ color: this.state.color }}>
        <Header
          countersCount={this.state.counters}
          increaseCounters={this.increaseCounters}
          decreaseCounters={this.decreaseCounters}
        />
        <CounterList counters={this.state.counters} />
      </div>
    );
  }
}

export default App;
