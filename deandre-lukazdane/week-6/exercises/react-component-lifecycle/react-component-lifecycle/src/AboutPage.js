import React, { Component } from 'react'

// Update this component to use the Updating Component Lifecycle methods

export default class AboutPage extends Component {
  state = {
    counter: 0
  }

  componentDidMount(){
    console.log('AboutPage.js: In componentDidMount()');
    //uncomment the below line and notice the change in output and the counter value
    // this.setState({counter:2}) 
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(`AboutPage.js: In shouldComponentUpdate(). nextState: ${JSON.stringify(nextState)}`);
    /*uncommment below two lines of code to check 
      if the User is decrementing do not update the counter value
      else update it*/
    // if(nextState.counter+1 === this.state.counter)
    //   return false;
    return false; //return false to see the change in output. Notice any difference??
  }

  componentDidUpdate(prevProps, prevState){
    console.log(`AboutPage.js: In componentDidUpdate(). prevState: ${JSON.stringify(prevState)}`);
  }

  incrementCounter = () => {
    let { counter } = this.state
    counter++

    this.setState({
      counter
    })
  }

  decrementCounter = () => {
    let { counter } = this.state
    counter--

    this.setState({
      counter
    })
  }

  render() {
    console.log('AboutPage.js: In render()');
    return (
      <div>
        <h2>{this.props.message}</h2>
        <p>{this.state.counter}</p>
        <button onClick={this.incrementCounter}>+</button>
        <button onClick={this.decrementCounter}>-</button>
      </div>
    )
  }
}