const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: String
});

const BookSchema = new Schema({
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author"
  },
  image: String,
  releaseDate: String,
  characters: [CharacterSchema]
});

let Book = mongoose.model("Book", BookSchema);

module.exports = Book;
