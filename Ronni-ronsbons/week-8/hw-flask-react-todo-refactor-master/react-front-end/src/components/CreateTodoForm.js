import React, {Component} from 'react'

class CreateTodoForm extends Component {
  constructor(){
    super()
    //sets the initial state via the constructor! that's the constructor's job :)
    this.state = {
      todoBody: '',
      todoPriority: '',
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  
  onInputChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onFormSubmit(event){
    event.preventDefault()
    let todo = {
      todoBody: this.state.todoBody,
      todoPriority: this.state.todoPriority
    }
    this.props.createTodo(todo)
    this.setState({
      todoBody: '',
      todoPriority: '',
    })
  }

  render(){
    return (
      <div >
        <form onSubmit={ this.onFormSubmit } id="taskForm">
          <input  
            onChange={ this.onInputChange }
            name="todoBody" 
            type="text" id="newItemDescription" 
            placeholder="What do you need to do?" 
            value={this.state.todoBody}
          />
          <label>Priority</label>
          <input
            onChange={this.onInputChange}
            name="todoPriority"
            type="number"
          />
          <button type="submit" id="addTask" className="btn">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default CreateTodoForm