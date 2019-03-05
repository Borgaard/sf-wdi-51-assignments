import React, { Component } from 'react'

 class Todo extends Component {

  deleteClickedTodo = () => {
    this.props.deleteTodo(this.props.todo);
  }
  render() {
    return (
        <li data-todos-index={this.props.todo.id}>
        <span>{this.props.todo.body}</span>
        <a
        className="remove"
        onClick={this.deleteClickedTodo}>
        remove
        </a>
      </li> 
    )
  }
}
export default Todo