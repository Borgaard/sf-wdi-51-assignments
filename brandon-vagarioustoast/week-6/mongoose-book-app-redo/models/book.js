const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author"
  },
  image: String,
  releaseDate: String
});

const CharacterSchema = new Schema({
  name: String
});

let Book = mongoose.model("Book", BookSchema);
let Character = mongoose.model("Character", CharacterSchema);

module.exports = {
  Book,
  Character
};
