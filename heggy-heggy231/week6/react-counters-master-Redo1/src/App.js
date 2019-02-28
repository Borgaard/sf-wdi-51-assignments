import React, { Component } from "react";
import Header from "./Header";
// get my CounterList access
import CounterList from "./CounterList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* passing 5 to counterList */}
        <CounterList appdata =
        // put into obj with key value counters: 5  
        {
          {appCounters: this.props.data.counters}
        } />
  {/* receiving data from  index.js hard coded data 5 */}
        <p> { this.props.data.counters } </p>
      </div>
    );
  }
}

// remember to export making it public
export default App;