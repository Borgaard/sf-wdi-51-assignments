// book.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
     title: String,
     author: {
      type: Schema.Types.ObjectId,
      ref: 'Author'
    },
     image: String,
    description: String
    // you should fill the rest of this in
 });

 var Book = mongoose.model('Book', BookSchema);

module.exports = Book;