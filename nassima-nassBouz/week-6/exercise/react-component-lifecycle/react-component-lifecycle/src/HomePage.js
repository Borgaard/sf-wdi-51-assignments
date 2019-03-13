import React, { Component } from 'react'

export default class HomePage extends Component {
  constructor() {
    super();
    console.log("Home.js: In constructor()");
  }

  componentDidMount(){
    console.log('Home.js In componentDidMount()');
  }

  // componentDidUpdate(prevProps) {
  //   console.log(`Home.js: In componentDidUpdate(). prevProps: ${JSON.stringify(prevProps)}`);
  // }

  componentWillUnmount(){
    console.log('Home.js: In componentWillUnmount()');
  }

  render() {
    console.log("Home.js: In render()")
    return (
      <div>
        <h2>Page Title: {this.props.message}</h2>
      </div>
    )
  }

}