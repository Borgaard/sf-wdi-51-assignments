import React, { Component } from "react";

class UpdateTodoForm extends Component {
  state = {
    todo: {
      _id: this.props.todo._id,
      body: this.props.todo.value
    }
  };
  onChange = event => {
    this.setState({
      todo: event.target.value
    });
  };
  onsubmit = event => {
    event.preventDefault();
    let todo = this.state.todo;
    this.props.updateTodo(todo);
    this.setState({ todo: "" });
  };
  render() {
    return (
      <div className="updateTodoForm">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            onChange={this.onChange}
            placeholder="Update this todo here"
            value={(this.state && this.state.todo) || ""}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default UpdateTodoForm;
