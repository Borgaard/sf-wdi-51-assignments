//Made a schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
     title: String,
     author: {
         type: Schema.Types.ObjectId,
         ref: "Author"
     },
     image: String,
     date: String
 });

 //Model, name of model same as variable name, inform it with book schema
 const Book = mongoose.model('Book', BookSchema);
 
 //always export to use in other parts of application
 // Book is the variable to export to index.js
 module.exports = Book;

 // can look a little different check online - incomplete
//  module.exports = {
//      Book:
//     }