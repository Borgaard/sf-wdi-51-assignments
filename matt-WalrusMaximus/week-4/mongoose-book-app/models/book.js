const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    image: String,
    date: String,
})

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;