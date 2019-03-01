import React, { Component } from "react";
import TodoModel from "../models/Todo";
import TodosList from "../components/TodosList";
import CreateTodoForm from "../components/CreateTodoForm";
class TodosContainer extends Component {
  state = {
    todos: []
  };

  //when todoscontainer mounts ftch todo data
  componentDidMount() {
    this.fetchData();
  }

  //feth all todos from super-crud-api
  fetchData() {
    TodoModel.all().then(res => {
      this.setState({
        todos: res.data.todos,
        todo: ""
      });
    });
  }
  createTodo = todo => {
    let newTodo = {
      body: todo,
      completed: false
    };
    TodoModel.create(newTodo).then(res => {
      let todos = this.state.todos;
      let newTodos = todos.push(res.data);
      this.setState({ newTodos });
    });
  };
  render() {
    return (
      <div className="todosContainer">
        <TodosList todos={this.state.todos} />
        <CreateTodoForm createTodo={this.createTodo} />
      </div>
    );
  }
}

export default TodosContainer;
