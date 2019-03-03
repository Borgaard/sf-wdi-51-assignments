import React, {Component} from 'react'

class Todo extends Component {
    state = { 
        book: ""
     }
    render() { 
        return ( 
            <li data-book-index={this.props.book._id}>
            <span>{this.props.book.title}</span>
          </li> 
         );
    }
}

export default Todo