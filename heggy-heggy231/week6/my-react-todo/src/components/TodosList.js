import React, { Component } from 'react';
import Todo from './Todo'

class TodosList extends Component {

  render(){
    // debugger;
    let todos = this.props.todos.map( (todo) => {
      return (
        <Todo
    // _id is from https://super-crud-api.herokuapp.com/api/todos api call mongoose created unique id. React needs this id for each new item
/* 
  {
    "todos": [
      {
        "_id": "5c36a379955b93001329b49b",
        "body": "reedux is going to be so much fun!! cant wait!!",
        "completed": false,
        "__v": 0
      },     
      {},
      {},
    ]
  }

  we want to give react uniquue id since react requires it
*/
          key={todo._id}
          todo={todo}
  // this signals that deleteTodo is coming down form parent component
          deleteTodo={this.props.deleteTodo}
          updateTodo={this.props.updateTodo} 
          />
      )
    })

    return(
      <ul>
        {/* getting data from todos */}
        { todos }
      </ul>
    )
    
  }

}

export default TodosList;