import React, { Component } from 'react';
import TodoModel from '../models/Todo';
import TodosList from '../components/TodosList'

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

  render() {
    return (
      <div className='todosContainter'>
        <TodosList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodosContainer;