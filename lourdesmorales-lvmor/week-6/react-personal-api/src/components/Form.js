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
    let obj = {
      _id: this.state._id,
      title: this.state.title,
      author: this.state.author,
      image: this.state.image,
      releaseDate: this.state.releaseDate,
      characters: this.state.characters    
    };

    var formData = new FormData();
    formData.set('_id', this.state._id);
    formData.set('title', this.state.title);
    console.log(this.state.title)
    formData.set('author', this.state.author);
    formData.set('image', this.state.image);
    formData.set('releaseDate', this.state.releaseDate);
    formData.set('characters', this.state.characters);
    BookModel.postbook(formData).then(res => {
      this.loadBooks();
    });
    // console.info(`a new book submitted ${newBook}`);
    event.preventDefault();
  };

  handleChange = event => {
    // console.log("a change occured, change is " + event.target.value);
    this.setState({ [event.target.name]: event.target.value });
    //console.log("this is the event/////////", event);
    //console.log(event.target.name, event.target.value)
    //console.log(this.state)
  };

  
  render() {
    // let newBook = this.bookList.newBookValue;
    // console.log("current state>>>>>>>", this.state);
    // console.log(this.state.bookList.newBookValue);
    // console.log("props>>>>", this.props);

    

    return (
      <div>
        <h1>{this.props.appName}</h1>
        <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="id"
              // value={this.state.newBookValue}
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

        <BookList books={this.state.bookList} />
      </div>
    );
  }
}

export default Form;
