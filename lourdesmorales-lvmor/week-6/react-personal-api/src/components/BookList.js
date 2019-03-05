import React, { Component } from 'react';
import Book from "./Book";

class BookList extends Component {
    render(){
//console.log(this.props)
        let books = this.props.books.map( (book, i) => {
          return (
            <Book
              key={i}
              book={book}
              editBook={this.props.editBook}
              deleteBook={this.props.deleteBook}
              />
          )
        })
        
        //Delete book
        // let books =this.props.books.map((book) => {
        //   return (
        //     <Book
        //     key={book._id}
        //     book={book}
        //     deleteBook={this.props.deleteBook}/>
        //   )
        // })

        return(
          <ul>
            {books}
          </ul>
        )
        
        
      }
    }
 
export default BookList;