import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <li data-todos-index={this.props.todo.id}>
        <span>{this.props.todo.body}</span>
      </li>
    );
  }
}

export default Todo;
