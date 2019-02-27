import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";

class App extends Component {
  state = {
    counters: 0
  };

  /* Define an increaseCounters() method and decreaseCounters() method on the App component (they'll be a lot like the increaseCount() and decreaseCount()methods of ourCounter` component).
  */
  increaseCounters = () => {
    let counters = this.state.counters + 1;
    this.setState({ counters });
  }

  decreaseCounters = () => {
    let counters = this.state.counters - 1;
    this.setState({ counters });
  }

  render() {
    debugger;
    return (
      <div className="App">
      {/* pass them both to the Header component as props */}
        <Header 
          countersCount = {this.state.counters}
          increaseCounters = {this.increaseCounters}
          decreaseCounters = {this.decreaseCounters} />

        {/* index.js data.counter =5 is coming here */}
        {/* <h4>{this.props.data.counters}</h4> */}
        
{/* passing to CounterList component app.js state counters value */}
        <CounterList counters={this.state.counters} />
        {/* <CounterList counters={this.props.data.counters}/> */}
      </div>
    );
  }
}

export default App;
