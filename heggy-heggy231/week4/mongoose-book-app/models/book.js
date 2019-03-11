// create a schema and model for books in this file!
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create model schema 
const BookSchema = new Schema({
  title: String,
  author: String,
  image: String,
  releaseDate: String,
});

// create the Book model from the schema
const Book = mongoose.model('Book', BookSchema);

module.exports = Book;