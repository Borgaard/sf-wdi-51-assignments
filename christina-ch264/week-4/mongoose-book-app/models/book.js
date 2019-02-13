// require mongoogse at top to import mongoose
const mongoose = require ('mongoose');
// buildin schema from mongoose object that we set up above
const Schema = mongoose.Schema;

// fill in refelction of attributes has been given by object
const BookSchema = new Schema({
    // keynames lower case
    title: String,
    author: String,
    image: String,
    date: String
})

// we set up a model and save it to a variable:
    // From Schema we can make a model. we can update schema, but model will remain the same
                        // Book is name of Model! and hold it in a const variable with the same name Book
                                    // BookSchema knows all the properties of the book
const Book = mongoose.model('Book', BookSchema);

// remember to export things we want to use! we make this available to be required by other things
// exposing out bookmodel to call in index.js file, does no good in app.js
module.exports = Book;

// now model is done!