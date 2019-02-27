const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/book-app", {useNewUrlParser: true});

// mongoose.connect('mongodb://127.0.0.1:27017/book-app').then(() => {
// console.log("Connected to Database");
// }).catch((err) => {
//     console.log("Not Connected to Database ERROR! ", err);
// });

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/book-app');

module.exports.Book = require("./book.js");
module.exports.Author = require("./author.js");