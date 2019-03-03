import React, { Component } from 'react';

class UpdateTodoForm extends Component {
  
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
    this.setState({
      todo: ""
    })
  }
  
  render() {
    return (
      <div>
        <div className="updateTodoForm">
          <form onSubmit={ this.onSubmit }>
            <input 
              type="text"
              onChange={ this.onChange }
              placeholder="update this todo here"
  // check if state exists and todo state exist if true we can update inside of value of input. && will only return last true val
              value={ (this.state && this.state.todo) || '' }/>
            <button type='submit'>Save</button>  
          </form>
        </div>
        
      </div>
    );
  }
}

export default UpdateTodoForm;