var mongoose = require("mongoose");
// connects to a local book-app database URI
// the mongoose.connect line will only happen once in your code for each project
mongoose.connect("mongodb://localhost/book-app", { useNewUrlParser: true });

// index.js will import each model and export an object called exports with keys representing each of our models. 
// ./models in server.js you get back an object like { Book: Model}

module.exports = {
  Book: require("./book.js"),
}; 