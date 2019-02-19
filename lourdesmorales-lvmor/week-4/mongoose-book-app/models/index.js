const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app", { useNewUrlParser: true });

//index.js will import each model and export an object
//import book model (from book.js) and exporting from index.js file
module.exports.Book = require("./book");

// other way to type if we have more models:
// module.exports = {
//     Book: require('./book.js'),
//     Author: require('./author.js'),
//     Publisher: require('./publisher.js')
//   };