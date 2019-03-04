var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
    title: String,
    avatar: String
})

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;