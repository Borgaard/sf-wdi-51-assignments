import React, { Component } from 'react'

export default class CreateTodoForm extends Component {
  state = {
      todo: ''
  };
  
    render() {
    return (
      <div>
        <form onSubmit={ this.onFormSubmit } id="taskForm">
            <input
              onChange={ this.onInputChange }  
              value={ this.state.todo }
              placeholder="What do you need to do?"
              type="text"
              id="newItemDescription"
              />
            <button 
                type="submit" 
                id="addTask"
                className="btn">Submit</button>
        </form>
      </div>
    )
  }
}
