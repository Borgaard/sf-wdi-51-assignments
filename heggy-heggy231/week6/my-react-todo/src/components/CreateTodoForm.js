import React, { Component } from 'react';

class CreateTodoForm extends Component {
  state = {
    // container for data in the futuer
    todo: ''
  };

  onInputChange = (event) => {
    this.setState({
      todo: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    // user submit the string of something
    let todo = this.state.todo;
    // .createTodo() is a function
    this.props.createTodo(todo)
    this.setState({
      todo: ""
    })
  }

  render() {
    return (
      <div>
        {/* calling onFormSubmit function*/}
        <form onSubmit={ this.onFormSubmit } id="taskForm">
          <input 
            onChange={ this.onInputChange }
  // initial this.state.todo is empty str
            value={this.state.todo} 
            type="text" 
            id="newItemDescription" 
            placeholder="What do you need to do?"
          />
          <button 
            type="submit" 
            id="addTask" 
            className="btn">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default CreateTodoForm;