import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";

// this.state = {
//   counters: 5
// };

// increaseCounters = () => {
//   let counters = this.State.counters + 1;
//   this.setState({ counters });
// };
class App extends Component {
  state = {
    counters: 0
  };

  increaseCounters = () => {
    let counters = this.State.counters + 1;
    this.setState({ counters });
  };
  decreaseCounters = () => {
    let counters = this.State.counters - 1;
    this.setState({ counters });
  };
  render() {
    return (
      <div className="App">
        <Header>
          countersCount={this.state.counters}
          increaseCounters={this.increaseCounters}
          decreaseCounters={this.decreaseCounters}
          <CounterList counter={this.state.counters} />
        </Header>
      </div>
    );
  }
}

export default App;
