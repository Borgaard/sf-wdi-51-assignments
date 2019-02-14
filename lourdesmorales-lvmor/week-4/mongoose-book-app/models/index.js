const mongoose = require("mongoose");

// url to have instance connect to, url is locally hosted database
// adding { useNewUrlParser: true}) optional, used for deprication warning in terminal to adjust to newer versions
mongoose.connect("mongodb://localhost/book-app", { useNewUrlParser: true});

//import book model (from book.js) and exporting from index.js file
module.exports.Book = require("./book.js"); //module -bit of code is conained in single place- exported from js file, mode file
// alternate way to write it:
// module.exports = {
//     Book: require("./book.js"),
// }
module.exports.Author = require("./author.js");
