const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/book-app");

// Import and export
module.exports.Book = require("./book.js");
module.exports.Author = require("./author.js");
