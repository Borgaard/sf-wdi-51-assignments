// models/author.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  name: String,
  alive: String,
  image: String
});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;