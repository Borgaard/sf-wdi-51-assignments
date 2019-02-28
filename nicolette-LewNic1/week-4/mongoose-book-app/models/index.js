const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app", { useNewUrlParser: true }); 
//local host url data base (connection function)





module.exports.Book = require("./book.js");
