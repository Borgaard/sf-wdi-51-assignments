const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app"), { useNewUrlParser: true };

module.exports.Book = require("./book");
module.exports.Author = require("./author");
