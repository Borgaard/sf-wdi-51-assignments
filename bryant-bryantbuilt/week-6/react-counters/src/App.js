import React, { Component } from "react";
import Header from "./Header";
import CounterList from './CounterList';

class App extends Component {
  state = {
      numOfCounters: 0,
    };

  addCounter = () => {
      console.log('Add Counter');
      this.setState({
          numOfCounters: this.state.numOfCounters + 1
      });
  }

  removeCounter = () => {
      console.log('Remove Counter');
      this.setState({
          numOfCounters: this.state.numOfCounters - 1
      });
  }
  
  render() {
    return (
      <div className="App">
        <Header 
          numOfCounters={this.state.numOfCounters} 
          addCounter={this.addCounter} 
          removeCounter={this.removeCounter}/>
        <CounterList numOfCounters={this.state.numOfCounters}/>
      </div>
    );
  }
}

export default App