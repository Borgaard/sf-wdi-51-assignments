const mongoose = require('mongoose');
Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    date: String,
    mainCharacter: String
})


const Book = mongoose.model('Book', BookSchema);
module.exports = Book;