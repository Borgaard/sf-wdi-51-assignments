const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports.Author = require("./author.js");

const CharacterSchema = new Schema({
    name: String
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