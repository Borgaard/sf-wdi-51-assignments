import React, {Component} from 'react';
import TodoModel from "../models/Todo";
import Todos from '../components/Todos';
import CreateTodoForm from '../components/CreateTodoForm'


class TodosContainer extends Component {
    state = {
        todos: []
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData() {
        TodoModel.all().then( (res) => {
            this.setState({
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
        TodoModel.create(newTodo).then((res) => {
            let todos = this.state.todos
            let newTodos = todos.push(res.data)
            this.setState({newTodos})
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


    render(){
        return (
            <div className="todosComponent">
            <Todos
              todos={this.state.todos} 
              deleteTodo={this.deleteTodo}
              />
            <CreateTodoForm
            createTodo={ this.createTodo }
            />
          </div>
        )
    }
}

export default TodosContainer