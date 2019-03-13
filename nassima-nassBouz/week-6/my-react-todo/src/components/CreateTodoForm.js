import React, {Component} from 'react'

class CreateTodoForm extends Component {
    //sets the initial state via the constructor! that's the constructor's job :)
    state = {
      todo: ''
    }

  onInputChange = (event) => {
    this.setState({
        //event.target is the input
      todo: event.target.value
    })
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    let todo = this.state.todo
    this.props.createTodo(todo)
    this.setState({
      todo: ""
    })
  }
  render(){
    return (
      <div >
        <form id="taskForm" onSubmit={ this.onFormSubmit }>
          <input 
            type="text" 
            onChange={ this.onInputChange } 
            id="newItemDescription" 
            placeholder="What do you need to do?" 
            value={this.state.todo}
          />
          <button 
            type="submit" 
            id="addTask" 
            className="btn">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default CreateTodoForm