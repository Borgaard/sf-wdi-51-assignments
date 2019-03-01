import React, {Component} from 'react'
import Todo from './Todo'

class Todos extends Component {
    render(){
        let todos = this.props.todos.map( (todo) => {
        return (
            <Todo
            key={todo._id}
            todo={todo}
            updateTodo={this.props.updateTodo}
            deleteTodo={this.props.deleteTodo}/>
        )
        })
        return(
        <ul>
            {todos}
        </ul>
        )
    }
}

export default Todos