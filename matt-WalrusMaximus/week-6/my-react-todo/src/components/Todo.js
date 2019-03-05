import React, { Component } from 'react';

class Todo extends Component {
<<<<<<< HEAD
    deleteClickedTodo = () => {
        this.props.deleteTodo(this.props.todo)
    }
    
=======
>>>>>>> 565996ace3e32c9f7426c55684217eeabab45a7b
    render() {
        return (
            <li data-todos-index={ this.props.todo._id }>
                <span>{this.props.todo.body}</span>
<<<<<<< HEAD
                <a
                    href="#removeTodo"
                    className="remove"
                    onClick= {this.deleteClickedTodo}>
                    Remove
                </a>
=======
>>>>>>> 565996ace3e32c9f7426c55684217eeabab45a7b
            </li>
        );
    }
}

export default Todo;
