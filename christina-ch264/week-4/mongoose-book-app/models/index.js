
var mongoose = require("mongoose");                 // run through node seed and put in option, what the terminal tells you
mongoose.connect("mongodb://localhost/book-app"), { useNewUrlParser: true};



// module is a file that can move around and be used in different places.
// oneline to import and pick up exports and export them at the same time
module.exports.Book = require('./book.js')

// could also write like this: 
// const Book = require('./book.js');
// module.exports = {
//     Book;
// }

