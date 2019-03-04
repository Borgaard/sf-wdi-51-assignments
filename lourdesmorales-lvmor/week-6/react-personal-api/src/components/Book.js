import React, {Component} from 'react'

class Todo extends Component {
    state = { 
        book: ""
     }

     //delete function
    deleteClicked = () => {
         this.props.deleteBook(this.props.book._id);
     }

    editClicked = () => {
        this.props.editBook(this.props.book._id);
    }

    render() { 
        return ( 
            <li data-book-index={this.props.book._id}>
            <span>{this.props.book.title}</span>
            {/* delete functionality */}
            <input type="button" className="edit"  value="Edit"
            onClick={this.editClicked} />
            <input type="button" className="remove"  value="Remove"
            onClick={this.deleteClicked} />

          </li> 
         );
    }
}

export default Todo