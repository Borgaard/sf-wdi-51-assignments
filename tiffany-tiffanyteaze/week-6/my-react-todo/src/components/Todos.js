import React, { Component } from 'react'
import Todo from './Todo'

class Todos extends Component {
    render() {
        let todos = this.props.todos.map( (todo) => {
        //for each todo in the array we want to return a Todo component
            return (
                <Todo 
                    key={todo._id}
                    todo={todo} />
            )
        })
        return (
            <ul>
                {todos}
            </ul>
        )
    }
}

export default Todos