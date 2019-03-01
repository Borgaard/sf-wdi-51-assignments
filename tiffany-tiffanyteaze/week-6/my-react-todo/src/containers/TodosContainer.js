import React, { Component } from 'react'
import TodoModel from '../models/Todo'
import Todos from '../components/Todos'

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

  render() {
    TodoModel.all().then( (res) => {
      console.log(res);
    })

    return (
      <div className="todosContainer">
        <Todos
          todos={this.state.todos} />
      </div>
    );
  }
}

export default TodosContainer;