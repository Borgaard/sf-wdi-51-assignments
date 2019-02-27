import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      counters: 5
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        {/* Define an increaseCounters() method and decreaseCounters() method on the App component (they'll be a lot like the increaseCount() and decreaseCount()methods of ourCounter` component).
         */}
        {/* index.js data.counter =5 is coming here */}
        {/* <h4>{this.props.data.counters}</h4> */}
        increaseCount = () => {
          let count = this.state.count + 1;

          this.setState({
            count
          });
        }

        decreaseCount = () => {
          let count = this.state.count - 1;

          this.setState({
            count
          });
        }
        <CounterList counter={this.state.counters} />
        {/* <CounterList counters={this.props.data.counters}/> */}
      </div>
    );
  }
}

export default App;
