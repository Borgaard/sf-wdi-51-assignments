import React, { Component } from 'react'

export default class updateTodoForm extends Component {
  state = {
    todo: this.props.todo.body
  }

  onChange = (event) => {
    this.setState({
      todo: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    let todo = this.state.todo;
    this.props.updateTodo(todo);
    this.setState({ todo: "" });
  }

  render() {
    return (
      <div className="updateTodoForm">
        <form onSubmit={ this.onSubmit }>
          <input
            type="text"
            onChange={ this.onChange } 
            placeholder="update this todo here"
            value={(this.state && this.state.todo) || ''}
            />
            <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}
