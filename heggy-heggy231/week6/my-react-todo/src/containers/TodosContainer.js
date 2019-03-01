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
      this.setState({newTodos})
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
        <TodosList
          todos={this.state.todos} />
        <CreateTodoForm
          createTodo={ this.createTodo }
        />
      </div>
    );
  }
}

export default TodosContainer;