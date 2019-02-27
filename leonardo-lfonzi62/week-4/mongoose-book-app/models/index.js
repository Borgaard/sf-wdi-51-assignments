// index.js will import each model and export an object called exports 
// with keys representing each of our models. That way we can require the entire directory and get all of our models! 

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app",{ useNewUrlParser: true });

// right side of the equation is grabbing the books model from 
// the book.js file. left side of the equation exports and makes it available
module.exports.Book = require('./book.js');
module.exports.Author = require('./author.js');
