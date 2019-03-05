var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema ({
    name: String,
    alive: Boolean
})


var Author = mongoose.model ('Author', AuthorSchema);
module.exports = Author;