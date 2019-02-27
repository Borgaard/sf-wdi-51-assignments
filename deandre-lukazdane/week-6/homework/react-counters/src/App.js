import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";

this.state = {
  counters: 5
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <CounterList counter={this.state.counters} />
        </Header>
      </div>
    );
  }
}

export default App;
