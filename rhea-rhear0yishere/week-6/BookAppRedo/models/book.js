var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var Author = require("./author.js");


var BookSchema = new Schema ({
    title: String,
    author:
    {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },
    image: String,
    relaseDate: Date
})


var Book = mongoose.model ('Book', BookSchema);
module.exports = Book;