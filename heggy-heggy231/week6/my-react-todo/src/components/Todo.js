import React, {Component} from 'react'

// we can re-write into stateless 
// const Todo =

class Todo extends Component {
  render(){
    return(
      <li data-todos-index={this.props.todo._id}>
        <span>{this.props.todo.body}</span>
      </li> 
    )
  }
}

export default Todo;