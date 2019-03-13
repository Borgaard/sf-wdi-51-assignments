import React, {Component} from 'react'
import TodoModel from '../models/Todo'
//import Todos from '../models/Todo'
import TodosList from '../components/TodosList'
import CreateTodoForm from '../components/CreateTodoForm'

class TodosContainer extends Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }
  //when todos container mounts , fetch todo data 
  componentDidMount(){
    this.fetchData()
  }
  // fetch 
  fetchData(){
    TodoModel.all().then( (res) => {
      this.setState ({
        todos: res.data.todos,
        todo: ''
      })
    })
  }
//   provide a function to delete
    deleteTodo = (todo) => {
        TodoModel.delete(todo).then((res)=>{
            let todos = this.state.todos.filter(function(todo) {
                return todo._id !== res.data._id
            });
            // the same as putting todos: todos ES6 feature
            this.setState({ todos })
        })
    }
  // provide a function createTodo
  createTodo = (todo) => {
    let newTodo = {
        body: todo,
        completed: false
    }
    TodoModel.create(newTodo).then((res) => {
        let todos = this.state.todos
        let newTodos = todos.push(res.data)
        //  same as todos: newTodos
        this.setState({newTodos})
    })
  }
//  update 
updateTodo = (todoId,todoBody) => {
    function isUpdatedTodo(todo) {
        return todo._id === todoId;
    }
    TodoModel.update(todoId, todoBody).then((res) => {
        let todos = this.state.todos
        todos.find(todo => isUpdatedTodo(todo)).body = todoBody.body
        this.setState({todos})
    })
  }

  render(){
    return (
      <div className="todosComponent">
       <CreateTodoForm createTodo={ this.createTodo}/>
        <TodosList
          todos={this.state.todos}
          updateTodo={ this.updateTodo} 
          deleteTodo= {this.deleteTodo}
         />
      </div>
    )
  }
}

export default TodosContainer