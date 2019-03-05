import React, { Component } from 'react'
import Todo from './Todo'

class Todos extends Component {
    render() {
        //returns an array of components
        let todos = this.props.todos.map( (todo) => {
        //for each todo in the array we want to return a Todo component
            return (
                <Todo 
                    key={todo._id}
                    todo={todo}
                    deleteTodo={this.props.deleteTodo}
                    updateTodo={this.props.updateTodo } />
            )
        })
        return (
            <ul>
                {/* JSX syntax to take array of components and display them */}
                {todos}
            </ul>
        )
    }
}

export default Todos