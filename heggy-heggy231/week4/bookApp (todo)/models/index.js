const mongoose = require("mongoose");
// locally hosted db of mongodb
mongoose.connect("mongodb://localhost/book-app", { useNewUrlParser: true });

// models/index.js
//   export       then   import         
// module.exports.Book = require("./book.js");
module.exports.Book = require("./book.js");

/*
option 1 for doing  module.exports.Book = require("./book.js");
option 2: 
const book = require("./book.js"); 
module.exports = {
  Book: require("./book.js"),
}
*/
/*
ex of multiple module model

module.exports = {
  // Book, Author, Pub are model
  //  ex: module.exports.Book = require("./book.js");
  Book: require('./book.js'),
  Author: require('./author.js'),
  Publisher: require('./publisher.js')
};
*/