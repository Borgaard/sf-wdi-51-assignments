// One resource (mongoose model) PART 3
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    image: String,
    releaseDate: String,
    characters: String
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;