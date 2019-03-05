import React, {Component} from 'react'

class CreateBookForm extends Component {
    state = { 
        book: ""
     }

  handleChange = (event) => {
    this.setState({
      book: event.target.value
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    let book = this.state.book
    this.props.createBook(book)
    this.setState({
      book: ""
    })
  }
  render(){
    return (
        <div>
        <h1>{this.props.appName}</h1>
        <form onSubmit={this.handleSubmit}>
            <input
              type="hidden"
              id="newBookItem"
              name="id"
              // value={this.state.book}
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
    )
  }
}

export default CreateBookForm;