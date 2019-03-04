import React, { Component } from 'react'
import TodoModel from '../models/Todo'
import Todos from '../components/Todos'
import CreateTodoForm from '../components/CreateTodoForm';

class TodosContainer extends Component {

state = {
    todos: []
};

//when TodosContainer mounts, fetch todo data
componentDidMount(){
  this.fetchData()
}

//fetch all todos from super-crud-api
fetchData() {
  // like the success function in an AJAX object
  TodoModel.all().then( (res) => {
    this.setState ({
      todos: res.data.todos,
      todo: ''
    })
  })
}

// Provide a function to create new todos
createTodo = (todo) => {
  let newTodo = {
    body: todo,
    completed: false
  }

  TodoModel.create(newTodo).then((res) => {
    let todos = this.state.todos;
    let newTodos = todos.push(res.data);
    this.setState({ newTodos });
  })
}

deleteTodo = (todo) => {
  TodoModel.delete(todo).then((res) => {
      let todos = this.state.todos.filter(function(todo) {
        return todo._id !== res.data._id
      });
      this.setState({todos})
  })
}

updateTodo = (todoBody, todoId) => {
  function isUpdatedTodo(todo) {
      return todo._id === todoId;
  }
  TodoModel.update(todoId, todoBody).then((res) => {
      let todos = this.state.todos
      todos.find(isUpdatedTodo).body = todoBody.body
      this.setState({todos: todos})
  })
}

render(){
  return (
    <div className="todosComponent">
      <CreateTodoForm
        createTodo={ this.createTodo }
      />
      <Todos
        todos={ this.state.todos }
        updateTodo={ this.updateTodo } 
        deleteTodo={ this.deleteTodo }
        />
    </div>
  )
}
}

export default TodosContainer;