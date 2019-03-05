import React, { Component } from "react";
import BookList from "./BookList";
import BookModel from "../models/Book";


class Form extends Component {

  constructor(){
    super()
    this.loadBooks()
  }
  state = {
    bookList: [],
    
    _id: "",
    title: "",
    author: "",
    image: "",
    releaseDate: "",
    characters: "",
    
  };

  loadBooks = () => {
    BookModel.allbooks().then(res => {
       console.log(res);

      this.setState({
        bookList: res.data
      });
    });
  }

  handleSubmit = event => {
    let newBook = {
      _id: this.state._id,
      title: this.state.title,
      author: this.state.author,
      image: this.state.image,
      releaseDate: this.state.releaseDate,
      characters: this.state.characters    
    };

    if (newBook._id === '') {
      BookModel.create(newBook).then(res => {
        console.log(res);
        this.loadBooks();
      });
    } else {
      BookModel.update(newBook).then(res => {
        console.log(res);
        this.loadBooks();
      });
    }
  
    
    // console.info(`a new book submitted ${newBook}`);



    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });

  };

  //delete functionality
  deleteBook = (_id) => {
    BookModel.delete(_id).then((res) => {
        // let books = this.state.books.filter(function(book) {
        //   return book._id !== res.data._id
        // });
        // this.setState({books})
        this.loadBooks();
    })};

    editBook = _id => {
      BookModel.find(_id).then(res => {
        console.log(res);
        this.setState({
          _id: res.data[0]._id,
          title: res.data[0].title,
          author: res.data[0].author,
          image: res.data[0].image,
          releaseDate: res.data[0].releaseDate,
          characters: res.data[0].characters,

        });


      })
    };

  
  render() {



    return (
      <div>
        <h1>{this.props.appName}</h1>
        <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="_id"
              value={this.state._id}
              onChange={this.handleChange}
            />
          <label htmlFor="title">
            Title:
            </label>
            <input
              type="text"
              name="title"
              placeholder="book title"
              value={this.state.title}
              onChange={this.handleChange}
            />

             <label htmlFor="author">
            Author:
            </label>
            <input
              type="text"
              name="author"
              placeholder="book author"
              value={this.state.author}
              onChange={this.handleChange}
            />

          <label htmlFor="image">
            Image:
            </label>
            <input
              type="text"
              name="image"
              placeholder="book image"
              value={this.state.image}
              onChange={this.handleChange}
            />
         
         <label htmlFor="releaseDate">
            Release Date:
        </label>
            <input
              type="text"
              name="releaseDate"
              placeholder="book author"
              value={this.state.releaseDate}
              onChange={this.handleChange}
            />

<label htmlFor="characters">
            Characters:
            </label>
            <input
              type="text"
              name="characters"
              placeholder="book characters"
              value={this.state.characters}
              onChange={this.handleChange}
            />

          <button>Save Book</button>
        </form>

        <BookList books={this.state.bookList} 
            editBook={this.editBook}
            deleteBook={this.deleteBook} />
      </div>
    );
  }
}

export default Form;
