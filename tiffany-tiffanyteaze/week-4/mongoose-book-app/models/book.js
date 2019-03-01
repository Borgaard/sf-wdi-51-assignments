let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  Author = require('./author');

let CharacterSchema = new Schema({
  name: String
});

let BookSchema = new Schema({
     title: String,
     author: {type: Schema.Types.ObjectId, ref: 'Author'},
     image: String,
     releaseDate: String,
     characters: [CharacterSchema]
});

var Book = mongoose.model('Book', BookSchema);
module.exports = Book;
