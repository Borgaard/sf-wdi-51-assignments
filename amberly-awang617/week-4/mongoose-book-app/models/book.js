// require mongoose, enable useof mongoose package
const mongoose = require('mongoose');
// create a Schema with mongoose command
const Schema = mongoose.Schema;

const CharacterSchema = new Schema ({
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
});


// use mongoose's model function, takes a "book"  and informs it with the BookSchema
const Book = mongoose.model('Book', BookSchema)

// module is an object which has a exports property
// let this property be the Book model we just made
module.exports = Book;