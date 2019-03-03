// containers/TodosContainer.js
import React, { Component } from 'react';
import TodoModel from '../models/Todo';
import TodosList from '../components/TodosList'
// At the top import the component
import CreateTodoForm from '../components/CreateTodoForm'

class TodosContainer extends Component {
  state = {
    // https://super-crud-api.herokuapp.com/api/todos
    todos: []
  };

  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    // .all() => static all() goes to models/todo.js axios
    // .then() => promise
    TodoModel.all().then( (res) => {
      this.setState ({
        todos: res.data.todos,
        todo: ''
      })
    })
  }

  // Create a function to delete a todo on successful response. After the todo delete response is sent back from the server, we find the corresponding entry for the todo in our todos state array and remove it.
  // why are we filtering? todos are saved on state.  we have to match.  remove from state, check for missiing todo is removing from UI
  deleteTodo = (todo) => {
    // note .delete() I need to create it
    // TodoModel.delete(todo) takes you back to the model Todo.js static delete() 
    TodoModel.delete(todo).then((res) => {
      // debugger;
  // callback function
      let todos = this.state.todos.filter(function(todo) {
  // only the todos that don't match the id of todo response data
        return todo._id !== res.data._id
      });
      this.setState({ 
        // we are updating the todos state 
        //  todos same as todos: todos
        todos : todos 
      })
    })
  }


// create new Todo
  createTodo = (todo) => {
    let newTodo = {
        body: todo,
        completed: false
    }
    // .then() indicates it is promise
    TodoModel.create(newTodo).then((res) => {
      // copy the current state
      let todos = this.state.todos
      // modify and push it back to the state
      let newTodos = todos.push(res.data)
      // this.setState({ todos: newTodos}) same as this.setState({ newTodos })
      this.setState({ newTodos})
    })
  }

  updateTodo = (todo, todoBody, todoId) => {
    // debugger;
    function isUpdatedTodo(todo) {
        return todo._id === todoId;
    }
// order matters (.update(todoId, todoBody))  static update(todoId, updateInfo) { since we are getting the model from todo.js model
    TodoModel.update(todoId, todoBody).then((res) => {
        let todos = this.state.todos;
        todos.find(isUpdatedTodo).body = todoBody.body;
        this.setState({todos: todos})
    })
  }

  render() {
    // debugger;
  // calling TodoModel.all() function
  // Note also that all() is a static method. What does this mean? A static method can be called without there being an instance of the class containing the static method. This will allow us to call all() in the following way (without instantiating the class with new):
    // TodoModel.all().then( (res) => (
    // // implicit return here for console.log(res); put it inside of ()
    //     console.log(res)
    // ))
    return (
      <div className='todosContainer'>
        <CreateTodoForm
          createTodo={ this.createTodo }
        />
        <TodosList
          todos={this.state.todos}
          updateTodos={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />

      </div>
    );
  }
}

export default TodosContainer;