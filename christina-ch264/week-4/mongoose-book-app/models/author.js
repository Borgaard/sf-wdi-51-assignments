const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: String,
    alive: Boolean,
    image: String
})

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;