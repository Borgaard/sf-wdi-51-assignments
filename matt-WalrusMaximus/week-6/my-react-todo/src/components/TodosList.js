import React, { Component } from 'react';
import Todo from './Todo'

class TodosList extends Component {
    render() {
        let todos = this.props.todos.map((todo) => {
            return (
<<<<<<< HEAD
                <Todo
                key={ todo._id }
                todo={ todo }
                deleteTodo={ this.props.deleteTodo } />
=======
                <Todo key={ todo._id } todo={ todo } />
>>>>>>> 565996ace3e32c9f7426c55684217eeabab45a7b
            )
        })
        return (
            <ul>
                { todos }
            </ul>
        );
    }
}

export default TodosList;
