var mongoose = require('mongoose');
let Schema = mongoose.Schema;

let VideogameSchema = new Schema ({
        title: String,
        avatar: String

})

const Videogame = mongoose.model('Videogame', VideogameSchema);

module.exports = Videogame;