const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AuthorSchema = new Schema ({
    name: String;
    alive: Boolean;
    image: String;
})

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
