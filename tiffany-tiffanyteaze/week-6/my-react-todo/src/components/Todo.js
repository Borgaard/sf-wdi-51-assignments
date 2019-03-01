import React, { Component } from 'react'

export default class Todo extends Component {
    deleteClickedTodo = (event) => {
        event.preventDefault();
        this.props.deleteTodo(this.props.todo);
    }
    render(){
        return(
          <li data-todos-index={this.props.todo.id}>
            <span>{this.props.todo.body}</span>
            <a
                href="#removeTodo"
              className='remove'
              onClick={this.deleteClickedTodo}>
              Remove
            </a>
          </li> 
        )
      }
}
