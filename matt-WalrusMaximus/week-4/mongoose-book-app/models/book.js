const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports.Author = require("./author.js");

const CharacterSchema = new Schema({
    name: String,
    // when referencing this in the post request, it grabs "name" from the schema
    // not characters from bookSchema localhost:3000/api/books/5c6c7b634a2c110f2399b729/characters
})

const BookSchema = new Schema({
    title: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },
    image: String,
    date: String,
    characters: [CharacterSchema]
})

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;