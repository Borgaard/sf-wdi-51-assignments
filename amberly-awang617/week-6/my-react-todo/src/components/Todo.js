import React, {Component} from 'react'
import UpdateTodoForm from './UpdateTodoForm'

class Todo extends Component {

  deleteClickedTodo = (event) => {
    event.preventDefault()
    this.props.deleteTodo(this.props.todo);
  };

  render(){
    return(
        <li data-todos-index={this.props.todo.id}>
        <div>
          <span>{this.props.todo.body}</span>
          <a 
            href="#removeTodo"
            className='remove'
            onClick={this.deleteClickedTodo}>
            Remove</a>
          <UpdateTodoForm 
            todo={this.props.todo}
            buttonName="Update Todo!"
            updateTodo={this.props.updateTodo}
          />
        </div>
        </li>
    )
  }
}

export default Todo