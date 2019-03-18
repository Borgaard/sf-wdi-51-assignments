import React, { Component } from 'react';
import TodoModel from '../models/Todo';
import TodosList from '../components/TodosList'
import CreateTodoForm from '../components/CreateTodoForm'

class TodosContainer extends Component {
  state = {
    todos: []
  };

  // when TodosContainer mounts, fetch todo data
  componentDidMount () {
    this.fetchData()
  }

  // Fetch all todos from super crud data
  fetchData () {
    TodoModel.all().then( (res) => {
      this.setState({
        todos: res.data.todos,
        todo: ''
      });
    })    
  }

  // Provide a function to delete a todo on successful response
  deleteTodo = (todo) => {
    TodoModel.delete(todo).then( (res) => {
      let todos = this.state.todos.filter(function(todo) {
        return todo._id !== res.data._id
      });
      this.setState({ todos }) // in es6 if the key and value have the same new, you don't have to write out the key value pair
    })
  }

  // Provide a function to create new todos
  createTodo = (todo) => {
    let newTodo = {
      body: todo,
      completed: false
    }

    TodoModel.create(newTodo).then( (res) => {
      let todos = this.state.todos;
      let newTodos = todos.push(res.data);
      this.setState({ newTodos })
    })
  }

  updateTodo = (todo, todoBody, todoId) => {
    function isUpdatedTodo(todo) {
      return todo._id === todoId;
    }
    TodoModel.update(todoId, todoBody).then( (res) => {
      let todos = this.state.todos;
      todos.find(todo => isUpdatedTodo(todo)).body = todoBody.body;
      this.setState({ todos })
    })
  }

  render() {
    return (
      <div className='todosContainter'>
        <CreateTodoForm createTodo={this.createTodo}/>
        <TodosList 
          todos={this.state.todos} 
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default TodosContainer;