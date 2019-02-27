// bring in React and Component instance from React
import React, {Component} from 'react'

// define our Hello component
class Hello extends Component {
  render () {
    return (
      <div >
        <h1>Hello {this.props.name}</h1>
        <p>Are you ready to learn more React?</p>
      </div>
    )
  }
}

export default Hello
