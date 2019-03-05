// Book Schema and Model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//updated book schema to reference author
const BookSchema = new Schema({
    title: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },
    image: String,
    releaseDate: String
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const BookSchema = new Schema({
//     title: String,
//     author: String,
//     image: String,
//     releaseDate: String
// });

// const Book = mongoose.model('Book', BookSchema);
// module.exports = Book;