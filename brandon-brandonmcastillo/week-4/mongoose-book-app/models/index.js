let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");




module.exports = {
    Book : require("./book.js"),
    Author : require("./author.js")
}