import React, {Component} from 'react'

// we can re-write into stateless 
// const Todo =

class Todo extends Component {

  deleteClickedTodo = (e) => {
    e.preventDefault();
// set up props for deleteTodo, this.props.todo

    this.props.deleteTodo(this.props.todo);
  }

  render(){
    return(
      <li data-todos-index={this.props.todo._id}>
        <span>{this.props.todo.body}</span>
        {/* link component just routes, we use a tag instead user just do something */}
        <a
        // it won't let you go anywhere
          href="#removeTodo"
          className='remove'
          onClick={ this.deleteClickedTodo }>
          Remove
        </a>
      </li> 
    )
  }
}

export default Todo;