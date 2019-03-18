const mongoose = require("mongoose");
Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  name: String,
  alive: Boolean,
  image: String
});

let Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
