import React, { Component } from 'react';
import Book from "./Book";

class BookList extends Component {
    render(){
//console.log(this.props)
        let books = this.props.books.map( (book, i) => {
          return (
            <Book
              key={i}
              book={book}/>
          )
        })
    
        return(
          <ul>
            {books}
          </ul>
        )
        
      }
    }
 
export default BookList;