import React, { Component } from "react";
import TodoForm from "./UpdateTodoForm";
class Todo extends Component {
  deletelClickedTodo = () => {
    this.props.deleteTodo(this.props.todo);
  };
  render() {
    return (
      <li data-todos-index={this.props.todo._id}>
        <div>
          <span>{this.props.todo.body}</span>
          <a
            href="#removeTodo"
            className="remove"
            onClick={this.deleteClickedTodo}
          >
            Remove
          </a>
        </div>
        <TodoForm
          todo={this.props.todo}
          buttonName="Update!"
          updateTOdo={this.props.ipdateTodo}
        />
      </li>
    );
  }
}

export default Todo;
