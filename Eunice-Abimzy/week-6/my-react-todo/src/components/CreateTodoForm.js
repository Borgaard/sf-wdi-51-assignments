import React, { Component } from 'react'

 class CreateTodoForm extends Component {
    // constructor(){
    //     super()-------Don't need these, since they are default
     //This sets the initial state of the todo 
     state = {
         todo: ''
     }
     onInputChange = (event) => {
         this.setState({
             todo: event.target.value //target here will be whatever input user types in
            })
        }
         onFormSubmit = (event) => {
             event.preventDefault();

             let todo = this.state.todo;
             this.props.createTodo(todo); //
             this.setState({
                 todo: ""
             })
         }
//First, describe how you want todo to render, then abstract the states above the render statement
  render() {
    return (
      <div>
        <form id="taskForm" onSubmit={ this.onFormSubmit }>
        <input 
            onChange= { this.onInputChange }
            value= { this.state.todo }
            placeholder= "What do you need to do?"
            type="text"
            id="newItemDescription"
        />
        <button type="submbit" id="addTask" className="btn">Add Todo</button>
        </form>
      </div>
    )
  }
}
export default CreateTodoForm
